export interface DesignCritiqueCard {
  id: string
  jlptBand: 'N4' | 'N3' | 'N2'
  title: string
  focus: string[]
  sentenceFrames: string[]
  microTask: string
  caution?: string
}

export interface PortfolioTalkFrame {
  id: string
  title: string
  stage: 'starter' | 'bridge' | 'advanced'
  structure: string[]
  usefulJapanese: string[]
  task: string
}

export interface StudySurvivalPattern {
  id: string
  context: 'classroom' | 'deadline' | 'office' | 'group_work' | 'presentation' | 'self_management'
  title: string
  japanese: string[]
  useCase: string
  adhdSupport: string[]
}

export const DESIGN_CRITIQUE_CARDS: DesignCritiqueCard[] = [
  {
    id: 'critique_001',
    jlptBand: 'N4',
    title: 'Name what the eye notices first',
    focus: ['attention', 'first impression', 'visual priority'],
    sentenceFrames: ['最初に目に入るのは〜です', '〜がいちばん目立ちます'],
    microTask: 'Look at one poster or page and say what the eye sees first.',
  },
  {
    id: 'critique_002',
    jlptBand: 'N4',
    title: 'Describe overall feeling without overcomplicating',
    focus: ['mood', 'impression', 'tone'],
    sentenceFrames: ['全体として〜感じです', '〜な印象があります'],
    microTask: 'Describe the overall feeling of one visual in 1–2 lines.',
    caution: 'Stay with visible feeling first, not theory words you cannot control yet.',
  },
  {
    id: 'critique_003',
    jlptBand: 'N4',
    title: 'Comment on balance and spacing',
    focus: ['balance', 'spacing', 'empty space'],
    sentenceFrames: ['〜のバランスがいいです', '余白が〜を助けています', '少し詰まって見えます'],
    microTask: 'Say whether the spacing helps clarity or makes the layout feel crowded.',
  },
  {
    id: 'critique_004',
    jlptBand: 'N4',
    title: 'Talk about color contrast simply',
    focus: ['contrast', 'visibility', 'clarity'],
    sentenceFrames: ['色の差がはっきりしています', '〜が少し見にくいです'],
    microTask: 'Comment on whether the contrast helps readability.',
  },
  {
    id: 'critique_005',
    jlptBand: 'N3',
    title: 'Give one strength and one soft suggestion',
    focus: ['soft critique', 'strength + suggestion', 'social safety'],
    sentenceFrames: ['良い点は〜です', '一方で、〜するともっと伝わりやすいです'],
    microTask: 'Write one strength and one gentle improvement suggestion.',
  },
  {
    id: 'critique_006',
    jlptBand: 'N3',
    title: 'Explain hierarchy and reading flow',
    focus: ['hierarchy', 'reading order', 'guidance'],
    sentenceFrames: ['視線が〜から〜へ流れます', '〜が情報の中心になっています'],
    microTask: 'Explain how the viewer probably moves through the layout.',
  },
  {
    id: 'critique_007',
    jlptBand: 'N3',
    title: 'Relate form to intention',
    focus: ['intention', 'effect', 'fit'],
    sentenceFrames: ['〜という意図に合っています', 'この形は〜を強調しています'],
    microTask: 'Connect one visible design decision to a likely intention.',
  },
  {
    id: 'critique_008',
    jlptBand: 'N3',
    title: 'Talk about consistency across elements',
    focus: ['consistency', 'repetition', 'coherence'],
    sentenceFrames: ['全体に一貫性があります', '〜のルールが少し弱いです'],
    microTask: 'Comment on whether the parts feel connected or fragmented.',
  },
  {
    id: 'critique_009',
    jlptBand: 'N3',
    title: 'Critique clarity under practical conditions',
    focus: ['usability', 'quick understanding', 'viewer burden'],
    sentenceFrames: ['すぐに理解しやすいです', '少し情報が多く感じます'],
    microTask: 'Judge whether the message is clear for a tired or busy viewer.',
  },
  {
    id: 'critique_010',
    jlptBand: 'N2',
    title: 'Explain trade-offs',
    focus: ['trade-off', 'compromise', 'design choice under constraint'],
    sentenceFrames: ['〜を優先したため、〜は控えめです', 'そのかわりに〜が弱くなっています'],
    microTask: 'Explain one design trade-off in a calm, non-defensive way.',
  },
  {
    id: 'critique_011',
    jlptBand: 'N2',
    title: 'Frame critique as constructive direction',
    focus: ['constructive critique', 'next step', 'studio usefulness'],
    sentenceFrames: ['次の段階では〜を試すとよさそうです', 'もし〜なら、さらに明確になると思います'],
    microTask: 'Turn critique into a next-step proposal instead of mere judgment.',
  },
  {
    id: 'critique_012',
    jlptBand: 'N2',
    title: 'Discuss context and audience fit',
    focus: ['audience', 'context', 'appropriateness'],
    sentenceFrames: ['対象に対して〜が合っています', 'この文脈では〜のほうが自然です'],
    microTask: 'Say whether the design feels right for its audience and context.',
  },
]

