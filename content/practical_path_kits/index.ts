export type PathKitHorizon = 'now' | 'next' | 'later'
export type PathKitCategory = 'language' | 'pathway' | 'design' | 'housing' | 'money' | 'documents' | 'support'

export interface DecisionSheet {
  id: string
  title: string
  horizon: PathKitHorizon
  category: PathKitCategory
  keyQuestion: string
  comparePoints: string[]
  minimumOutputs: string[]
  adhdSupport: string[]
}

export interface VerificationChecklist {
  id: string
  title: string
  category: PathKitCategory
  checkWith: Array<'official' | 'university' | 'provider' | 'community'>
  mustVerify: string[]
  commonMistakes: string[]
  nextAction: string
}

export interface PathScenario {
  id: string
  title: string
  horizon: PathKitHorizon
  situation: string
  usefulMoves: string[]
  avoid: string[]
  closingFrame: string
}

export interface FutureBridge {
  id: string
  title: string
  connects: string[]
  whyItMatters: string
  learnerPrompt: string
}

export const DECISION_SHEETS: DecisionSheet[] = [
  {
    id: 'decision_001',
    title: 'What should matter this month?',
    horizon: 'now',
    category: 'pathway',
    keyQuestion: 'Is the real bottleneck language habit, information clarity, or future pathway confusion?',
    comparePoints: ['what feels urgent', 'what is actually blocking progress', 'what is small enough to act on now'],
    minimumOutputs: ['one main focus', 'one supporting track', 'one thing to postpone'],
    adhdSupport: ['one-focus rule', 'reduced overwhelm', 'visible next step'],
  },
  {
    id: 'decision_002',
    title: 'General Japanese vs academic Japanese vs design Japanese',
    horizon: 'next',
    category: 'language',
    keyQuestion: 'Which language layer is weakest right now and therefore deserves extra weight?',
    comparePoints: ['daily survival confidence', 'instruction/lecture decoding', 'critique/presentation language'],
    minimumOutputs: ['weakest layer', 'one weekly priority shift', 'one content family to increase'],
    adhdSupport: ['clear mental model', 'less vague guilt', 'better targeting'],
  },
  {
    id: 'decision_003',
    title: 'Design dream or design path?',
    horizon: 'next',
    category: 'design',
    keyQuestion: 'Is design currently only aesthetic inspiration, or is it becoming a Japanese-speaking study direction?',
    comparePoints: ['design vocabulary growth', 'critique comfort', 'portfolio explanation readiness'],
    minimumOutputs: ['one design-language gap', 'one design task for this week', 'one reason this matters for the future'],
    adhdSupport: ['identity-driven structure', 'converts dream into action', 'high relevance'],
  },
  {
    id: 'decision_004',
    title: 'Housing route comparison',
    horizon: 'later',
    category: 'housing',
    keyQuestion: 'What matters more in the first period: cost, support, simplicity, distance, or independence?',
    comparePoints: ['dorm vs private', 'support level', 'contract complexity', 'daily commute burden'],
    minimumOutputs: ['priority order', '2 comparison routes', 'questions to verify on real sources'],
    adhdSupport: ['comparison scaffold', 'decision support', 'reduces fog'],
  },
  {
    id: 'decision_005',
    title: 'Money reality check',
    horizon: 'later',
    category: 'money',
    keyQuestion: 'Which part is the real financial unknown: tuition, living costs, timing, or work assumptions?',
    comparePoints: ['official numbers vs anecdotal numbers', 'fixed vs variable costs', 'known vs unverified assumptions'],
    minimumOutputs: ['one uncertainty map', 'one source list', 'one comparison table to make next'],
    adhdSupport: ['turns anxiety into categories', 'comparison-first thinking', 'less panic'],
  },
  {
    id: 'decision_006',
    title: 'Where do I ask for help first?',
    horizon: 'now',
    category: 'support',
    keyQuestion: 'Which question belongs to a teacher, an office, a provider, or official documentation?',
    comparePoints: ['who owns the answer', 'how urgent the issue is', 'whether the question is factual or emotional'],
    minimumOutputs: ['best first contact point', 'question phrasing', 'backup source'],
    adhdSupport: ['decision relief', 'help-seeking normalization', 'reduces freeze response'],
  },
]

