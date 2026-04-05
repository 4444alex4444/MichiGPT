import { NextRequest, NextResponse } from 'next/server'

type ResponseDepth = 'short' | 'normal' | 'deep'
type ChatMode = 'factual' | 'guide'
type SourceKind = 'official' | 'university' | 'secondary' | 'community'
type VerificationState = 'verified' | 'partially_verified' | 'could_not_verify'

interface SourceItem {
  title: string
  url: string
  kind: SourceKind
}

interface ChatPayload {
  message?: string
  profile?: { level?: string; responseDepth?: ResponseDepth; scenesOpened?: number }
  history?: Array<{ role: 'user' | 'michi'; content: string }>
}

interface ChatResponseShape {
  reply: string
  mode: ChatMode
  verified: boolean
  verification_state: VerificationState
  topic?: string
  sources: SourceItem[]
  followups: string[]
}

const SYSTEM = `Ты — Michi Journey chat layer.
Всегда возвращай только JSON без markdown fences.

Формат:
{
  "reply": "основной ответ",
  "mode": "factual",
  "verified": true,
  "verification_state": "verified",
  "topic": "scholarships",
  "sources": [{"title":"MEXT","url":"https://...","kind":"official"}],
  "followups": ["...", "..."]
}

Правила:
1) factual mode — grants, universities, programs, language requirements, deadlines, visa, cost, housing, study pathways.
2) guide mode — мотивация, сомнения, язык как процесс, выбор направления, support.
3) factual mode:
- сначала проверка через поиск
- короткий вывод
- 2–4 пункта по делу
- если не удалось надёжно подтвердить: verified=false и verification_state="could_not_verify"
- источники отдельным массивом
- followups 2–4 штуки
4) guide mode:
- короткий поддерживающий ответ
- один маленький следующий шаг
- 2–4 followups
5) не фантазируй на изменчивых темах
6) язык ответа — русский
7) tone: warm, brief, calm, trustworthy.`

function detectMode(message: string): ChatMode {
  const text = message.toLowerCase()
  const factualKeywords = ['грант','стипенд','scholarship','visa','виза','дедлайн','deadline','университет','university','program','programme','jasso','mext','eju','housing','жиль','tuition','стоимост','общежит','part-time','подработ','requirements','требован','портфолио','поступл']
  return factualKeywords.some(k => text.includes(k)) ? 'factual' : 'guide'
}

function detectTopic(message: string): string {
  const t = message.toLowerCase()
  if (t.includes('грант') || t.includes('стипенд') || t.includes('mext') || t.includes('jasso')) return 'scholarships'
  if (t.includes('виза') || t.includes('visa')) return 'visa'
  if (t.includes('общеж') || t.includes('жиль') || t.includes('housing')) return 'housing'
  if (t.includes('design') || t.includes('дизайн') || t.includes('портфолио')) return 'design_study'
  if (t.includes('универс') || t.includes('program') || t.includes('eju')) return 'universities'
  return 'general'
}

function getMaxOutputTokens(depth: ResponseDepth | undefined, mode: ChatMode): number {
  const map: Record<ResponseDepth, number> = { short: 420, normal: 900, deep: 1500 }
  const base = map[depth ?? 'normal']
  return mode === 'factual' ? Math.min(base + 180, 1700) : base
}

function extractOutputText(data: any): string {
  if (typeof data?.output_text === 'string' && data.output_text.trim()) return data.output_text.trim()
  const parts: string[] = []
  for (const item of Array.isArray(data?.output) ? data.output : []) {
    for (const block of Array.isArray(item?.content) ? item.content : []) {
      if (typeof block?.text === 'string' && block.text.trim()) parts.push(block.text.trim())
      if (typeof block?.output_text === 'string' && block.output_text.trim()) parts.push(block.output_text.trim())
    }
  }
  return parts.join('\n').trim()
}

function safeJsonParse(text: string): ChatResponseShape | null {
  try { return JSON.parse(text) } catch {
    const start = text.indexOf('{')
    const end = text.lastIndexOf('}')
    if (start !== -1 && end !== -1 && end > start) {
      try { return JSON.parse(text.slice(start, end + 1)) } catch {}
    }
    return null
  }
}