export const PORTFOLIO_TALK_FRAMES: PortfolioTalkFrame[] = [
  {
    id: 'portfolio_001',
    title: 'Starter frame: what it is and why I made it',
    stage: 'starter',
    structure: ['what this project is', 'why I chose it', 'what I wanted to express'],
    usefulJapanese: ['これは〜のプロジェクトです', '〜と思って作りました', '表したかったのは〜です'],
    task: 'Describe one project in 30–45 seconds.',
  },
  {
    id: 'portfolio_002',
    title: 'Bridge frame: process and revision',
    stage: 'bridge',
    structure: ['first version', 'problem I noticed', 'what I changed', 'result'],
    usefulJapanese: ['最初は〜でした', '問題だと思ったのは〜です', 'そのあとで〜に変えました', '結果として〜になりました'],
    task: 'Explain one revision path from first draft to later version.',
  },
  {
    id: 'portfolio_003',
    title: 'Advanced frame: intention, method, effect, trade-off',
    stage: 'advanced',
    structure: ['intention', 'method', 'effect', 'trade-off or limitation'],
    usefulJapanese: ['意図としては〜です', 'そのために〜を使いました', '〜という効果をねらいました', 'ただ、そのかわりに〜があります'],
    task: 'Give a more mature explanation of one project decision.',
  },
  {
    id: 'portfolio_004',
    title: 'Audience frame: who it is for',
    stage: 'bridge',
    structure: ['target audience', 'problem', 'design response'],
    usefulJapanese: ['対象は〜です', '課題は〜でした', 'それに対して〜を考えました'],
    task: 'Describe a project through user or audience logic.',
  },
  {
    id: 'portfolio_005',
    title: 'Reflection frame: what I learned',
    stage: 'advanced',
    structure: ['what worked', 'what was difficult', 'what I would improve next'],
    usefulJapanese: ['うまくいったのは〜です', '難しかったのは〜です', '次は〜を改善したいです'],
    task: 'Reflect on a project without sounding vague or defensive.',
  },
  {
    id: 'portfolio_006',
    title: 'Short faculty-facing explanation',
    stage: 'advanced',
    structure: ['theme', 'choice', 'reason', 'future direction'],
    usefulJapanese: ['テーマは〜です', '〜を選んだ理由は〜です', '今後は〜を深めたいです'],
    task: 'Give a concise explanation suited to an admissions or faculty context.',
  },
]

export const STUDY_SURVIVAL_PATTERNS: StudySurvivalPattern[] = [
  {
    id: 'survival_001',
    context: 'classroom',
    title: 'I need repetition without shame',
    japanese: ['もう一度お願いします', '少し速かったので、もう一回お願いできますか'],
    useCase: 'Use when the teacher or classmate spoke too fast and you need a repeat.',
    adhdSupport: ['normalises repair', 'reduces freeze response', 'high utility phrase'],
  },
  {
    id: 'survival_002',
    context: 'classroom',
    title: 'I need clarification, not repetition',
    japanese: ['ここはどういう意味ですか', '〜ということですか'],
    useCase: 'Use when you heard the words but the meaning is still unclear.',
    adhdSupport: ['meaning-first support', 'reduces overload from pretending to understand'],
  },
  {
    id: 'survival_003',
    context: 'deadline',
    title: 'I need to confirm what is actually due',
    japanese: ['締め切りはいつですか', '提出するものは何ですか'],
    useCase: 'Use to reduce panic by converting vague instructions into checkable facts.',
    adhdSupport: ['deadline clarity', 'checklist thinking', 'reduces ambiguity'],
  },
  {
    id: 'survival_004',
    context: 'office',
    title: 'I need help from an office or support desk',
    japanese: ['この件について相談したいです', 'どこに聞けばいいですか'],
    useCase: 'Use when you do not know which office or person handles the issue.',
    adhdSupport: ['help-seeking normalisation', 'decision relief', 'survival utility'],
  },
  {
    id: 'survival_005',
    context: 'group_work',
    title: 'I need to participate without sounding too strong',
    japanese: ['私は〜と思います', '一つの案としては〜です'],
    useCase: 'Use to enter discussion gently in group projects or class activities.',
    adhdSupport: ['social safety', 'soft entry', 'low-pressure participation'],
  },
  {
    id: 'survival_006',
    context: 'presentation',
    title: 'I need signposting phrases',
    japanese: ['まず〜を説明します', '次に〜を見てください', '最後に〜をまとめます'],
    useCase: 'Use when presenting work and you need an easy structure for your speech.',
    adhdSupport: ['speech structure', 'working-memory support', 'clear audience guidance'],
  },
  {
    id: 'survival_007',
    context: 'self_management',
    title: 'I need a restart sentence for myself',
    japanese: ['今日は小さい一歩でいい', '全部ではなく、次の一つだけやる'],
    useCase: 'Use as an internal language frame when overwhelm starts blocking action.',
    adhdSupport: ['self-regulation', 'gentle restart', 'reduces all-or-nothing thinking'],
  },
  {
    id: 'survival_008',
    context: 'deadline',
    title: 'I need to ask whether something is required or optional',
    japanese: ['これは必須ですか', '提出しなくても大丈夫ですか'],
    useCase: 'Use when you need to distinguish core requirements from optional extras.',
    adhdSupport: ['priority filtering', 'reduces wasted effort', 'practical clarity'],
  },
  {
    id: 'survival_009',
    context: 'office',
    title: 'I need procedural guidance',
    japanese: ['手続きの流れを教えてください', '最初に何をすればいいですか'],
    useCase: 'Use when official instructions feel too dense or fragmented.',
    adhdSupport: ['turns bureaucracy into sequence', 'reduces fog', 'action-first framing'],
  },
  {
    id: 'survival_010',
    context: 'presentation',
    title: 'I need a calm way to handle a question',
    japanese: ['少し考えてもいいですか', '確認しますと、質問は〜ですか'],
    useCase: 'Use when you need a second to process a question instead of freezing.',
    adhdSupport: ['processing-time permission', 'reduces panic', 'interaction scaffold'],
  },
]

export default {
  DESIGN_CRITIQUE_CARDS,
  PORTFOLIO_TALK_FRAMES,
  STUDY_SURVIVAL_PATTERNS,
}
