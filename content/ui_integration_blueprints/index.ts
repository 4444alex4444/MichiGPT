export type MichiSurfaceId = 'home' | 'scene' | 'path' | 'chat' | 'review' | 'design' | 'reentry' | 'factual'

export interface SurfaceModuleBinding {
  id: string
  surface: MichiSurfaceId
  goal: string
  primaryModules: string[]
  secondaryModules: string[]
  defaultUserState: 'fresh' | 'fragile' | 'overwhelmed' | 'returning' | 'momentum'
  expectedOutput: string[]
}

export interface HomeBlueprint {
  id: string
  sectionTitle: string
  whyItExists: string
  primaryDataSource: string[]
  userBenefit: string
  interactionPattern: string
}

export interface PathBlueprint {
  id: string
  boardTitle: string
  visibleWhen: string
  shouldPullFrom: string[]
  avoidFeelingLike: string
  completionSignal: string
}

export interface ChatBridgeRule {
  id: string
  chatMode: 'guide' | 'factual'
  whenToTrigger: string
  mustUseFromStaticLayer: string[]
  responseShape: string[]
  dangerIfMissing: string
}

export interface SceneUpgradeRule {
  id: string
  sceneLayer: 'entry' | 'practice' | 'transfer' | 'reflection'
  sceneShouldUnlock: string[]
  learnerQuestion: string
  successSignal: string
}

export const SURFACE_MODULE_BINDINGS: SurfaceModuleBinding[] = [
  {
    id: 'binding_001',
    surface: 'home',
    goal: 'Turn the first screen into a calm command center rather than a vague mood splash.',
    primaryModules: ['progression_system', 'curriculum', 'review_cards', 'reentry_protocols'],
    secondaryModules: ['study_tracks', 'michi_expression'],
    defaultUserState: 'returning',
    expectedOutput: ['today focus', 'one suggested session', 'one re-entry-safe action'],
  },
  {
    id: 'binding_002',
    surface: 'scene',
    goal: 'Keep atmospheric scenes as the emotional door, but attach them to transfer and review.',
    primaryModules: ['scenes', 'transfer_cards', 'review_loops'],
    secondaryModules: ['design_modules', 'michi_expression'],
    defaultUserState: 'fresh',
    expectedOutput: ['scene moment', 'mini practice', 'transfer move', 'reflection prompt'],
  },
  {
    id: 'binding_003',
    surface: 'path',
    goal: 'Make Path to Japan practical, structured, and less bureaucratic.',
    primaryModules: ['practical_path_kits', 'factual_guidance', 'reality_cards'],
    secondaryModules: ['curriculum', 'design_academic_pack'],
    defaultUserState: 'overwhelmed',
    expectedOutput: ['decision sheet', 'verification target', 'next calm action'],
  },
  {
    id: 'binding_004',
    surface: 'chat',
    goal: 'Make chat feel like a guided layer above the static system, not the entire product.',
    primaryModules: ['factual_guidance', 'progression_system', 'practical_path_kits'],
    secondaryModules: ['academic_japanese', 'design_academic_pack'],
    defaultUserState: 'fragile',
    expectedOutput: ['reply', 'sources or support', 'follow-ups', 'next step'],
  },
  {
    id: 'binding_005',
    surface: 'review',
    goal: 'Give the learner a low-shame loop for memory and return after inconsistency.',
    primaryModules: ['review_cards', 'progression_system', 'v7_expansion_pack'],
    secondaryModules: ['transfer_cards'],
    defaultUserState: 'returning',
    expectedOutput: ['quick recall', 'tiny win', 're-entry continuity'],
  },
  {
    id: 'binding_006',
    surface: 'design',
    goal: 'Make design a true Japanese-speaking track, not just an aesthetic identity marker.',
    primaryModules: ['design_academic_pack', 'design_japanese', 'academic_japanese'],
    secondaryModules: ['portfolio_talk_frames', 'design_modules'],
    defaultUserState: 'momentum',
    expectedOutput: ['critique task', 'portfolio phrase', 'design-reading or studio-ready move'],
  },
  {
    id: 'binding_007',
    surface: 'reentry',
    goal: 'Offer a safe first step after interruption or overwhelm.',
    primaryModules: ['progression_system', 'v7_expansion_pack'],
    secondaryModules: ['review_cards', 'journey_japanese'],
    defaultUserState: 'returning',
    expectedOutput: ['restart message', 'small session choice', 'stop-successfully rule'],
  },
  {
    id: 'binding_008',
    surface: 'factual',
    goal: 'Present high-stakes information with visible trust structure.',
    primaryModules: ['factual_guidance', 'practical_path_kits'],
    secondaryModules: ['reality_cards'],
    defaultUserState: 'fragile',
    expectedOutput: ['verified summary', 'what to check', 'source hierarchy', 'follow-up questions'],
  },
]