export const VERIFICATION_CHECKLISTS: VerificationChecklist[] = [
  {
    id: 'verify_001',
    title: 'Scholarship check before excitement',
    category: 'money',
    checkWith: ['official', 'university', 'community'],
    mustVerify: ['eligibility', 'language requirements', 'application window', 'required documents', 'renewal/continuation conditions'],
    commonMistakes: ['trusting outdated social posts', 'mixing programs together', 'ignoring exclusions'],
    nextAction: 'Create a one-page scholarship comparison sheet from primary sources.',
  },
  {
    id: 'verify_002',
    title: 'University pathway verification',
    category: 'pathway',
    checkWith: ['university', 'official', 'community'],
    mustVerify: ['program-specific requirements', 'language expectations', 'portfolio/exam demands', 'application flow', 'important dates'],
    commonMistakes: ['assuming one school equals all schools', 'using generic Japan advice as if it were program truth'],
    nextAction: 'Turn each target school into its own requirement card.',
  },
  {
    id: 'verify_003',
    title: 'Housing verification',
    category: 'housing',
    checkWith: ['university', 'provider', 'community'],
    mustVerify: ['contract terms', 'move-in timing', 'guarantor/deposit needs', 'house rules', 'distance and commute reality'],
    commonMistakes: ['looking only at monthly price', 'ignoring setup conditions', 'forgetting daily-life friction'],
    nextAction: 'Build a compare sheet that includes both cost and support complexity.',
  },
  {
    id: 'verify_004',
    title: 'Documents and deadlines verification',
    category: 'documents',
    checkWith: ['official', 'university'],
    mustVerify: ['exact dates', 'required forms', 'who must submit what', 'format restrictions', 'what happens if something is missing'],
    commonMistakes: ['relying on season-level timing', 'not checking exact submission instructions', 'mixing optional with required items'],
    nextAction: 'Rewrite official procedure pages into a plain checklist.',
  },
  {
    id: 'verify_005',
    title: 'Support systems verification',
    category: 'support',
    checkWith: ['university', 'official', 'community'],
    mustVerify: ['which office handles what', 'contact channels', 'what support exists for stress or confusion', 'who can clarify procedures'],
    commonMistakes: ['assuming help is only for emergencies', 'not learning office vocabulary in advance'],
    nextAction: 'Create a support map with office names, uses, and first questions to ask.',
  },
]

export const PATH_SCENARIOS: PathScenario[] = [
  {
    id: 'scenario_001',
    title: 'I feel inspired, but everything is too big',
    horizon: 'now',
    situation: 'The learner wants Japan strongly, but all topics blur together into one heavy future problem.',
    usefulMoves: ['choose one focus for the month', 'use a micro-restart or calm rhythm', 'turn future fog into 3 named questions'],
    avoid: ['full life planning tonight', 'treating anxiety as lack of ability'],
    closingFrame: 'A smaller future can move sooner than a perfect one.',
  },
  {
    id: 'scenario_002',
    title: 'I want design in Japan, but my Japanese is still uneven',
    horizon: 'next',
    situation: 'Motivation is tied to design, but the language path feels fragmented and not yet specialized enough.',
    usefulMoves: ['increase design Japanese touchpoints', 'practice critique and portfolio talk weekly', 'keep academic Japanese growing in parallel'],
    avoid: ['waiting to start design language until “general Japanese is done”'],
    closingFrame: 'Design Japanese should mature in parallel with general growth.',
  },
  {
    id: 'scenario_003',
    title: 'Official information makes me shut down',
    horizon: 'later',
    situation: 'University or procedural pages feel too dense, which causes delay and avoidance.',
    usefulMoves: ['use the 4-question decode: who / what / by when / what next', 'rewrite as checklist', 'separate unknowns from knowns'],
    avoid: ['doom-scrolling forums instead of decoding primary sources'],
    closingFrame: 'Bureaucratic text becomes easier when converted into action steps.',
  },
  {
    id: 'scenario_004',
    title: 'I am worried about life management, not only study',
    horizon: 'later',
    situation: 'The learner senses that housing, routines, offices, and daily life may be harder than expected.',
    usefulMoves: ['study daily-life Japanese as a core layer', 'prepare support questions', 'build survival phrase banks'],
    avoid: ['treating adaptation as a side quest'],
    closingFrame: 'Life management is part of readiness, not something extra.',
  },
]

export const FUTURE_BRIDGES: FutureBridge[] = [
  {
    id: 'bridge_001',
    title: 'Scene -> review -> transfer -> real use',
    connects: ['atmospheric entry', 'memory reinforcement', 'functional expression', 'confidence'],
    whyItMatters: 'This prevents scenes from becoming beautiful but isolated fragments.',
    learnerPrompt: 'Can I use something from today’s scene in one real action or explanation?',
  },
  {
    id: 'bridge_002',
    title: 'JLPT growth -> academic readiness',
    connects: ['level label', 'instruction decoding', 'note-taking', 'lecture structure'],
    whyItMatters: 'A test label alone is not enough for classroom survival.',
    learnerPrompt: 'What academic skill should grow alongside my level target?',
  },
  {
    id: 'bridge_003',
    title: 'Design inspiration -> design trajectory',
    connects: ['visual love', 'vocabulary', 'critique', 'portfolio explanation'],
    whyItMatters: 'Without this bridge, design remains aesthetic motivation instead of a concrete path.',
    learnerPrompt: 'Which design-language task would make my future feel more real this week?',
  },
  {
    id: 'bridge_004',
    title: 'Path to Japan -> practical calm',
    connects: ['future planning', 'verification', 'decision sheets', 'support systems'],
    whyItMatters: 'Practical guidance should reduce chaos instead of increasing it.',
    learnerPrompt: 'What should I verify, and what can I stop worrying about tonight?',
  },
]

export default {
  DECISION_SHEETS,
  VERIFICATION_CHECKLISTS,
  PATH_SCENARIOS,
  FUTURE_BRIDGES,
}
