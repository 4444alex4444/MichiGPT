export type MichiTrackId = 'journey_japanese' | 'live_in_japan' | 'study_in_japan' | 'design_in_japanese' | 'michi_expression'
export type MichiPhase = 'foundation_n5_n4' | 'bridge_n3' | 'academic_readiness_n2'
export type SessionMode = 'micro_restart' | 'steady_growth' | 'focus_day' | 'catchup_light' | 'exam_bridge' | 'design_day'

export interface SessionRecipe {
  id: string
  mode: SessionMode
  title: string
  bestFor: string
  durationMinutes: number
  steps: string[]
  targetTracks: MichiTrackId[]
  successSignal: string
  adhdSupport: string[]
}

export interface ProgressMilestone {
  id: string
  phase: MichiPhase
  title: string
  learnerCan: string[]
  contentMix: Array<{ track: MichiTrackId; ratio: string }>
  warningIfMissing: string
}

export interface WeeklyRhythm {
  id: string
  title: string
  intendedFor: string
  sessions: Array<{ dayLabel: string; mode: SessionMode; primaryTrack: MichiTrackId; secondaryTrack?: MichiTrackId }>
  whyItWorks: string
}

export interface ReentryStateRule {
  id: string
  state: 'fresh' | 'fragile' | 'overwhelmed' | 'returning' | 'momentum'
  description: string
  recommendedMode: SessionMode
  avoid: string[]
  firstMessage: string
}

export const SESSION_RECIPES: SessionRecipe[] = [
  {
    id: 'session_001',
    mode: 'micro_restart',
    title: 'Tiny restart after friction',
    bestFor: 'A day when starting feels harder than studying.',
    durationMinutes: 6,
    steps: ['Open one familiar scene', 'Do 2 review items', 'Say or write one tiny output'],
    targetTracks: ['journey_japanese', 'michi_expression'],
    successSignal: 'The learner finishes and feels “I am back in motion”.',
    adhdSupport: ['very low threshold', 'visible finish line', 'no catch-up pressure'],
  },
  {
    id: 'session_002',
    mode: 'steady_growth',
    title: 'Balanced daily session',
    bestFor: 'Ordinary days when attention is stable enough for a full compact study loop.',
    durationMinutes: 18,
    steps: ['One scene or reading fragment', 'One transfer task', 'One review loop', 'One next-step note'],
    targetTracks: ['journey_japanese', 'live_in_japan', 'study_in_japan'],
    successSignal: 'The learner touched input, transfer, and reinforcement in one small cycle.',
    adhdSupport: ['predictable structure', 'mixed novelty', 'short modules instead of one long task'],
  },
  {
    id: 'session_003',
    mode: 'focus_day',
    title: 'Focused academic build day',
    bestFor: 'Days when the learner wants stronger school-facing progress.',
    durationMinutes: 28,
    steps: ['Decode one instruction or short academic text', 'Do one note-taking or summary task', 'Finish with one practical survival phrase set'],
    targetTracks: ['study_in_japan', 'michi_expression'],
    successSignal: 'The learner feels more capable with real study language, not only vocabulary.',
    adhdSupport: ['task framing by real use', 'explicit decomposition', 'end with practical closure'],
  },
  {
    id: 'session_004',
    mode: 'catchup_light',
    title: 'Gentle catch-up without guilt spiral',
    bestFor: 'After several missed days when the learner is tempted to overcompensate.',
    durationMinutes: 14,
    steps: ['Choose only one track', 'Do one low-friction re-entry task', 'Review one previously known set', 'Stop while still successful'],
    targetTracks: ['journey_japanese', 'study_in_japan', 'design_in_japanese'],
    successSignal: 'The learner re-establishes continuity without burnout.',
    adhdSupport: ['anti-all-or-nothing design', 'limited scope', 'protects motivation'],
  },
  {
    id: 'session_005',
    mode: 'exam_bridge',
    title: 'N3/N2 bridge practice',
    bestFor: 'When the learner needs stronger exam-facing stamina without losing product identity.',
    durationMinutes: 24,
    steps: ['Read or listen for gist', 'Extract key points', 'Do one compare/decision task', 'Finish with one summary or response'],
    targetTracks: ['study_in_japan', 'michi_expression'],
    successSignal: 'The learner practices exam-like pressure through meaningful tasks instead of sterile drilling only.',
    adhdSupport: ['guided task flow', 'no blank page', 'gist-first structure'],
  },
  {
    id: 'session_006',
    mode: 'design_day',
    title: 'Design Japanese day',
    bestFor: 'When the learner wants to connect Japanese with design identity and future study goals.',
    durationMinutes: 22,
    steps: ['Observe one visual example', 'Use one critique card', 'Explain one design decision or effect', 'Store one phrase for future portfolio talk'],
    targetTracks: ['design_in_japanese', 'michi_expression'],
    successSignal: 'The learner feels that design is becoming a Japanese-speaking path, not only a dream image.',
    adhdSupport: ['identity-driven motivation', 'concrete visual anchor', 'high relevance'],
  },
]

