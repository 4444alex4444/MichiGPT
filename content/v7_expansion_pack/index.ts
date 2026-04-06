export interface ReentryProtocol {
  id: string
  title: string
  trigger: string
  firstStep: string
  secondStep: string
  thirdStep?: string
  emotionalRule: string
}

export interface DesignModule {
  id: string
  jlptBand: 'N4' | 'N3' | 'N2'
  title: string
  focus: string[]
  critiquePatterns: string[]
  microTask: string
  academicUse: string
}

export interface PathWaypoint {
  id: string
  horizon: 'now' | 'next' | 'later'
  title: string
  mainQuestion: string
  outputs: string[]
  whyItExists: string
}

export interface ReviewLoop {
  id: string
  phase: 'foundation' | 'bridge' | 'academic'
  title: string
  whenToUse: string
  steps: string[]
  successSignal: string
}

export const REENTRY_PROTOCOLS: ReentryProtocol[] = [
  {
    id: 'reentry_01',
    title: 'After one missed day',
    trigger: 'The learner skipped yesterday and feels mild friction today.',
    firstStep: 'Open one familiar scene, not a new difficult task.',
    secondStep: 'Do one micro review card and one short listening replay.',
    emotionalRule: 'Do not treat a missed day as lost momentum. Treat it as normal variation.',
  },
  {
    id: 'reentry_02',
    title: 'After a difficult week',
    trigger: 'The learner lost routine for several days and feels ashamed or behind.',
    firstStep: 'Restart from a “small guaranteed win” card under 5 minutes.',
    secondStep: 'Choose only one track for today: scene, review, or path.',
    thirdStep: 'End with one visible completion, not with catching up on everything.',
    emotionalRule: 'The goal is re-entry, not compensation.',
  },
  {
    id: 'reentry_03',
    title: 'Before overwhelm becomes shutdown',
    trigger: 'Too many options or too much future planning creates paralysis.',
    firstStep: 'Reduce the screen to one next action.',
    secondStep: 'Name the task in plain words: read, listen, compare, ask, or plan.',
    emotionalRule: 'Clarity before ambition.',
  },
  {
    id: 'reentry_04',
    title: 'When attention is scattered',
    trigger: 'The learner is motivated but cannot hold one long thread.',
    firstStep: 'Use a bounded task with a visible endpoint.',
    secondStep: 'Prefer compare / choose / highlight tasks over blank-page tasks.',
    emotionalRule: 'A short completed loop is better than a large abandoned one.',
  },
]

export const DESIGN_MODULES: DesignModule[] = [
  {
    id: 'design_module_01',
    jlptBand: 'N4',
    title: 'Visible qualities of an object or layout',
    focus: ['shape', 'color', 'size', 'texture', 'balance'],
    critiquePatterns: ['〜が目立つ', '〜がやさしい印象です', '〜が少し強いです'],
    microTask: 'Describe one poster, package, chair, or page using 3 visible qualities.',
    academicUse: 'Builds the base for studio observation and simple description.',
  },
  {
    id: 'design_module_02',
    jlptBand: 'N4',
    title: 'Composition and attention',
    focus: ['hierarchy', 'placement', 'empty space', 'visual flow'],
    critiquePatterns: ['視線が〜に流れる', '余白が〜を助けている', 'ここが中心に見えます'],
    microTask: 'Explain where the eye goes first and why.',
    academicUse: 'Supports design reading and early critique language.',
  },
  {
    id: 'design_module_03',
    jlptBand: 'N3',
    title: 'Soft critique for classroom discussion',
    focus: ['strengths', 'weaknesses', 'clarity', 'consistency'],
    critiquePatterns: ['良い点は〜です', '一方で、〜が少しわかりにくいです', 'もし〜なら、もっと伝わりやすいです'],
    microTask: 'Give one strength and one soft suggestion for improvement.',
    academicUse: 'Useful for peer feedback and low-pressure discussion.',
  },
  {
    id: 'design_module_04',
    jlptBand: 'N3',
    title: 'Process explanation',
    focus: ['sequence', 'constraint', 'choice', 'revision'],
    critiquePatterns: ['最初は〜でしたが', 'そのあとで〜に変えました', '理由は〜です'],
    microTask: 'Explain one change you made in a process from first version to later version.',
    academicUse: 'Useful for studio process logs and project reflection.',
  },
  {
    id: 'design_module_05',
    jlptBand: 'N2',
    title: 'Presentation language for portfolio and studio',
    focus: ['intention', 'audience effect', 'rationale', 'trade-off'],
    critiquePatterns: ['意図としては〜です', '〜を強調するために', 'そのかわりに〜を抑えました'],
    microTask: 'Explain one design decision using intention -> method -> effect -> trade-off.',
    academicUse: 'Supports portfolio explanation and faculty-facing communication.',
  },
  {
    id: 'design_module_06',
    jlptBand: 'N2',
    title: 'Design reading and academic interpretation',
    focus: ['argument', 'context', 'editorial voice', 'design culture'],
    critiquePatterns: ['この文章では〜が中心です', '背景として〜があります', '筆者は〜を示しています'],
    microTask: 'Summarise a short design-related text in 3 ideas: theme, context, implication.',
    academicUse: 'Builds readiness for reading design texts and profiles in Japanese.',
  },
]

