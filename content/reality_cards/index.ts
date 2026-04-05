export interface RealityCard { id: string; topic: string; title: string; summary: string; source_hint: 'official'|'mixed' }
export default [
  {
    "id": "reality_01",
    "topic": "grants",
    "title": "MEXT как первая проверка реальности",
    "summary": "Смотри официальные условия и не вшивай в продукт быстро стареющие дедлайны.",
    "source_hint": "official"
  },
  {
    "id": "reality_02",
    "topic": "university",
    "title": "Требования задаёт конкретная программа",
    "summary": "Одинакового маршрута в Японию нет: язык, EJU и портфолио зависят от вуза.",
    "source_hint": "official"
  },
  {
    "id": "reality_03",
    "topic": "housing",
    "title": "Жильё — это часть учебной адаптации",
    "summary": "Нужно знать не только слова для комнаты, но и лексику контрактов, правил дома и сроков.",
    "source_hint": "official"
  },
  {
    "id": "reality_04",
    "topic": "design",
    "title": "Design track требует своего языка",
    "summary": "Нужны слова для critique, composition, material, layout и presentation.",
    "source_hint": "mixed"
  },
  {
    "id": "reality_05",
    "topic": "study",
    "title": "Язык для лекций отличается от языка сцен",
    "summary": "Нужны short summaries, note-taking и понимание инструкций.",
    "source_hint": "official"
  }
] as RealityCard[]