export const PROGRESS_MILESTONES: ProgressMilestone[] = [
  {
    id: 'milestone_001',
    phase: 'foundation_n5_n4',
    title: 'Everyday foothold',
    learnerCan: ['read and hear basic everyday language', 'survive small real-life interactions', 'describe simple preferences and observations'],
    contentMix: [
      { track: 'journey_japanese', ratio: '30%' },
      { track: 'live_in_japan', ratio: '25%' },
      { track: 'study_in_japan', ratio: '20%' },
      { track: 'michi_expression', ratio: '15%' },
      { track: 'design_in_japanese', ratio: '10%' },
    ],
    warningIfMissing: 'Without output and review, the learner may feel inspired but fragile.',
  },
  {
    id: 'milestone_002',
    phase: 'bridge_n3',
    title: 'Connected functional Japanese',
    learnerCan: ['follow longer linked explanations', 'compare options', 'ask for clarification', 'decode short study tasks'],
    contentMix: [
      { track: 'study_in_japan', ratio: '30%' },
      { track: 'live_in_japan', ratio: '20%' },
      { track: 'journey_japanese', ratio: '20%' },
      { track: 'design_in_japanese', ratio: '15%' },
      { track: 'michi_expression', ratio: '15%' },
    ],
    warningIfMissing: 'Without bridge work, the jump from N4 comfort to academic demands feels too abrupt.',
  },
  {
    id: 'milestone_003',
    phase: 'academic_readiness_n2',
    title: 'Study-and-design readiness',
    learnerCan: ['handle study instructions with less panic', 'follow lecture-like structures', 'use critique and portfolio language', 'ask for help and clarification in institutional settings'],
    contentMix: [
      { track: 'study_in_japan', ratio: '30%' },
      { track: 'design_in_japanese', ratio: '25%' },
      { track: 'michi_expression', ratio: '15%' },
      { track: 'live_in_japan', ratio: '15%' },
      { track: 'journey_japanese', ratio: '15%' },
    ],
    warningIfMissing: 'Without academic and design language, N2 can remain only a label instead of usable readiness.',
  },
]

