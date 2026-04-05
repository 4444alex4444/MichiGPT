export type StudyTrackId = 'journey_japanese' | 'live_in_japan' | 'study_in_japan' | 'design_in_japanese' | 'michi_expression'

export interface StudyTrack {
  id: StudyTrackId
  title: string
  purpose: string
  what_it_builds: string[]
  weekly_ratio: string
}

const studyTracks: StudyTrack[] = [
  { id: 'journey_japanese', title: 'Journey Japanese', purpose: 'Атмосферные сцены как главный эмоциональный вход в язык.', what_it_builds: ['мотивацию', 'лексическое узнавание', 'чувство языка', 'ритуал возвращения'], weekly_ratio: '25%' },
  { id: 'live_in_japan', title: 'Live in Japan', purpose: 'Язык повседневной жизни: транспорт, кафе, жильё, покупки, просьбы, объявления.', what_it_builds: ['бытовую автономность', 'понимание среды', 'уверенность в реальных ситуациях'], weekly_ratio: '20%' },
  { id: 'study_in_japan', title: 'Study in Japan', purpose: 'Язык заданий, лекций, инструкций, дедлайнов, конспектирования и коротких письменных ответов.', what_it_builds: ['академическую готовность', 'понимание формулировок', 'EJU-like skills'], weekly_ratio: '25%' },
  { id: 'design_in_japanese', title: 'Design in Japanese', purpose: 'Лексика и паттерны для описания формы, цвета, композиции, типографики, макета, пространства и critique.', what_it_builds: ['дизайнерский словарь', 'объяснение решений', 'soft critique language'], weekly_ratio: '20%' },
  { id: 'michi_expression', title: 'Michi Expression', purpose: 'Короткие ответы, наблюдения, мини-эссе и устное/письменное выражение собственной мысли.', what_it_builds: ['активное производство языка', 'рефлексию', 'мягкий переход к writing/speaking'], weekly_ratio: '10%' },
]

export default studyTracks