export const PATH_WAYPOINTS: PathWaypoint[] = [
  {
    id: 'path_waypoint_01',
    horizon: 'now',
    title: 'Clarify what “Japan” means for this learner right now',
    mainQuestion: 'Is the current goal language habit, school research, or future readiness?',
    outputs: ['one next-step focus', 'one supporting track', 'one thing not to solve yet'],
    whyItExists: 'Prevents motivational fog and overwhelm from too many simultaneous futures.',
  },
  {
    id: 'path_waypoint_02',
    horizon: 'now',
    title: 'Separate fantasy energy from practical direction',
    mainQuestion: 'What part is dream fuel, and what part is actionable this month?',
    outputs: ['dream anchor', 'practical anchor', 'small action'],
    whyItExists: 'Keeps atmosphere without losing traction.',
  },
  {
    id: 'path_waypoint_03',
    horizon: 'next',
    title: 'Build a realistic language map',
    mainQuestion: 'Which abilities matter beyond the label of JLPT level?',
    outputs: ['reading needs', 'listening needs', 'academic needs', 'design-specific needs'],
    whyItExists: 'Prevents false confidence from exam-only framing.',
  },
  {
    id: 'path_waypoint_04',
    horizon: 'next',
    title: 'Research study pathways with less chaos',
    mainQuestion: 'Which pathway type is being considered: language school, direct university path, or later transfer path?',
    outputs: ['pathway notes', 'unknowns list', 'verification targets'],
    whyItExists: 'Turns vague future planning into trackable questions.',
  },
  {
    id: 'path_waypoint_05',
    horizon: 'later',
    title: 'Prepare for practical adaptation, not only admission',
    mainQuestion: 'How will the learner deal with housing, support services, deadlines, and everyday functioning?',
    outputs: ['survival phrase bank', 'support question bank', 'daily-life language targets'],
    whyItExists: 'Real readiness includes life management, not only language pride.',
  },
  {
    id: 'path_waypoint_06',
    horizon: 'later',
    title: 'Make design trajectory concrete',
    mainQuestion: 'How does design interest become a Japanese-speaking academic path?',
    outputs: ['design vocabulary needs', 'critique language needs', 'presentation needs', 'portfolio talk needs'],
    whyItExists: 'Prevents the design goal from staying decorative and under-implemented.',
  },
]

export const REVIEW_LOOPS: ReviewLoop[] = [
  {
    id: 'review_loop_01',
    phase: 'foundation',
    title: 'Scene -> 3 cards -> one tiny output',
    whenToUse: 'For early routine building at N5/N4.',
    steps: ['open one familiar scene', 'review 3 low-friction cards', 'make one short spoken or written sentence'],
    successSignal: 'The learner finishes without dread and remembers at least one useful pattern.',
  },
  {
    id: 'review_loop_02',
    phase: 'bridge',
    title: 'Read -> compare -> transfer',
    whenToUse: 'For N4/N3 bridge work when passive understanding needs action.',
    steps: ['read a short text', 'compare two options or meanings', 'turn it into one transfer task'],
    successSignal: 'The learner can use the material outside the original scene.',
  },
  {
    id: 'review_loop_03',
    phase: 'academic',
    title: 'Instruction -> decode -> checklist',
    whenToUse: 'For school-facing Japanese and procedural comprehension.',
    steps: ['read or hear the instruction', 'decode what matters', 'rewrite as action steps'],
    successSignal: 'The task feels manageable instead of vague.',
  },
  {
    id: 'review_loop_04',
    phase: 'academic',
    title: 'Listen -> outline -> response',
    whenToUse: 'For seminar, lecture, and design presentation readiness.',
    steps: ['capture the structure', 'make a tiny outline', 'give a bounded reaction or summary'],
    successSignal: 'The learner can respond without freezing under complexity.',
  },
]

export const V7_EXPANSION_SUMMARY = {
  promise: 'A larger static foundation for Michi that supports re-entry, progression, design trajectory, and practical study-in-Japan readiness.',
  majorLayers: ['reentry', 'design progression', 'practical path scaffolds', 'review loops'],
}
