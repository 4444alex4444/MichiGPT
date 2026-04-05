export type SequencePhase = 'foundation_n5_n4' | 'bridge_n3' | 'academic_readiness_n2'
export type SequenceTrack = 'journey_japanese' | 'live_in_japan' | 'study_in_japan' | 'design_in_japanese' | 'michi_expression'

export interface LessonSequence {
  id: string
  phase: SequencePhase
  title: string
  mainTrack: SequenceTrack
  supportTracks: SequenceTrack[]
  durationMinutes: number
  entry: string
  inputStep: string
  practiceStep: string
  transferStep: string
  reflectionStep: string
  useWhen: string
  whyItWorks: string
  adhdSupport: string[]
}

export interface SequencePack {
  id: string
  title: string
  targetPhase: SequencePhase
  objective: string
  includedSequences: string[]
  expectedShift: string
}

export const LESSON_SEQUENCES: LessonSequence[] = [
  {
    id: 'sequence_001',
    phase: 'foundation_n5_n4',
    title: 'Quiet city entry',
    mainTrack: 'journey_japanese',
    supportTracks: ['live_in_japan', 'michi_expression'],
    durationMinutes: 12,
    entry: 'Open one city/station scene and notice one visual anchor.',
    inputStep: 'Read or hear 3–5 useful words and one phrase from the scene.',
    practiceStep: 'Match the phrase to one concrete situation.',
    transferStep: 'Say one tiny sentence you could use in a real place.',
    reflectionStep: 'Name one thing the place made you notice or feel.',
    useWhen: 'Early habit building or low-energy return days.',
    whyItWorks: 'It keeps the emotional core while still ending in a real language move.',
    adhdSupport: ['gentle entry', 'short completion loop', 'concrete visual anchor'],
  },
  {
    id: 'sequence_002',
    phase: 'foundation_n5_n4',
    title: 'Home and desk micro-ownership',
    mainTrack: 'michi_expression',
    supportTracks: ['journey_japanese'],
    durationMinutes: 10,
    entry: 'Look at your own desk, room, or bag.',
    inputStep: 'Review location and object patterns.',
    practiceStep: 'Place 3 objects using a fixed sentence frame.',
    transferStep: 'Describe one study corner or item arrangement.',
    reflectionStep: 'What makes this place easier or harder for study?',
    useWhen: 'The learner needs control, grounding, and low abstraction.',
    whyItWorks: 'It makes language personal and embodied instead of distant.',
    adhdSupport: ['real environment grounding', 'repeatable structure', '3-item cap'],
  },
  {
    id: 'sequence_003',
    phase: 'foundation_n5_n4',
    title: 'Shopping and choice',
    mainTrack: 'live_in_japan',
    supportTracks: ['michi_expression'],
    durationMinutes: 14,
    entry: 'Start from two visible options: drinks, notebooks, bags, snacks, or cafés.',
    inputStep: 'Review adjectives and simple comparison patterns.',
    practiceStep: 'State one difference and one preference.',
    transferStep: 'Choose one option and explain why.',
    reflectionStep: 'Did your reason come from price, comfort, design, or mood?',
    useWhen: 'N5/N4 bridge into real decision-making.',
    whyItWorks: 'Choice tasks are practical, bounded, and easy to finish.',
    adhdSupport: ['two-option structure', 'clear endpoint', 'reason prompt'],
  },
  {
    id: 'sequence_004',
    phase: 'bridge_n3',
    title: 'Instruction decoding loop',
    mainTrack: 'study_in_japan',
    supportTracks: ['michi_expression'],
    durationMinutes: 18,
    entry: 'Start from one short classroom or procedural instruction.',
    inputStep: 'Identify verbs, time reference, and required output.',
    practiceStep: 'Rewrite the instruction as 2–3 action steps.',
    transferStep: 'Ask one clarification question or make one checklist.',
    reflectionStep: 'What part would have been confusing without decoding?',
    useWhen: 'The learner needs more confidence with study-facing Japanese.',
    whyItWorks: 'It converts vague pressure into action structure.',
    adhdSupport: ['decode before perform', 'checklist format', 'reduced ambiguity'],
  },
  {
    id: 'sequence_005',
    phase: 'bridge_n3',
    title: 'Mini lecture to note skeleton',
    mainTrack: 'study_in_japan',
    supportTracks: ['michi_expression'],
    durationMinutes: 20,
    entry: 'Use one short lecture-like explanation or study text.',
    inputStep: 'Listen/read for topic, example, and main point.',
    practiceStep: 'Turn it into a 3-part note skeleton.',
    transferStep: 'Say or write a 2–3 sentence recap.',
    reflectionStep: 'What signal helped you find the main point?',
    useWhen: 'The learner is moving from passive understanding toward academic stamina.',
    whyItWorks: 'It builds academic comprehension without requiring full heavy note-taking at once.',
    adhdSupport: ['small capture template', 'structure-first listening', 'bounded recap'],
  },
  {
    id: 'sequence_006',
    phase: 'bridge_n3',
    title: 'Soft discussion entry',
    mainTrack: 'michi_expression',
    supportTracks: ['study_in_japan'],
    durationMinutes: 16,
    entry: 'Start from one simple prompt or claim.',
    inputStep: 'Review soft opinion and agreement/disagreement frames.',
    practiceStep: 'Build one agreement and one soft alternative view.',
    transferStep: 'Use them in a tiny 3-part response: summary -> reaction -> added thought.',
    reflectionStep: 'Which phrase made participation feel safer?',
    useWhen: 'The learner freezes in classroom or group discussion contexts.',
    whyItWorks: 'It lowers the social threshold to participation.',
    adhdSupport: ['sentence stems', 'social safety', '3-part frame'],
  },
  {
    id: 'sequence_007',
    phase: 'bridge_n3',
    title: 'Design observation to first critique',
    mainTrack: 'design_in_japanese',
    supportTracks: ['michi_expression'],
    durationMinutes: 18,
    entry: 'Open one poster, page, package, or visual composition.',
    inputStep: 'Notice what stands out, how the eye moves, and what the mood feels like.',
    practiceStep: 'Use one strength frame and one gentle critique frame.',
    transferStep: 'Explain one likely intention behind the design.',
    reflectionStep: 'Did the language help you see the design more clearly?',
    useWhen: 'Design becomes more central to motivation and future direction.',
    whyItWorks: 'It turns aesthetic attention into language and judgment.',
    adhdSupport: ['concrete visual anchor', 'two-part critique frame', 'identity relevance'],
  },
  {
    id: 'sequence_008',
    phase: 'academic_readiness_n2',
    title: 'Academic response pack',
    mainTrack: 'study_in_japan',
    supportTracks: ['michi_expression'],
    durationMinutes: 24,
    entry: 'Start from a short argument, lecture fragment, or institutional paragraph.',
    inputStep: 'Extract the claim, support, and one key condition.',
    practiceStep: 'Map the structure in a compact outline.',
    transferStep: 'Write a short response or clarification question.',
    reflectionStep: 'What still needs checking versus what is already clear?',
    useWhen: 'The learner needs higher reading/listening tolerance with academic relevance.',
    whyItWorks: 'It combines understanding, structure, and response in one controlled loop.',
    adhdSupport: ['argument map', 'bounded output', 'clarity-first framing'],
  },
  {
    id: 'sequence_009',
    phase: 'academic_readiness_n2',
    title: 'Portfolio explanation loop',
    mainTrack: 'design_in_japanese',
    supportTracks: ['study_in_japan', 'michi_expression'],
    durationMinutes: 25,
    entry: 'Choose one portfolio piece or project idea.',
    inputStep: 'Review intention / method / effect / trade-off frames.',
    practiceStep: 'Build a short spoken explanation with signposting.',
    transferStep: 'Answer one imagined faculty or peer question.',
    reflectionStep: 'Which part of the explanation still feels thin?',
    useWhen: 'The learner needs design language that could survive admissions or studio contexts.',
    whyItWorks: 'It connects critique, presentation, and academic readiness.',
    adhdSupport: ['4-part speaking frame', 'question rehearsal', 'high future relevance'],
  },
  {
    id: 'sequence_010',
    phase: 'academic_readiness_n2',
    title: 'Practical future calm sequence',
    mainTrack: 'study_in_japan',
    supportTracks: ['live_in_japan', 'michi_expression'],
    durationMinutes: 20,
    entry: 'Start from one real Path to Japan question: housing, deadlines, support, forms, or money.',
    inputStep: 'Use one verification checklist or decision sheet.',
    practiceStep: 'Sort known facts, unknown facts, and next actions.',
    transferStep: 'Write one help-seeking question or one plain-language checklist.',
    reflectionStep: 'What did you stop worrying about after structuring the problem?',
    useWhen: 'Future planning begins to feel heavy or chaotic.',
    whyItWorks: 'It turns anxiety into structured motion.',
    adhdSupport: ['known/unknown split', 'action-first framing', 'reduces panic'],
  },
  {
    id: 'sequence_011',
    phase: 'foundation_n5_n4',
    title: 'Review and restart sandwich',
    mainTrack: 'journey_japanese',
    supportTracks: ['review'],
    durationMinutes: 8,
    entry: 'Pick one old familiar item instead of something new.',
    inputStep: 'Do three quick review cards.',
    practiceStep: 'Use one phrase in a micro output.',
    transferStep: 'Connect it to one place, object, or future moment.',
    reflectionStep: 'Stopping after success is allowed.',
    useWhen: 'The learner is returning and needs a protected success loop.',
    whyItWorks: 'It protects continuity better than ambitious restart plans.',
    adhdSupport: ['very low threshold', 'success before fatigue', 'anti-guilt design'],
  },
  {
    id: 'sequence_012',
    phase: 'bridge_n3',
    title: 'Reading for purpose, not just completion',
    mainTrack: 'study_in_japan',
    supportTracks: ['live_in_japan'],
    durationMinutes: 17,
    entry: 'Open a short text, notice, or guide.',
    inputStep: 'Scan for the most important practical information.',
    practiceStep: 'Highlight what matters for action.',
    transferStep: 'Answer: what should I do now?',
    reflectionStep: 'What would go wrong if I missed this line?',
    useWhen: 'The learner reads but still misses the action logic in texts.',
    whyItWorks: 'It builds functional reading instead of passive decoding only.',
    adhdSupport: ['action-first prompt', 'priority filter', 'reduced text overwhelm'],
  },
]

