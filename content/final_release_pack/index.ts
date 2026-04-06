export interface FinalReviewSet {
  id: string
  title: string
  levelBand: 'N5' | 'N4' | 'N3' | 'N2'
  focus: string[]
  cards: Array<{ front: string; back: string; hint: string }>
}

export interface FinalRealityDeepCard {
  id: string
  topic: 'scholarships' | 'university' | 'housing' | 'design' | 'study' | 'documents' | 'support'
  title: string
  practicalTruth: string
  whatToDoNext: string[]
  whatNotToDo: string[]
  whyThisMatters: string
}

export interface FinalDesignLexiconSet {
  id: string
  title: string
  items: Array<{ jp: string; reading: string; en: string; use: string }>
  bridgeToUse: string
}

export interface FinalReleaseAuditItem {
  id: string
  layer: 'content' | 'design' | 'path' | 'chat' | 'ux' | 'learning_system'
  target: string
  currentState: string
  remainingGap: string
}

export const FINAL_REVIEW_SETS: FinalReviewSet[] = [
  {
    id: 'final_review_001',
    title: 'Foundation city loop',
    levelBand: 'N5',
    focus: ['movement', 'place words', 'simple wanting / trying language'],
    cards: [
      { front: '駅', back: 'えき — station', hint: 'quiet transit' },
      { front: '道', back: 'みち — road / path', hint: 'moving through a place' },
      { front: '行ってみたい', back: 'I would like to try going there', hint: 'dream to motion' },
      { front: 'どちら', back: 'which way / which one', hint: 'small choices' },
      { front: 'まっすぐ', back: 'straight ahead', hint: 'direction language' },
      { front: '近い', back: 'near', hint: 'wayfinding' },
    ],
  },
  {
    id: 'final_review_002',
    title: 'Study-facing bridge loop',
    levelBand: 'N4',
    focus: ['instructions', 'deadlines', 'task decoding'],
    cards: [
      { front: '締め切り', back: 'しめきり — deadline', hint: 'study track' },
      { front: '提出', back: 'ていしゅつ — submission', hint: 'assignment language' },
      { front: 'そのあとで', back: 'after that', hint: 'process logic' },
      { front: '〜までに', back: 'by / before (deadline)', hint: 'time reference' },
      { front: '必要', back: 'necessary / required', hint: 'instruction decoding' },
      { front: '確認', back: 'confirmation / check', hint: 'reduce mistakes' },
    ],
  },
  {
    id: 'final_review_003',
    title: 'Design language bridge',
    levelBand: 'N3',
    focus: ['visual description', 'critique', 'process'],
    cards: [
      { front: '余白', back: 'よはく — negative space', hint: 'breathing of composition' },
      { front: '構図', back: 'こうず — composition', hint: 'visual arrangement' },
      { front: '視線誘導', back: 'しせんゆうどう — eye guidance', hint: 'how attention moves' },
      { front: '一貫性', back: 'いっかんせい — consistency', hint: 'coherence in a design system' },
      { front: '講評', back: 'こうひょう — critique / review', hint: 'studio language' },
      { front: '改善', back: 'かいぜん — improvement / revision', hint: 'iteration language' },
    ],
  },
  {
    id: 'final_review_004',
    title: 'Academic readiness loop',
    levelBand: 'N2',
    focus: ['institutional reading', 'clarification', 'presentation support'],
    cards: [
      { front: '手続き', back: 'てつづき — procedure', hint: 'institutional pages' },
      { front: '対象者', back: 'たいしょうしゃ — eligible person / target person', hint: 'official criteria' },
      { front: '観点', back: 'かんてん — evaluation point / criterion', hint: 'rubric language' },
      { front: '意図', back: 'いと — intention', hint: 'portfolio and rationale' },
      { front: '根拠', back: 'こんきょ — basis / evidence', hint: 'academic explanation' },
      { front: '確認しますと〜', back: 'To confirm, ...', hint: 'Q&A survival' },
    ],
  },
]

