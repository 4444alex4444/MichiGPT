'use client'
import { useMemo, useState } from 'react'
import MICHI_TWO_YEAR_CURRICULUM from '../../../content/curriculum'
import progressionSystem from '../../../content/progression_system'
import practicalPathKits from '../../../content/practical_path_kits'
import lessonSequencesModule from '../../../content/lesson_sequences'
import finalReleasePack from '../../../content/final_release_pack'
import designAcademicPack from '../../../content/design_academic_pack'
import factualGuidanceModule from '../../../content/factual_guidance'
import { getDesignTrackVisual, getHeroVisual, getPathVisual } from '@/lib/visuals'

type TabId = 'today' | 'path' | 'design' | 'factual'

const tabs: Array<{ id: TabId; label: string }> = [
  { id: 'today', label: 'Сегодня' },
  { id: 'path', label: 'Путь в Японию' },
  { id: 'design', label: 'Дизайн' },
  { id: 'factual', label: 'Проверено' },
]

export default function MichiV8Page() {
  const [tab, setTab] = useState<TabId>('today')

  const todayRecipe = progressionSystem.SESSION_RECIPES[0]
  const currentMilestone = progressionSystem.PROGRESS_MILESTONES[1]
  const reviewSet = finalReleasePack.FINAL_REVIEW_SETS[1]
  const pathDecision = practicalPathKits.DECISION_SHEETS[0]
  const pathScenario = practicalPathKits.PATH_SCENARIOS[0]
  const bridgePack = lessonSequencesModule.SEQUENCE_PACKS[1]
  const designLexicon = finalReleasePack.FINAL_DESIGN_LEXICON_SETS[1]
  const critiqueCard = designAcademicPack.DESIGN_CRITIQUE_CARDS[4]
  const factualCard = factualGuidanceModule.FACTUAL_GUIDANCE_CARDS[0]
  const sourceRules = factualGuidanceModule.SOURCE_POLICY_RULES.slice(0, 3)
  const nextMonths = useMemo(() => MICHI_TWO_YEAR_CURRICULUM.slice(0, 4), [])

  const heroVisual = getHeroVisual()
  const designVisual = getDesignTrackVisual()
  const pathVisual = getPathVisual()

  const card = {
    background: 'rgba(255,255,255,0.82)',
    border: '1px solid #e8ddcf',
    borderRadius: 24,
    padding: 18,
    boxShadow: '0 14px 40px rgba(52, 34, 12, 0.06)',
    backdropFilter: 'blur(10px)',
  } as const

  const muted = { color: '#7e7468', fontSize: 13, lineHeight: 1.6 } as const
  const accent = '#9a7442'

  return (
    <div style={{ minHeight: '100dvh', background: 'linear-gradient(180deg, #f8f2e8 0%, #efe6d7 100%)', color: '#2c2925' }}>
      <div style={{ maxWidth: 760, margin: '0 auto', padding: '22px 16px 56px' }}>
        <header style={{ marginBottom: 16 }}>
          <div style={{ fontSize: 12, letterSpacing: '0.08em', color: '#8c8175' }}>MICHI JOURNEY · 道</div>
          <h1 style={{ margin: '10px 0 10px', fontSize: 30, lineHeight: 1.12 }}>Тихий путь к японскому и настоящей Японии</h1>
          <p style={{ ...muted, margin: 0, maxWidth: 620 }}>
            Более тёплая и мобильная поверхность: меньше ощущения учебной панели, больше ощущения живого путешествия с практической опорой.
          </p>
        </header>

        <section style={{ ...card, position: 'relative', overflow: 'hidden', minHeight: 280, marginBottom: 16 }}>
          <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(180deg, rgba(28,19,8,0.20), rgba(28,19,8,0.64)), url(${heroVisual?.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
          <div style={{ position: 'relative', zIndex: 1, minHeight: 244, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.76)', marginBottom: 8 }}>Сегодняшний спокойный вход</div>
              <h2 style={{ margin: '0 0 10px', fontSize: 34, lineHeight: 1.05, color: '#fff', maxWidth: 520 }}>Начать с малого. Не потерять из виду большое.</h2>
              <p style={{ margin: 0, maxWidth: 520, color: 'rgba(255,255,255,0.88)', lineHeight: 1.65 }}>
                Michi помогает сделать один посильный шаг сегодня, а потом мягко связать его с реальным путём к языку, учёбе и жизни в Японии.
              </p>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 18 }}>
              {tabs.map((item) => (
                <button key={item.id} onClick={() => setTab(item.id)} style={{ borderRadius: 999, border: `1px solid ${tab === item.id ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.22)'}`, background: tab === item.id ? accent : 'rgba(255,255,255,0.12)', color: '#fff', padding: '10px 15px', cursor: 'pointer', fontWeight: 600 }}>
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {tab === 'today' && (
          <div style={{ display: 'grid', gap: 14 }}>
            <section style={card}>
              <div style={{ fontSize: 12, color: accent, marginBottom: 8 }}>Маленький шаг на сегодня</div>
              <h3 style={{ margin: '0 0 8px', fontSize: 28, lineHeight: 1.16 }}>Тихий возврат в ритм</h3>
              <p style={{ ...muted, margin: '0 0 14px' }}>{todayRecipe.bestFor}</p>
              <div style={{ display: 'grid', gap: 10 }}>
                {todayRecipe.steps.map((step: string, index: number) => (
                  <div key={step} style={{ display: 'grid', gridTemplateColumns: '28px 1fr', gap: 10, alignItems: 'start' }}>
                    <div style={{ width: 28, height: 28, borderRadius: 999, background: 'rgba(154,116,66,0.12)', color: accent, display: 'grid', placeItems: 'center', fontWeight: 700 }}>{index + 1}</div>
                    <div style={{ fontSize: 16, lineHeight: 1.5 }}>{step}</div>
                  </div>
                ))}
              </div>
            </section>
            <section style={{ ...card, overflow: 'hidden', position: 'relative' }}>
              <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(180deg, rgba(247,241,232,0.76), rgba(247,241,232,0.94)), url(${pathVisual?.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ fontSize: 12, color: accent, marginBottom: 8 }}>Точка прогресса</div>
                <h3 style={{ margin: '0 0 10px', fontSize: 25, lineHeight: 1.16 }}>{currentMilestone.title}</h3>
                <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.85 }}>
                  {currentMilestone.learnerCan.map((item: string) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            </section>
            <section style={card}>
              <div style={{ fontSize: 12, color: accent, marginBottom: 8 }}>Повторение без стыда</div>
              <div style={{ display: 'grid', gap: 10 }}>
                {reviewSet.cards.slice(0, 4).map((c: any) => (
                  <div key={c.front} style={{ border: '1px solid #ece3d7', borderRadius: 16, padding: 14, background: '#fffdf9' }}>
                    <div style={{ fontSize: 26, fontWeight: 700, lineHeight: 1 }}>{c.front}</div>
                    <div style={{ marginTop: 6, fontSize: 15, color: '#655b4d' }}>{c.back}</div>
                    <div style={{ marginTop: 4, fontSize: 12, color: '#9a8d7d' }}>{c.hint}</div>
                  </div>
                ))}
              </div>
            </section>
            <section style={card}>
              <div style={{ fontSize: 12, color: accent, marginBottom: 8 }}>Первые месяцы пути</div>
              <div style={{ display: 'grid', gap: 12 }}>
                {nextMonths.map((m: any) => (
                  <div key={m.monthNumber} style={{ display: 'grid', gridTemplateColumns: '4px 1fr', gap: 12, alignItems: 'start' }}>
                    <div style={{ width: 4, borderRadius: 99, background: 'linear-gradient(180deg, #9a7442, #cfb186)', minHeight: 52 }} />
                    <div>
                      <div style={{ fontSize: 12, color: '#8d8274' }}>Месяц {m.monthNumber} · {m.jlptTarget}</div>
                      <div style={{ fontSize: 16, fontWeight: 700, lineHeight: 1.35, marginTop: 2 }}>{m.title}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {tab === 'path' && (
          <div style={{ display: 'grid', gap: 14 }}>
            <section style={{ ...card, overflow: 'hidden', position: 'relative' }}>
              <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(180deg, rgba(32,21,8,0.24), rgba(32,21,8,0.62)), url(${pathVisual?.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
              <div style={{ position: 'relative', zIndex: 1, color: '#fff' }}>
                <div style={{ fontSize: 12, opacity: 0.82, marginBottom: 8 }}>Путь в Японию</div>
                <h3 style={{ margin: '0 0 8px', fontSize: 28, lineHeight: 1.14 }}>Не мечта вообще, а следующий реальный шаг</h3>
                <p style={{ margin: 0, color: 'rgba(255,255,255,0.84)', lineHeight: 1.6 }}>Здесь путь к Японии разбирается как проверяемая траектория: что выяснить, что сравнить и где не перепутать красивое желание с реальной процедурой.</p>
              </div>
            </section>
            <section style={card}>
              <div style={{ fontSize: 12, color: accent, marginBottom: 8 }}>Лист решения</div>
              <h3 style={{ margin: '0 0 8px', fontSize: 24 }}>{pathDecision.title}</h3>
              <p style={{ ...muted, margin: '0 0 12px' }}>{pathDecision.keyQuestion}</p>
              <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.85 }}>{pathDecision.comparePoints.map((p: string) => <li key={p}>{p}</li>)}</ul>
            </section>
            <section style={card}>
              <div style={{ fontSize: 12, color: accent, marginBottom: 8 }}>Практический сценарий</div>
              <h3 style={{ margin: '0 0 8px', fontSize: 24 }}>{pathScenario.title}</h3>
              <p style={{ ...muted, margin: '0 0 12px' }}>{pathScenario.situation}</p>
              <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.85 }}>{pathScenario.usefulMoves.map((m: string) => <li key={m}>{m}</li>)}</ul>
            </section>
            <section style={card}>
              <div style={{ fontSize: 12, color: accent, marginBottom: 8 }}>Переход к учебному японскому</div>
              <h3 style={{ margin: '0 0 8px', fontSize: 24 }}>{bridgePack.title}</h3>
              <p style={{ ...muted, margin: '0 0 10px' }}>{bridgePack.objective}</p>
            </section>
          </div>
        )}

        {tab === 'design' && (
          <div style={{ display: 'grid', gap: 14 }}>
            <section style={{ ...card, overflow: 'hidden', position: 'relative' }}>
              <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(180deg, rgba(255,250,244,0.70), rgba(255,250,244,0.92)), url(${designVisual?.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ fontSize: 12, color: accent, marginBottom: 8 }}>Дизайн-трек</div>
                <h3 style={{ margin: '0 0 8px', fontSize: 28, lineHeight: 1.16 }}>Дизайн как настоящая японская траектория</h3>
                <p style={{ ...muted, margin: 0 }}>Не просто красивые картинки, а язык для critique и реального студийного будущего.</p>
              </div>
            </section>
            <section style={card}>
              <div style={{ fontSize: 12, color: accent, marginBottom: 8 }}>Язык critique</div>
              <h3 style={{ margin: '0 0 8px', fontSize: 24 }}>{critiqueCard.title}</h3>
              <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.8 }}>{critiqueCard.sentenceFrames.map((f: string) => <li key={f}>{f}</li>)}</ul>
            </section>
            <section style={card}>
              <div style={{ fontSize: 12, color: accent, marginBottom: 8 }}>Лексика дизайна</div>
              <div style={{ display: 'grid', gap: 10 }}>
                {designLexicon.items.map((item: any) => (
                  <div key={item.jp} style={{ border: '1px solid #ece3d7', borderRadius: 16, padding: 14, background: '#fffdf9' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, alignItems: 'baseline' }}>
                      <div style={{ fontSize: 24, fontWeight: 700 }}>{item.jp}</div>
                      <div style={{ fontSize: 12, color: '#9b8d7c' }}>{item.reading}</div>
                    </div>
                    <div style={{ marginTop: 4, fontSize: 14, color: '#6f6253' }}>{item.en}</div>
                    <div style={{ marginTop: 8, lineHeight: 1.55 }}>{item.use}</div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {tab === 'factual' && (
          <div style={{ display: 'grid', gap: 14 }}>
            <section style={card}>
              <div style={{ fontSize: 12, color: accent, marginBottom: 8 }}>Проверяемый слой</div>
              <h3 style={{ margin: '0 0 8px', fontSize: 28, lineHeight: 1.15 }}>{factualCard.title}</h3>
              <p style={{ ...muted, margin: '0 0 12px' }}>{factualCard.summary}</p>
              <div style={{ fontSize: 14, color: '#5f4a2f' }}><strong>Почему это нужно проверять:</strong> {factualCard.whyThisNeedsVerification}</div>
            </section>
            <section style={card}>
              <div style={{ fontSize: 12, color: accent, marginBottom: 8 }}>Правила доверия</div>
              <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.8 }}>{sourceRules.map((r: any) => <li key={r.id}>{r.rule}</li>)}</ul>
            </section>
          </div>
        )}
      </div>
    </div>
  )
}
