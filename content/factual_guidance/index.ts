export type SourceTier = 'tier_1_official' | 'tier_2_university' | 'tier_3_community'
export type VerificationState = 'verified' | 'partially_verified' | 'needs_check'

export interface FactualGuidanceCard {
  id: string
  topic: 'scholarships' | 'universities' | 'language_requirements' | 'housing' | 'student_work' | 'documents' | 'deadlines' | 'support_services'
  title: string
  summary: string
  whyThisNeedsVerification: string
  trustedSourceOrder: SourceTier[]
  safeOutputShape: string[]
  defaultFollowups: string[]
  verificationState: VerificationState
}

export interface SourcePolicyRule {
  id: string
  rule: string
  rationale: string
  applyTo: string[]
}

export interface PracticalPathBoard {
  id: string
  horizon: 'now' | 'next' | 'later'
  title: string
  questions: string[]
  minimumOutputs: string[]
  caution: string
}

export const FACTUAL_GUIDANCE_CARDS: FactualGuidanceCard[] = [
  {
    id: 'factual_001',
    topic: 'scholarships',
    title: 'Scholarship guidance must start from official criteria',
    summary: 'Scholarships are not a vibe topic. The user needs official eligibility, deadlines, required documents, and real restrictions before any motivation layer.',
    whyThisNeedsVerification: 'Scholarship rules, yearly openings, deadlines, and document requirements can change, and anecdotal summaries often hide crucial exclusions.',
    trustedSourceOrder: ['tier_1_official', 'tier_2_university', 'tier_3_community'],
    safeOutputShape: ['short conclusion', 'what is confirmed', 'what still needs checking', 'sources block', '2-4 follow-up prompts'],
    defaultFollowups: ['Compare 3 scholarship routes', 'What language level is needed?', 'Which documents are usually required?'],
    verificationState: 'needs_check',
  },
  {
    id: 'factual_002',
    topic: 'universities',
    title: 'University pathway answers should name the institution level of truth',
    summary: 'When discussing study routes, the product should distinguish between general guidance and university-specific requirements.',
    whyThisNeedsVerification: 'Portfolio rules, entrance exams, language needs, and faculty expectations vary by institution and program.',
    trustedSourceOrder: ['tier_2_university', 'tier_1_official', 'tier_3_community'],
    safeOutputShape: ['pathway summary', 'institution-specific note', 'what differs across schools', 'sources block', 'next research prompts'],
    defaultFollowups: ['How do design programs differ?', 'What should I check on each university site?', 'Do I need EJU or only JLPT?'],
    verificationState: 'needs_check',
  },
  {
    id: 'factual_003',
    topic: 'language_requirements',
    title: 'Language requirements should separate exam labels from practical readiness',
    summary: 'A trustworthy answer should distinguish JLPT / EJU / program requirements from real academic survival abilities like reading stamina and task decoding.',
    whyThisNeedsVerification: 'Programs may name one threshold while classroom success depends on broader skills than a single test label.',
    trustedSourceOrder: ['tier_2_university', 'tier_1_official', 'tier_3_community'],
    safeOutputShape: ['requirement snapshot', 'what the label means', 'what it does not guarantee', 'sources block', 'preparation prompts'],
    defaultFollowups: ['What does N2 not cover?', 'How do I prepare for academic reading?', 'What does a design program usually expect?'],
    verificationState: 'needs_check',
  },
  {
    id: 'factual_004',
    topic: 'housing',
    title: 'Housing guidance must stay practical and document-aware',
    summary: 'Useful housing guidance should cover not only cost ideas, but also contract terms, dorm rules, timing, guarantor issues, and move-in logistics when relevant.',
    whyThisNeedsVerification: 'Housing rules and options depend on city, provider, university support, and current availability.',
    trustedSourceOrder: ['tier_2_university', 'tier_1_official', 'tier_3_community'],
    safeOutputShape: ['main housing routes', 'decision factors', 'what to verify on provider/university pages', 'sources block', 'next-step prompts'],
    defaultFollowups: ['What vocabulary matters for contracts?', 'What should I ask before booking?', 'How do dorms compare with private housing?'],
    verificationState: 'needs_check',
  },
  {
    id: 'factual_005',
    topic: 'student_work',
    title: 'Student work guidance should be caution-first',
    summary: 'The product should explain work permissions, limitations, and compliance risks before discussing convenience or lifestyle benefits.',
    whyThisNeedsVerification: 'Work permissions and hour limits are regulated and may vary by visa status and official guidance.',
    trustedSourceOrder: ['tier_1_official', 'tier_2_university', 'tier_3_community'],
    safeOutputShape: ['what is generally allowed', 'important restrictions', 'official verification note', 'sources block', 'practical follow-ups'],
    defaultFollowups: ['What are the hour limits?', 'What documents are needed?', 'How does work affect study load?'],
    verificationState: 'needs_check',
  },
  {
    id: 'factual_006',
    topic: 'documents',
    title: 'Document guidance should always reduce complexity into a checklist',
    summary: 'When the topic is forms or submissions, the answer should end in a clearer checklist than the source page itself.',
    whyThisNeedsVerification: 'Official procedures are often dense, and mistakes usually happen in the gap between reading and action.',
    trustedSourceOrder: ['tier_1_official', 'tier_2_university', 'tier_3_community'],
    safeOutputShape: ['plain-language summary', 'checklist', 'timing note', 'sources block', 'clarifying follow-ups'],
    defaultFollowups: ['Can you turn this into a checklist?', 'Which parts are mandatory?', 'What should I verify first?'],
    verificationState: 'needs_check',
  },
  {
    id: 'factual_007',
    topic: 'deadlines',
    title: 'Deadline answers must prefer exact dates over vague time windows',
    summary: 'If the product mentions deadlines, it should surface concrete dates whenever possible and clearly mark uncertainty when exact dates are not yet confirmed.',
    whyThisNeedsVerification: 'Users can make costly planning mistakes when only rough seasons or generic timelines are given.',
    trustedSourceOrder: ['tier_1_official', 'tier_2_university', 'tier_3_community'],
    safeOutputShape: ['exact date or date range', 'what it applies to', 'uncertainty note if needed', 'sources block', 'timing follow-ups'],
    defaultFollowups: ['What opens first?', 'Which deadline is the real blocker?', 'What should I prepare before that date?'],
    verificationState: 'needs_check',
  },
  {
    id: 'factual_008',
    topic: 'support_services',
    title: 'Support-service guidance should normalize asking for help',
    summary: 'Information about offices, advisors, accommodations, and support channels should be framed as part of readiness, not as a sign of weakness.',
    whyThisNeedsVerification: 'Support structures differ across institutions and cities, so generic reassurance is not enough.',
    trustedSourceOrder: ['tier_2_university', 'tier_1_official', 'tier_3_community'],
    safeOutputShape: ['support options', 'how to ask', 'where to verify', 'sources block', 'help-seeking follow-ups'],
    defaultFollowups: ['What office should I contact?', 'How do I ask for clarification politely?', 'What support exists for students under stress?'],
    verificationState: 'needs_check',
  },
]

