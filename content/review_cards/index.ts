export interface ReviewCard { id: string; level: 'N5'|'N4'|'N3'; kind: 'vocab'|'phrase'|'grammar'|'design'|'reality'; front: string; back: string; hint: string }
export default [
  {
    "id": "review_01",
    "level": "N5",
    "kind": "vocab",
    "front": "駅",
    "back": "えき — станция",
    "hint": "quiet transit"
  },
  {
    "id": "review_02",
    "level": "N5",
    "kind": "phrase",
    "front": "〜てみたい",
    "back": "хотелось бы попробовать",
    "hint": "dream movement"
  },
  {
    "id": "review_03",
    "level": "N4",
    "kind": "grammar",
    "front": "そのあとで",
    "back": "после этого",
    "hint": "process logic"
  },
  {
    "id": "review_04",
    "level": "N4",
    "kind": "vocab",
    "front": "締め切り",
    "back": "しめきり — дедлайн",
    "hint": "study track"
  },
  {
    "id": "review_05",
    "level": "N4",
    "kind": "design",
    "front": "余白",
    "back": "よはく — negative space",
    "hint": "design track"
  },
  {
    "id": "review_06",
    "level": "N4",
    "kind": "reality",
    "front": "出願",
    "back": "しゅつがん — подача заявления",
    "hint": "path to japan"
  }
] as ReviewCard[]