export const FINAL_REALITY_DEEP_CARDS: FinalRealityDeepCard[] = [
  {
    id: 'deep_reality_001',
    topic: 'scholarships',
    title: 'Scholarships need evidence, not hope alone',
    practicalTruth: 'A scholarship path becomes real only when eligibility, timing, documents, and restrictions are confirmed from primary sources.',
    whatToDoNext: ['compare official scholarship pages', 'note document demands', 'separate confirmed facts from rumours'],
    whatNotToDo: ['do not rely on old reposts', 'do not merge several programs into one imaginary route'],
    whyThisMatters: 'Without verification, scholarship hope easily becomes false planning fuel.',
  },
  {
    id: 'deep_reality_002',
    topic: 'university',
    title: 'There is no single “Japan university path”',
    practicalTruth: 'Language needs, EJU, portfolio, interview style, deadlines, and documents differ by institution and by program.',
    whatToDoNext: ['treat each target university as its own card', 'record requirements separately', 'mark unknowns clearly'],
    whatNotToDo: ['do not assume one school represents all schools'],
    whyThisMatters: 'Program-specific truth prevents strategic mistakes.',
  },
  {
    id: 'deep_reality_003',
    topic: 'housing',
    title: 'Housing is part of adaptation, not a side quest',
    practicalTruth: 'Cost alone is not enough; support level, contract complexity, rules, and commute burden shape actual study survival.',
    whatToDoNext: ['compare dorm and private routes', 'list support and complexity factors', 'prepare contract vocabulary'],
    whatNotToDo: ['do not choose only by monthly rent'],
    whyThisMatters: 'Daily friction can destroy energy faster than one hard class.',
  },
  {
    id: 'deep_reality_004',
    topic: 'design',
    title: 'Design interest needs Japanese to become a path',
    practicalTruth: 'Without critique, portfolio, process, and explanation language, design remains aesthetic motivation rather than study readiness.',
    whatToDoNext: ['practice critique weekly', 'store portfolio phrases', 'connect design observations to Japanese output'],
    whatNotToDo: ['do not wait until general Japanese is “finished”'],
    whyThisMatters: 'Parallel growth makes the design future more real.',
  },
  {
    id: 'deep_reality_005',
    topic: 'study',
    title: 'Academic survival is broader than JLPT',
    practicalTruth: 'Reading stamina, lecture structure, instruction decoding, note-making, and clarification questions matter alongside level labels.',
    whatToDoNext: ['train academic response loops', 'practice institutional reading', 'build survival phrase banks'],
    whatNotToDo: ['do not mistake a certificate label for total readiness'],
    whyThisMatters: 'This is the difference between passing and coping.',
  },
  {
    id: 'deep_reality_006',
    topic: 'documents',
    title: 'Document confusion should end in checklists',
    practicalTruth: 'If official pages feel dense, the product should convert them into who / what / by when / what next.',
    whatToDoNext: ['rewrite procedures as checklist steps', 'highlight exact dates', 'separate required from optional'],
    whatNotToDo: ['do not leave official instructions in raw form only'],
    whyThisMatters: 'Most administrative mistakes happen between reading and action.',
  },
  {
    id: 'deep_reality_007',
    topic: 'support',
    title: 'Support is part of readiness, not a rescue of last resort',
    practicalTruth: 'Knowing where to ask, how to ask, and which office handles what is part of functioning in a university system.',
    whatToDoNext: ['make a support map', 'prepare first-question phrases', 'treat asking for help as normal'],
    whatNotToDo: ['do not wait for a crisis to learn the support structure'],
    whyThisMatters: 'Support knowledge reduces freeze, shame, and delay.',
  },
]