function fallbackReply(mode: ChatMode, topic: string): ChatResponseShape {
  if (mode === 'factual') {
    return {
      reply: 'Я не смог аккуратно собрать проверяемый factual-ответ. Лучше сузить вопрос до одной программы, одного университета или одного типа гранта.',
      mode: 'factual',
      verified: false,
      verification_state: 'could_not_verify',
      topic,
      sources: [],
      followups: ['Посмотреть MEXT', 'Сравнить 3 вуза', 'Какой язык нужен для поступления?', 'Нужен ли EJU?'],
    }
  }
  return {
    reply: 'Давай пойдём маленьким шагом. На сегодня достаточно выбрать один фокус: язык, вузы, портфолио или будущий design track.',
    mode: 'guide',
    verified: true,
    verification_state: 'verified',
    topic,
    sources: [],
    followups: ['С чего начать прямо сейчас?', 'Что учить после N4?', 'Как не перегореть?', 'Что важнее сейчас: язык или вузы?'],
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json() as ChatPayload
    const message = String(body.message ?? '').trim()
    if (!message) return NextResponse.json({ reply: 'Нужно сообщение пользователя.' }, { status: 400 })

    const apiKey = process.env.OpenAI_KEY_Michi || process.env.OPENAI_API_KEY
    if (!apiKey) {
      return NextResponse.json({
        reply: 'Не вижу OpenAI API key в окружении проекта.',
        mode: 'guide',
        verified: false,
        verification_state: 'could_not_verify',
        topic: 'general',
        sources: [],
        followups: ['Проверить env в Vercel'],
      })
    }

    const mode = detectMode(message)
    const topic = detectTopic(message)
    const responseDepth = body.profile?.responseDepth ?? 'normal'
    const history = Array.isArray(body.history) ? body.history.slice(-4) : []
    const historyText = history.map((m) => `${m.role === 'michi' ? 'assistant' : 'user'}: ${m.content}`).join('\n')

    const requestBody: Record<string, unknown> = {
      model: 'gpt-5-mini',
      instructions: SYSTEM,
      input: `Profile: level=${body.profile?.level ?? 'N4'}, scenes=${body.profile?.scenesOpened ?? 0}, depth=${responseDepth}, mode=${mode}, topic=${topic}\n${historyText ? `History:\n${historyText}\n` : ''}User message: ${message}`,
      max_output_tokens: getMaxOutputTokens(responseDepth, mode),
      reasoning: { effort: 'low' },
    }
    if (mode === 'factual') requestBody.tools = [{ type: 'web_search_preview' }]

    const response = await fetch('https://api.openai.com/v1/responses', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${apiKey}` },
      body: JSON.stringify(requestBody),
    })

    const raw = await response.text()
    if (!response.ok) return NextResponse.json(fallbackReply(mode, topic))

    const text = extractOutputText(JSON.parse(raw))
    const parsed = safeJsonParse(text) ?? fallbackReply(mode, topic)
    return NextResponse.json({
      reply: parsed.reply?.trim() || fallbackReply(mode, topic).reply,
      mode: parsed.mode === 'factual' || parsed.mode === 'guide' ? parsed.mode : mode,
      verified: typeof parsed.verified === 'boolean' ? parsed.verified : mode === 'guide',
      verification_state: ['verified','partially_verified','could_not_verify'].includes((parsed as any).verification_state) ? (parsed as any).verification_state : (mode === 'guide' ? 'verified' : 'partially_verified'),
      topic: parsed.topic || topic,
      sources: Array.isArray(parsed.sources) ? parsed.sources.slice(0, 5) : [],
      followups: Array.isArray(parsed.followups) ? parsed.followups.slice(0, 4) : fallbackReply(mode, topic).followups,
    })
  } catch (error) {
    console.error(error)
    return NextResponse.json({
      reply: 'Что-то сломалось на сервере. Это неприятно, но чинится.',
      mode: 'guide',
      verified: false,
      verification_state: 'could_not_verify',
      topic: 'general',
      sources: [],
      followups: ['Повторить запрос'],
    }, { status: 500 })
  }
}
