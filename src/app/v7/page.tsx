'use client'
import { useMemo, useState } from 'react'
import MICHI_TWO_YEAR_CURRICULUM from '../../../content/curriculum'
import progressionSystem from '../../../content/progression_system'
import practicalPathKits from '../../../content/practical_path_kits'
import lessonSequencesModule from '../../../content/lesson_sequences'
import finalReleasePack from '../../../content/final_release_pack'
import designAcademicPack from '../../../content/design_academic_pack'
import factualGuidanceModule from '../../../content/factual_guidance'

type TabId = 'today' | 'path' | 'design' | 'factual'

const tabs: Array<{ id: TabId; label: string }> = [
  { id: 'today', label: 'Сегодня' },
  { id: 'path', label: 'Path to Japan' },
  { id: 'design', label: 'Design track' },
  { id: 'factual', label: 'Verified layer' },
]

export default function MichiV7Page() {
  const [tab, setTab] = useState<TabId>('today')

  const todayRecipe = progressionSystem.SESSION_RECIPES[0]
  const calmRecipe = progressionSystem.SESSION_RECIPES[1]
  const currentMilestone = progressionSystem.PROGRESS_MILESTONES[1]
  const reviewSet = finalReleasePack.FINAL_REVIEW_SETS[1]
  const pathDecision = practicalPathKits.DECISION_SHEETS[0]
  const pathScenario = practicalPathKits.PATH_SCENARIOS[0]
  const bridgePack = lessonSequencesModule.SEQUENCE_PACKS[1]
  const designLexicon = finalReleasePack.FINAL_DESIGN_LEXICON_SETS[1]
  const critiqueCard = designAcademicPack.DESIGN_CRITIQUE_CARDS[4]
  const portfolioFrame = designAcademicPack.PORTFOLIO_TALK_FRAMES[2]
  const factualCard = factualGuidanceModule.FACTUAL_GUIDANCE_CARDS[0]
  const sourceRules = factualGuidanceModule.SOURCE_POLICY_RULES.slice(0, 3)
  const nextMonths = useMemo(() => MICHI_TWO_YEAR_CURRICULUM.slice(0, 4), [])

  const shell: React.CSSProperties = {
    minHeight: '100dvh',
    background: 'linear-gradient(180deg, #f7f2ea 0%, #efe7db 100%)',
    color: '#2b2925',
  }
  const card: React.CSSProperties = {
    background: 'rgba(255,255,255,0.85)',
    border: '1px solid #e7ddd0',
    borderRadius: 20,
    padding: 16,
    boxShadow: '0 12px 30px rgba(0,0,0,0.04)',
  }
  const muted: React.CSSProperties = { color: '#7c7469', fontSize: 13, lineHeight: 1.55 }
  const accent = '#8b6c42'

  return (
    <div style={shell}>
      <div style={{ maxWidth: 980, margin: '0 auto', padding: '24px 16px 72px' }}>
        <header style={{ marginBottom: 18 }}>
          <div style={{ fontSize: 12, letterSpacing: '0.08em', color: '#8d8376' }}>MICHI JOURNEY · V7 SURFACE</div>
          <h1 style={{ margin: '8px 0 10px', fontSize: 32, lineHeight: 1.15 }}>Не просто набор карточек, а живая структура пути к Японии</h1>
          <p style={{ ...muted, maxWidth: 760 }}>
            Это интегрированная v7-страница, которая собирает curriculum, progression, review, practical path, design track и verified factual layer в один рабочий экран.
          </p>
        </header>

        <section style={{ ...card, marginBottom: 16, overflow: 'hidden', position: 'relative' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(139,108,66,0.08), rgba(208,174,128,0.06))' }} />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ fontSize: 12, color: accent, marginBottom: 6 }}>Сегодняшний спокойный вход</div>
            <div style={{ fontSize: 26, fontWeight: 700, lineHeight: 1.2, maxWidth: 720 }}>Michi теперь может начинать день с малого, но осмысленного шага — и связывать его с реальным будущим.</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 14 }}>
              {tabs.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setTab(item.id)}
                  style={{
                    borderRadius: 999,
                    border: `1px solid ${tab === item.id ? accent : '#d9cfc0'}`,
                    background: tab === item.id ? accent : 'rgba(255,255,255,0.75)',
                    color: tab === item.id ? '#fff' : '#3a352f',
                    padding: '9px 14px',
                    cursor: 'pointer',
                    fontWeight: 600,
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {tab === 'today' && (
          <div style={{ display: 'grid', gap: 14 }}>
            <section style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: 14 }}>
              <div style={card}>
                <div style={{ fontSize: 12, color: accent }}>Today recipe</div>
                <h2 style={{ margin: '6px 0 8px', fontSize: 22 }}>{todayRecipe.title}</h2>
                <p style={muted}>{todayRecipe.bestFor}</p>
                <ol style={{ margin: '12px 0 0 18px', padding: 0, lineHeight: 1.8 }}>
                  {todayRecipe.steps.map((step: string) => <li key={step}>{step}</li>)}
                </ol>
                <div style={{ marginTop: 12, fontSize: 13, color: '#6d6357' }}>Сигнал успеха: {todayRecipe.successSignal}</div>
              </div>
              <div style={card}>
                <div style={{ fontSize: 12, color: accent }}>Progress milestone</div>
                <h2 style={{ margin: '6px 0 8px', fontSize: 22 }}>{currentMilestone.title}</h2>
                <ul style={{ margin: '10px 0 0 18px', padding: 0, lineHeight: 1.8 }}>
                  {currentMilestone.learnerCan.map((item: string) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            </section>

            <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
              <div style={card}>
                <div style={{ fontSize: 12, color: accent }}>Review without shame</div>
                <h3 style={{ margin: '6px 0 8px', fontSize: 20 }}>{reviewSet.title}</h3>
                <div style={{ display: 'grid', gap: 8 }}>
                  {reviewSet.cards.slice(0, 4).map((c: any) => (
                    <div key={c.front} style={{ border: '1px solid #ece3d7', borderRadius: 14, padding: 10, background: '#fffdf9' }}>
                      <div style={{ fontSize: 16, fontWeight: 700 }}>{c.front}</div>
                      <div style={{ ...muted, marginTop: 2 }}>{c.back}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div style={card}>
                <div style={{ fontSize: 12, color: accent }}>Curriculum pulse</div>
                <h3 style={{ margin: '6px 0 8px', fontSize: 20 }}>Первые месяцы пути</h3>
                <div style={{ display: 'grid', gap: 8 }}>
                  {nextMonths.map((m: any) => (
                    <div key={m.monthNumber} style={{ borderLeft: `3px solid ${accent}`, paddingLeft: 10 }}>
                      <div style={{ fontSize: 13, color: '#8c7f6c' }}>Month {m.monthNumber} · {m.jlptTarget}</div>
                      <div style={{ fontWeight: 700, marginTop: 2 }}>{m.title}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        )}

        {tab === 'path' && (
          <div style={{ display: 'grid', gap: 14 }}>
            <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
              <div style={card}>
                <div style={{ fontSize: 12, color: accent }}>Decision sheet</div>
                <h2 style={{ margin: '6px 0 8px', fontSize: 22 }}>{pathDecision.title}</h2>
                <p style={muted}>{pathDecision.keyQuestion}</p>
                <ul style={{ margin: '12px 0 0 18px', padding: 0, lineHeight: 1.8 }}>
                  {pathDecision.comparePoints.map((p: string) => <li key={p}>{p}</li>)}
                </ul>
              </div>
              <div style={card}>
                <div style={{ fontSize: 12, color: accent }}>Path scenario</div>
                <h2 style={{ margin: '6px 0 8px', fontSize: 22 }}>{pathScenario.title}</h2>
                <p style={muted}>{pathScenario.situation}</p>
                <div style={{ marginTop: 10, fontWeight: 700 }}>Полезные ходы</div>
                <ul style={{ margin: '8px 0 0 18px', padding: 0, lineHeight: 1.8 }}>
                  {pathScenario.usefulMoves.map((m: string) => <li key={m}>{m}</li>)}
                </ul>
              </div>
            </section>
            <section style={card}>
              <div style={{ fontSize: 12, color: accent }}>Practical pack</div>
              <h2 style={{ margin: '6px 0 8px', fontSize: 22 }}>{bridgePack.title}</h2>
              <p style={muted}>{bridgePack.objective}</p>
              <div style={{ marginTop: 10, fontSize: 14 }}>Expected shift: <strong>{bridgePack.expectedShift}</strong></div>
            </section>
          </div>
        )}

        {tab === 'design' && (
          <div style={{ display: 'grid', gap: 14 }}>
            <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
              <div style={card}>
                <div style={{ fontSize: 12, color: accent }}>Critique language</div>
                <h2 style={{ margin: '6px 0 8px', fontSize: 22 }}>{critiqueCard.title}</h2>
                <p style={muted}>Фокус: {critiqueCard.focus.join(' · ')}</p>
                <ul style={{ margin: '12px 0 0 18px', padding: 0, lineHeight: 1.8 }}>
                  {critiqueCard.sentenceFrames.map((f: string) => <li key={f}>{f}</li>)}
                </ul>
              </div>
              <div style={card}>
                <div style={{ fontSize: 12, color: accent }}>Portfolio talk</div>
                <h2 style={{ margin: '6px 0 8px', fontSize: 22 }}>{portfolioFrame.title}</h2>
                <ul style={{ margin: '12px 0 0 18px', padding: 0, lineHeight: 1.8 }}>
                  {portfolioFrame.structure.map((f: string) => <li key={f}>{f}</li>)}
                </ul>
              </div>
            </section>
            <section style={card}>
              <div style={{ fontSize: 12, color: accent }}>Expanded design lexicon</div>
              <h2 style={{ margin: '6px 0 8px', fontSize: 22 }}>{designLexicon.title}</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0,1fr))', gap: 10 }}>
                {designLexicon.items.map((item: any) => (
                  <div key={item.jp} style={{ border: '1px solid #ece3d7', borderRadius: 14, padding: 10, background: '#fffdf9' }}>
                    <div style={{ fontSize: 17, fontWeight: 700 }}>{item.jp}</div>
                    <div style={{ ...muted, marginTop: 2 }}>{item.reading} · {item.en}</div>
                    <div style={{ marginTop: 6, lineHeight: 1.55 }}>{item.use}</div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {tab === 'factual' && (
          <div style={{ display: 'grid', gap: 14 }}>
            <section style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
              <div style={card}>
                <div style={{ fontSize: 12, color: accent }}>Verified factual mode</div>
                <h2 style={{ margin: '6px 0 8px', fontSize: 22 }}>{factualCard.title}</h2>
                <p style={muted}>{factualCard.summary}</p>
                <div style={{ marginTop: 10, fontSize: 14 }}>Why verify: <strong>{factualCard.whyThisNeedsVerification}</strong></div>
              </div>
              <div style={card}>
                <div style={{ fontSize: 12, color: accent }}>Source discipline</div>
                <h2 style={{ margin: '6px 0 8px', fontSize: 22 }}>Правила доверия</h2>
                <ul style={{ margin: '12px 0 0 18px', padding: 0, lineHeight: 1.8 }}>
                  {sourceRules.map((r: any) => <li key={r.id}>{r.rule}</li>)}
                </ul>
              </div>
            </section>
            <section style={card}>
              <div style={{ fontSize: 12, color: accent }}>What this page proves</div>
              <h2 style={{ margin: '6px 0 8px', fontSize: 22 }}>V7 может быть не только набором data-файлов</h2>
              <p style={muted}>
                Эта страница собирает curriculum, progression, review, design, practical path и factual guidance в один живой маршрут. Она не закрывает весь UI долга, но уже показывает, как новые v7-слои могут работать как продуктовая поверхность.
              </p>
            </section>
          </div>
        )}
      </div>
    </div>
  )
}