export const SOURCE_POLICY_RULES: SourcePolicyRule[] = [
  {
    id: 'policy_001',
    rule: 'Never present a fast-changing factual answer as stable memory.',
    rationale: 'Scholarships, deadlines, requirements, and official permissions can change and must be checked.',
    applyTo: ['scholarships', 'deadlines', 'documents', 'student_work', 'universities'],
  },
  {
    id: 'policy_002',
    rule: 'Prefer official and university sources before community anecdotes.',
    rationale: 'Community content is useful for texture, but unsafe as the main authority for high-stakes decisions.',
    applyTo: ['housing', 'universities', 'student_work', 'support_services'],
  },
  {
    id: 'policy_003',
    rule: 'When facts remain uncertain, explicitly say what still needs checking.',
    rationale: 'Trust is stronger when uncertainty is visible instead of hidden under smooth language.',
    applyTo: ['all factual topics'],
  },
  {
    id: 'policy_004',
    rule: 'Separate factual guidance from emotional support, but keep them adjacent.',
    rationale: 'The user may need clarity and reassurance, but they should not be mixed into one vague answer.',
    applyTo: ['all factual topics'],
  },
  {
    id: 'policy_005',
    rule: 'Every factual output should suggest 2–4 concrete next questions or actions.',
    rationale: 'This turns passive information into forward movement and reduces paralysis.',
    applyTo: ['all factual topics'],
  },
]

export const PRACTICAL_PATH_BOARDS: PracticalPathBoard[] = [
  {
    id: 'board_001',
    horizon: 'now',
    title: 'What is the next step that matters this month?',
    questions: ['Am I building language habit or researching pathways?', 'What is my one visible next action?', 'What am I deliberately not solving yet?'],
    minimumOutputs: ['one focus', 'one action', 'one defer list item'],
    caution: 'Do not treat future planning as a substitute for current progress.',
  },
  {
    id: 'board_002',
    horizon: 'next',
    title: 'How do language, design, and study readiness connect?',
    questions: ['What does my target program probably demand?', 'What language layer is still missing: daily, academic, or design?', 'Which skill gap is the real bottleneck?'],
    minimumOutputs: ['one skill bottleneck', 'one supporting track', 'one research target'],
    caution: 'A JLPT label alone does not guarantee classroom readiness.',
  },
  {
    id: 'board_003',
    horizon: 'later',
    title: 'What practical systems will support life in Japan?',
    questions: ['How will I handle housing and routines?', 'Where will I ask for help?', 'What official information do I need before deadlines become urgent?'],
    minimumOutputs: ['support map', 'survival question bank', 'verification checklist'],
    caution: 'Do not leave life-admin topics until the last moment.',
  },
]

export default {
  FACTUAL_GUIDANCE_CARDS,
  SOURCE_POLICY_RULES,
  PRACTICAL_PATH_BOARDS,
}