export const SEQUENCE_PACKS: SequencePack[] = [
  {
    id: 'pack_001',
    title: 'Foundation return pack',
    targetPhase: 'foundation_n5_n4',
    objective: 'Rebuild routine and confidence after inconsistency.',
    includedSequences: ['sequence_001', 'sequence_002', 'sequence_011'],
    expectedShift: 'The learner stops avoiding the app and restarts with visible success.',
  },
  {
    id: 'pack_002',
    title: 'Bridge into school-facing Japanese',
    targetPhase: 'bridge_n3',
    objective: 'Move from comfortable scene-based Japanese toward academic and practical decoding.',
    includedSequences: ['sequence_004', 'sequence_005', 'sequence_012'],
    expectedShift: 'Study language becomes less mysterious and more actionable.',
  },
  {
    id: 'pack_003',
    title: 'Design trajectory pack',
    targetPhase: 'academic_readiness_n2',
    objective: 'Turn design motivation into critique, portfolio, and studio-ready Japanese.',
    includedSequences: ['sequence_007', 'sequence_009'],
    expectedShift: 'Design becomes a concrete Japanese-speaking pathway instead of background inspiration.',
  },
  {
    id: 'pack_004',
    title: 'Practical future calm pack',
    targetPhase: 'academic_readiness_n2',
    objective: 'Reduce future anxiety by structuring real Japan-related decisions and verification steps.',
    includedSequences: ['sequence_010', 'sequence_008'],
    expectedShift: 'The learner becomes calmer and more procedural about high-stakes topics.',
  },
]

export default {
  LESSON_SEQUENCES,
  SEQUENCE_PACKS,
}
