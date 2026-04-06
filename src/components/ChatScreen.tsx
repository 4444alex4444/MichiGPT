'use client'
import { useEffect, useMemo, useRef, useState } from 'react'
import { UserProfile } from '@/lib/profile'

interface Props { profile: UserProfile; onBack: () => void; isDark: boolean }
interface SourceItem { title: string; url: string; kind?: 'official' | 'university' | 'community' | 'secondary' }
interface StructuredReply {
  reply: string
  sources?: SourceItem[]
  followups?: string[]
  verified?: boolean
  verification_state?: 'verified' | 'partially_verified' | 'could_not_verify'
  mode?: 'factual' | 'guide'
}
interface Message { role: 'user' | 'michi'; content: string; meta?: StructuredReply }

const starter = 'Привет. Я могу быть tхом проводником по японскому, дизайну и пути к учёбе в Японик'

export default function ChatScreen({ profile, onBack, isDark }: Props) {
  const [messages, setMessages] = useState<Message[]>([{role: 'michi', content: starter }])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const listRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => { listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' }) }, [messages, loading])

  const palette = useMemo(() => ({
    bg: isDark ? '#11121b' : '#f6f2eb',
    card: isDark ? 'rgba(25,28,40,0.88)' : 'rgba(255,255,255,0.88)',
    border: isDark ? '#2a2d3e' : '#e6ddd0',
    text: isDark ? '#ece7df' : '#2b2925',
    muted: isDark ? '#9a978f' : '#776f65',
    accent: isDark ? '#d0ae80' : '#8b6c42',
    user: isDark ? '#3a2c1f' : '#efe3d3',
    assistant: isDark ? '#1c2130' : '#fffdfa',
  }), [isDark])

  async function sendMessage(text?: string) {
    const value = (text ?? input).trim()
    if (!value || loading) return
    const nextUser: Message = { role: 'user', content: value }
    setMessages((prev) => [...prev, nextUser])
    setInput('')
    setLoading(true)
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: value,
          profile,
          history: messages.slice(-4).map((m) => ({ role: m.role, content: m.content })),
        }),
      })
      const data: StructuredReply = await res.json()
      setMessages((prev) => [...prev, { role: 'michi', content: data.reply, meta: data }])
    } catch {
      setMessages((prev) => [...prev, { role: 'michi', content: 'Я не смог ответить прямо сейчас. Попробуй ещё раз через минуту.' }])
    } finally { setLoading(false) }
  }

  return (
    <div style={{ minHeight: '100dvh', paddingBottom: 20 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '16px 16px 12px' }}>
        <button onClick={onBack} style={{ background: 'none', border: 'none', fontSize: 24, cursor: 'pointer', color: palette.text }}>←</button>
        <div>
          <div style={{ fontSize: 18, fontWeight: 700, color: palette.text }}>Поговорить с Michi</div>
          <div style={{ fontSize: 12, color: palette.muted }}>Guide mode + verified factual mode</div>
        </div>
      </div>

      <div ref={listRef} style={{ height: 'calc(100dvh - 170px)', overflowY: 'auto', padding: '0 16px', display: 'flex', flexDirection: 'column', gap: 12 }}>
        {messages.map((m, idx) => (
          <div key={idx} style={{ alignSelf: m.role === 'user' ? 'flex-end' : 'stretch', maxWidth: m.role === 'user' ? '82%' : '100%' }}>
            <div style={{
              background: m.role === 'user' ? palette.user : palette.assistant,
              border: `1px solid ${palette.border}`,
              color: palette.text,
              borderRadius: 18,
              padding: '12px 14px',
              lineHeight: 1.6,
              whiteSpace: 'pre-wrap',
              boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
            }}>
              {m.content}
            </div>

            {m.role === 'michi' && m.meta && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 10 }}>
                {m.meta.sources && m.meta.sources.length > 0 && (
                  <div style={{ background: palette.card, border: `1px solid ${palette.border}`, borderRadius: 14, padding: 12, backdropFilter: 'blur(8px)' }}>
                    <div style={{ fontSize: 12, color: palette.muted, marginBottom: 8 }}>
                     #Источники {m.meta.verification_state === 'could_not_verify' ? '• could not verify' : m.meta.verification_state === 'partially_verified' || m.meta.verified === false ? '• partially verified' : '• verified'}
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                      {m.meta.sources.map((s, i) => (
                        <a key={i} href={s.url} target="_blank" rel="noreferrer" style={{
                          textDecoration: 'none', color: palette.text, border: `1px solid ${palette.border}`,
                          borderRadius: 12, padding: 10, background: isDark ? 'rgba(255,255,255,0.02)' : 'rgba(255,255,255,0.75)'
                        }}>
                          <div style={{ fontSize: 14, fontWeight: 600 }}>{s.title}</div>
                          <div style={{ fontSize: 11, color: palette.muted, marginTop: 2 }}>{s.kind ?? 'source'}</div>
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {m.meta.followups && m.meta.followups.length > 0 && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {m.meta.followups.map((chip, i) => (
                      <button key={i} onClick={() => sendMessage(chip)} style={{
                        borderRadius: 999, border: `1px solid ${palette.border}`, background: palette.card,
                        color: palette.text, padding: '9px 12px', fontSize: 12, cursor: 'pointer'
                      }}>
                        {chip}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
        {loading && <div style={{ color: palette.muted, fontSize: 13 }}>Michi думает</div>}
      </div>

      <div style={{ position: 'sticky', bottom: 0, padding: 16, background: `linear-gradient(180deg, rgba(0,0,0,0), ${palette.bg})` }}>
        <div style={{ display: 'flex', gap: 10 }}>
          <input value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' ? sendMessage() : undefined}
            placeholder="Спроси про японский, дизайн, вузы, или путь в Японию"
            style={{ flex: 1, borderRadius: 14, border: `1px solid ${palette.border}`, padding: '14px 14px', background: palette.card, color: palette.text, outline: 'none' }}
          />
          <button onClick={() => sendMessage()} style={{ border: 'none', borderRadius: 14, padding: '0 16px', background: palette.accent, color: '#fff', cursor: 'pointer', fontWeight: 700 }}>→</button>
        </div>
      </div>
    </div>
  )
}