export const WEEKLY_RHYTHMS: WeeklyRhythm[] = [
  {
    id: 'weekly_001',
    title: 'Calm five-touch rhythm',
    intendedFor: 'Learners who need steadiness without daily perfection pressure.',
    sessions: [
      { dayLabel: 'Day 1', mode: 'steady_growth', primaryTrack: 'journey_japanese', secondaryTrack: 'michi_expression' },
      { dayLabel: 'Day 2', mode: 'micro_restart', primaryTrack: 'live_in_japan' },
      { dayLabel: 'Day 3', mode: 'steady_growth', primaryTrack: 'study_in_japan', secondaryTrack: 'live_in_japan' },
      { dayLabel: 'Day 4', mode: 'design_day', primaryTrack: 'design_in_japanese', secondaryTrack: 'michi_expression' },
      { dayLabel: 'Day 5', mode: 'catchup_light', primaryTrack: 'journey_japanese' },
    ],
    whyItWorks: 'The learner touches multiple layers of the product without needing a seven-day perfect streak.',
  },
  {
    id: 'weekly_002',
    title: 'School-facing rhythm',
    intendedFor: 'Learners who already have some stability and want stronger academic progress.',
    sessions: [
      { dayLabel: 'Day 1', mode: 'focus_day', primaryTrack: 'study_in_japan' },
      { dayLabel: 'Day 2', mode: 'steady_growth', primaryTrack: 'journey_japanese', secondaryTrack: 'live_in_japan' },
      { dayLabel: 'Day 3', mode: 'exam_bridge', primaryTrack: 'study_in_japan', secondaryTrack: 'michi_expression' },
      { dayLabel: 'Day 4', mode: 'design_day', primaryTrack: 'design_in_japanese' },
      { dayLabel: 'Day 5', mode: 'catchup_light', primaryTrack: 'study_in_japan' },
    ],
    whyItWorks: 'It increases academic pressure gradually without removing motivation and design identity.',
  },
  {
    id: 'weekly_003',
    title: 'Recovery rhythm after inconsistency',
    intendedFor: 'Learners returning after interruptions, low energy, or overwhelm.',
    sessions: [
      { dayLabel: 'Day 1', mode: 'micro_restart', primaryTrack: 'journey_japanese' },
      { dayLabel: 'Day 2', mode: 'catchup_light', primaryTrack: 'live_in_japan' },
      { dayLabel: 'Day 3', mode: 'micro_restart', primaryTrack: 'michi_expression' },
      { dayLabel: 'Day 4', mode: 'steady_growth', primaryTrack: 'study_in_japan' },
      { dayLabel: 'Day 5', mode: 'design_day', primaryTrack: 'design_in_japanese' },
    ],
    whyItWorks: 'It restores continuity before intensity.',
  },
]

export const REENTRY_STATE_RULES: ReentryStateRule[] = [
  {
    id: 'state_001',
    state: 'fresh',
    description: 'Attention and motivation are available; a normal compact session is realistic.',
    recommendedMode: 'steady_growth',
    avoid: ['overscheduling the whole month'],
    firstMessage: 'Let’s use today’s energy for one clean step, not ten future promises.',
  },
  {
    id: 'state_002',
    state: 'fragile',
    description: 'The learner can study, but friction rises quickly and confidence is not stable.',
    recommendedMode: 'micro_restart',
    avoid: ['blank-page writing', 'long dense lectures'],
    firstMessage: 'Today the goal is a small completed loop, not a big performance.',
  },
  {
    id: 'state_003',
    state: 'overwhelmed',
    description: 'Too many possibilities or demands are creating paralysis.',
    recommendedMode: 'catchup_light',
    avoid: ['full catch-up plans', 'future-heavy decision spirals'],
    firstMessage: 'We will choose one next action and ignore the rest for now.',
  },
  {
    id: 'state_004',
    state: 'returning',
    description: 'The learner is coming back after a break and needs support more than pressure.',
    recommendedMode: 'micro_restart',
    avoid: ['self-judgment', 'comparing with the ideal streak'],
    firstMessage: 'Return counts as progress. Restart gently.',
  },
  {
    id: 'state_005',
    state: 'momentum',
    description: 'The learner has working rhythm and can benefit from slightly more challenge.',
    recommendedMode: 'focus_day',
    avoid: ['staying only in comfort review'],
    firstMessage: 'This is a good moment to convert rhythm into stronger study growth.',
  },
]

export default {
  SESSION_RECIPES,
  PROGRESS_MILESTONES,
  WEEKLY_RHYTHMS,
  REENTRY_STATE_RULES,
}