export const FINAL_DESIGN_LEXICON_SETS: FinalDesignLexiconSet[] = [
  {
    id: 'design_lexicon_001',
    title: 'Observation and composition',
    items: [
      { jp: '余白', reading: 'よはく', en: 'negative space', use: '余白があると、情報が呼吸しやすくなる。' },
      { jp: '構図', reading: 'こうず', en: 'composition', use: 'この構図は視線を自然に導いている。' },
      { jp: '視線誘導', reading: 'しせんゆうどう', en: 'eye guidance', use: '色と線が視線誘導として機能している。' },
      { jp: 'バランス', reading: 'balance', en: 'balance', use: '全体のバランスが落ち着いて見える。' },
      { jp: '対比', reading: 'たいひ', en: 'contrast', use: '対比があるので、要点が見えやすい。' },
    ],
    bridgeToUse: 'Use for first critique and visible-description tasks.',
  },
  {
    id: 'design_lexicon_002',
    title: 'Information and clarity',
    items: [
      { jp: '情報設計', reading: 'じょうほうせっけい', en: 'information design', use: '情報設計が明確だと、迷いが減る。' },
      { jp: '階層', reading: 'かいそう', en: 'hierarchy', use: '情報の階層がはっきりしている。' },
      { jp: '一貫性', reading: 'いっかんせい', en: 'consistency', use: '一貫性があるので、読みやすい。' },
      { jp: '明確さ', reading: 'めいかくさ', en: 'clarity', use: 'もう少し明確さがあると伝わりやすい。' },
      { jp: '可読性', reading: 'かどくせい', en: 'readability', use: '文字の可読性が高くて助かる。' },
    ],
    bridgeToUse: 'Use for path screens, interface critique, and practical design language.',
  },
  {
    id: 'design_lexicon_003',
    title: 'Process and critique',
    items: [
      { jp: '試作', reading: 'しさく', en: 'prototype', use: '小さい試作から考えたほうがいい。' },
      { jp: '改善', reading: 'かいぜん', en: 'improvement', use: '講評のあとで改善点が見えてきた。' },
      { jp: '講評', reading: 'こうひょう', en: 'critique / review', use: '講評では理由まで説明する必要がある。' },
      { jp: '意図', reading: 'いと', en: 'intention', use: 'この意図を先に言うと伝わりやすい。' },
      { jp: '根拠', reading: 'こんきょ', en: 'rationale / basis', use: '見た目だけでなく、根拠も必要だ。' },
    ],
    bridgeToUse: 'Use for portfolio talk, studio discussion, and revision explanations.',
  },
]

export const FINAL_RELEASE_AUDIT: FinalReleaseAuditItem[] = [
  {
    id: 'audit_001',
    layer: 'content',
    target: 'Materially larger static foundation',
    currentState: 'Multiple new content families, lesson sequences, progression, path kits, design/academic packs, factual guidance, and curriculum scaffolds are now present.',
    remainingGap: 'Existing thin legacy files still need to be reconciled or replaced in live product wiring.',
  },
  {
    id: 'audit_002',
    layer: 'design',
    target: 'Design track should be concrete and study-relevant',
    currentState: 'Critique cards, portfolio talk, design modules, and expanded lexicon sets are now defined.',
    remainingGap: 'Need stronger surface-level integration in actual components.',
  },
  {
    id: 'audit_003',
    layer: 'path',
    target: 'Path to Japan should feel practical and verified',
    currentState: 'Decision sheets, verification checklists, path scenarios, factual guidance, and practical path boards are present.',
    remainingGap: 'Live UI still needs to consume them as user-facing flows.',
  },
  {
    id: 'audit_004',
    layer: 'chat',
    target: 'Chat should act as constrained layer above static system',
    currentState: 'Bridge rules and factual guidance architecture are defined.',
    remainingGap: 'Full wiring from chat route / UI components to these new static packs still needs implementation.',
  },
  {
    id: 'audit_005',
    layer: 'ux',
    target: 'Product should feel like a coherent new stage, not only a richer repo',
    currentState: 'Home, Path, Scene, Review, Re-entry, and Factual blueprints now exist.',
    remainingGap: 'Blueprints still need to become real screen logic.',
  },
  {
    id: 'audit_006',
    layer: 'learning_system',
    target: 'ADHD-friendly progression, re-entry, and rhythms',
    currentState: 'Session recipes, milestones, weekly rhythms, re-entry state rules, and lesson sequences are present.',
    remainingGap: 'The app still needs to choose and surface these dynamically.',
  },
]

export default {
  FINAL_REVIEW_SETS,
  FINAL_REALITY_DEEP_CARDS,
  FINAL_DESIGN_LEXICON_SETS,
  FINAL_RELEASE_AUDIT,
}