export const HOME_BLUEPRINTS: HomeBlueprint[] = [
  {
    id: 'home_001',
    sectionTitle: 'Today’s calm step',
    whyItExists: 'The learner should see one manageable starting point immediately.',
    primaryDataSource: ['SESSION_RECIPES', 'REENTRY_STATE_RULES'],
    userBenefit: 'Reduces decision friction and fear of starting.',
    interactionPattern: 'One primary CTA with one softer alternative.',
  },
  {
    id: 'home_002',
    sectionTitle: 'Where you are on the path',
    whyItExists: 'The product should reflect progression, not just mood.',
    primaryDataSource: ['PROGRESS_MILESTONES', 'MICHI_TWO_YEAR_CURRICULUM'],
    userBenefit: 'Turns progress into something visible and believable.',
    interactionPattern: 'Compact milestone card with current phase and one weak spot.',
  },
  {
    id: 'home_003',
    sectionTitle: 'Tiny review without shame',
    whyItExists: 'Return after pause should be easier than avoidance.',
    primaryDataSource: ['review_cards', 'REVIEW_LOOPS'],
    userBenefit: 'Supports continuity and memory without overload.',
    interactionPattern: '3-card quick review strip with finish-in-two-minutes framing.',
  },
  {
    id: 'home_004',
    sectionTitle: 'Future in Japan, one clear piece at a time',
    whyItExists: 'The future layer should motivate without becoming fog.',
    primaryDataSource: ['DECISION_SHEETS', 'PATH_SCENARIOS'],
    userBenefit: 'Keeps Japan emotionally present but cognitively manageable.',
    interactionPattern: 'One decision/prompt card, not a full dashboard at once.',
  },
]

export const PATH_BLUEPRINTS: PathBlueprint[] = [
  {
    id: 'path_001',
    boardTitle: 'What matters now',
    visibleWhen: 'User is early-stage, inconsistent, or overwhelmed.',
    shouldPullFrom: ['DECISION_SHEETS', 'PRACTICAL_PATH_BOARDS'],
    avoidFeelingLike: 'a giant life-planning spreadsheet',
    completionSignal: 'The user leaves with one next action and one postponed worry.',
  },
  {
    id: 'path_002',
    boardTitle: 'Verify before you trust',
    visibleWhen: 'Topic involves money, deadlines, requirements, documents, permissions, or university specifics.',
    shouldPullFrom: ['VERIFICATION_CHECKLISTS', 'FACTUAL_GUIDANCE_CARDS', 'SOURCE_POLICY_RULES'],
    avoidFeelingLike: 'a lecture without action steps',
    completionSignal: 'The user knows what to verify, where, and in what order.',
  },
  {
    id: 'path_003',
    boardTitle: 'Design path becomes real',
    visibleWhen: 'The learner shows clear design interest or enters higher-level study preparation.',
    shouldPullFrom: ['DESIGN_MODULES', 'PORTFOLIO_TALK_FRAMES', 'FUTURE_BRIDGES'],
    avoidFeelingLike: 'inspiration moodboard only',
    completionSignal: 'The user can connect design identity to an actual Japanese-speaking trajectory.',
  },
  {
    id: 'path_004',
    boardTitle: 'Life management is part of readiness',
    visibleWhen: 'Housing, support offices, routines, and adaptation become relevant.',
    shouldPullFrom: ['PATH_SCENARIOS', 'STUDY_SURVIVAL_PATTERNS', 'reality_cards'],
    avoidFeelingLike: 'side trivia unrelated to learning',
    completionSignal: 'The user gains survival language and support-map confidence.',
  },
]

export const CHAT_BRIDGE_RULES: ChatBridgeRule[] = [
  {
    id: 'chat_rule_001',
    chatMode: 'guide',
    whenToTrigger: 'Motivation, confusion, re-entry, self-doubt, overwhelm, or direction questions.',
    mustUseFromStaticLayer: ['REENTRY_STATE_RULES', 'SESSION_RECIPES', 'PATH_SCENARIOS'],
    responseShape: ['short support', 'one next step', '2-4 guided follow-ups'],
    dangerIfMissing: 'Chat becomes emotionally warm but product-disconnected.',
  },
  {
    id: 'chat_rule_002',
    chatMode: 'factual',
    whenToTrigger: 'Scholarships, programs, deadlines, visa/work rules, housing, official procedures, support structures.',
    mustUseFromStaticLayer: ['FACTUAL_GUIDANCE_CARDS', 'SOURCE_POLICY_RULES', 'VERIFICATION_CHECKLISTS'],
    responseShape: ['summary', 'verification state', 'sources block', 'what to check next', '2-4 follow-ups'],
    dangerIfMissing: 'Chat can sound helpful while hiding uncertainty or source weakness.',
  },
]

export const SCENE_UPGRADE_RULES: SceneUpgradeRule[] = [
  {
    id: 'scene_rule_001',
    sceneLayer: 'entry',
    sceneShouldUnlock: ['emotion', 'image', 'one useful phrase'],
    learnerQuestion: 'What does this place make me notice or feel?',
    successSignal: 'The learner enters without pressure.',
  },
  {
    id: 'scene_rule_002',
    sceneLayer: 'practice',
    sceneShouldUnlock: ['one review loop', 'one language pattern'],
    learnerQuestion: 'What can I understand or say from this scene now?',
    successSignal: 'The scene gives more than atmosphere.',
  },
  {
    id: 'scene_rule_003',
    sceneLayer: 'transfer',
    sceneShouldUnlock: ['one real-life action', 'one compare/choose task', 'one output move'],
    learnerQuestion: 'How would this language help outside this scene?',
    successSignal: 'The learner can move the language into another context.',
  },
  {
    id: 'scene_rule_004',
    sceneLayer: 'reflection',
    sceneShouldUnlock: ['one personal observation', 'one future link', 'one identity bridge'],
    learnerQuestion: 'Why does this matter for my path to Japan or design future?',
    successSignal: 'The scene strengthens meaning, not only memory.',
  },
]

export default {
  SURFACE_MODULE_BINDINGS,
  HOME_BLUEPRINTS,
  PATH_BLUEPRINTS,
  CHAT_BRIDGE_RULES,
  SCENE_UPGRADE_RULES,
}
