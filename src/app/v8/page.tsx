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
type ReentryState = 'fresh' | 'fragile' | 'overwhelmed' | 'returning' | 'momentum'

const tabs: Array<{ id: TabId; label: string }> = [
  { id: 'today', label: 'Сегодня' },
  { id: 'path', label: 'Путь в Японию' },
  { id: 'design', label: 'Дизайн' },
  { id: 'factual', label: 'Проверено' },
]

const stateLabels: Record<ReentryState, string> = {
  fresh: 'Есть ресурс',
  fragile: 'Хрупкое внимание',
  overwhelmed: 'Перегруз',
  returning: 'Возвращаюсь',
  momentum: 'Есть инерция',
}

const modeLabels: Record<string, string> = {
  micro_restart: 'Микро-перезапуск',
  steady_growth: 'Спокойный рост',
  focus_day: 'Фокус-день',
  catchup_light: 'Мягкий catch-up',
  exam_bridge: 'Мост к экзамену',
  design_day: 'День дизайна',
}

const trackLabels: Record<string, string> = {
  journey_japanese: 'Japanese journey',
  live_in_japan: 'Жизнь в Японии',
  study_in_japan: 'Учёба в Японии',
  design_in_japanese: 'Дизайн на японском',
  michi_expression: 'Выражение с Michi',
}

export default function MichiV8Page() {
  const [tab, setTab] = useState<TabId>('today')
  const [learnerState, setLearnerState] = useState<ReentryState>('returning')

  const reentryRule = progressionSystem.REENTRY_STATE_RULES.find((rule) => rule.state === learnerState) ?? progressionSystem.REENTRY_STATE_RULES[3]
  const activeRecipe = progressionSystem.SESSION_RECIPES.find((recipe) => recipe.mode === reentryRule.recommendedMode) ?? progressionSystem.SESSION_RECIPES[0]
  const weeklyRhythm =
    learnerState === 'momentum' || learnerState === 'fresh'
      ? progressionSystem.WEEKLY_RHYTHMS[1]
      : learnerState === 'overwhelmed' || learnerState === 'returning'
        ? progressionSystem.WEEKLY_RHYTHMS[2]
        : progressionSystem.WEEKLY_RHYTHMS[0]

  const currentMilestone = progressionSystem.PROGRESS_MILESTONES[1]
  const reviewSet = finalReleasePack.FINAL_REVIEW_SETS[1]
  const realityDeepCards = finalReleasePack.FINAL_REALITY_DEEP_CARDS.slice(0, 3)
  const pathDecision = practicalPathKits.DECISION_SHEETS[0]
  const pathScenario = practicalPathKits.PATH_SCENARIOS[0]
  const bridgePack = lessonSequencesModule.SEQUENCE_PACKS[1]
  const designLexicon = finalReleasePack.FINAL_DESIGN_LEXICON_SETS[1]
  const critiqueCard = designAcademicPack.DESIGN_CRITIQUE_CARDS[4]
  const portfolioFrame = designAcademicPack.PORTFOLIO_TALK_FRAMES[2]
  const survivalPatterns = designAcademicPack.STUDY_SURVIVAL_PATTERNS.slice(0, 3)
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

  const warmCard = {
    ...card,
    background: 'rgba(255,250,244,0.88)',
    border: '1px solid #ead8c4',
  } as const

  const mistCard = {
    ...card,
    background: 'rgba(248,244,238,0.88)',
  } as const

  const muted = { color: '#7e7468', fontSize: 13, lineHeight: 1.6 } as const
  const accent = '#9a7442'

  const sectionTitle = (eyebrow: string, title: string, body?: string) => (
    <>
      <div style={{ fontSize: 12, color: accent, marginBottom: 8 }}>{eyebrow}</div>
      <h3 style={{ margin: '0 0 8px', fontSize: 28, lineHeight: 1.16 }}>{title}</h3>
      {body && <p style={{ ...muted, margin: '0 0 14px' }}>{body}</p>}
    </>
  )

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

        <section style={{ ...card, position: 'relative', overflow: 'hidden', minHeight: 320, marginBottom: 16 }}>
          <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(180deg, rgba(28,19,8,0.18), rgba(28,19,8,0.68)), url(${heroVisual?.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
          <div style={{ position: 'relative', zIndex: 1, minHeight: 282, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.76)', marginBottom: 8 }}>Сегодняшний спокойный вход</div>
              <h2 style={{ margin: '0 0 10px', fontSize: 36, lineHeight: 1.04, color: '#fff', maxWidth: 540 }}>Начать с малого. Не потерять из виду большое.</h2>
              <p style={{ margin: 0, maxWidth: 520, color: 'rgba(255,255,255,0.88)', lineHeight: 1.65 }}>
                Michi помогает сделать один посильный шаг сегодня, а потом мягко связать его с реальным путём к языку, учёбе и жизни в Японии.
              </p>

              <div style={{ marginTop: 16, maxWidth: 420, padding: '12px 14px', borderRadius: 18, background: 'rgba(255,255,255,0.14)', border: '1px solid rgba(255,255,255,0.18)', backdropFilter: 'blur(8px)' }}>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.68)', marginBottom: 4 }}>Шёпот Michi</div>
                <div style={{ color: '#fff', lineHeight: 1.6 }}>
                  Иногда путь снова начинается не с плана на два года, а с одной короткой сцены и ощущения: «сегодня я всё-таки вернулся».
                </div>
              </div>
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
            <section style={warmCard}>
              {sectionTitle('Подобрано под состояние', activeRecipe.title, activeRecipe.bestFor)}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 12 }}>
                {(Object.keys(stateLabels) as ReentryState[]).map((state) => (
                  <button
                    key={state}
                    onClick={() => setLearnerState(state)}
                    style={{
                      borderRadius: 999,
                      border: `1px solid ${learnerState === state ? '#cba77b' : '#eadfce'}`,
                      background: learnerState === state ? 'rgba(154,116,66,0.12)' : '#fffdf9',
                      color: '#4d3b25',
                      padding: '8px 12px',
                      cursor: 'pointer',
                      fontSize: 12,
                      fontWeight: 600,
                    }}
                  >
                    {stateLabels[state]}
                  </button>
                ))}
              </div>
              <div style={{ display: 'grid', gap: 10 }}>
                {activeRecipe.steps.map((step: string, index: number) => (
                  <div key={step} style={{ display: 'grid', gridTemplateColumns: '28px 1fr', gap: 10, alignItems: 'start' }}>
                    <div style={{ width: 28, height: 28, borderRadius: 999, background: 'rgba(154,116,66,0.12)', color: accent, display: 'grid', placeItems: 'center', fontWeight: 700 }}>{index + 1}</div>
                    <div style={{ fontSize: 16, lineHeight: 1.5 }}>{step}</div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 14, paddingTop: 12, borderTop: '1px solid #eadfce', ...muted }}>
                <strong style={{ color: '#5f4a2f' }}>Сигнал успеха:</strong> {activeRecipe.successSignal}
              </div>
            </section>

            <section style={mistCard}>
              {sectionTitle('Мягкий возврат', 'Что делать, если ритм сейчас такой', reentryRule.description)}
              <div style={{ padding: '12px 14px', borderRadius: 18, background: '#fffdf9', border: '1px solid #e7ddd2', lineHeight: 1.6 }}>
                {reentryRule.firstMessage}
              </div>
              <div style={{ marginTop: 10, fontSize: 13, color: '#5f4a2f', fontWeight: 700 }}>Лучший режим сейчас</div>
              <div style={{ marginTop: 4, ...muted }}>{modeLabels[reentryRule.recommendedMode] ?? reentryRule.recommendedMode}</div>
              <div style={{ marginTop: 10, fontSize: 13, color: '#5f4a2f', fontWeight: 700 }}>Чего избегать</div>
              <ul style={{ margin: '6px 0 0', paddingLeft: 18, lineHeight: 1.75 }}>
                {reentryRule.avoid.map((item: string) => <li key={item}>{item}</li>)}
              </ul>
            </section>

            <section style={{ ...mistCard, overflow: 'hidden', position: 'relative' }}>
              <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(180deg, rgba(247,241,232,0.76), rgba(247,241,232,0.94)), url(${pathVisual?.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
              <div style={{ position: 'relative', zIndex: 1 }}>
                {sectionTitle('Точка прогресса', currentMilestone.title)}
                <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.85 }}>
                  {currentMilestone.learnerCan.map((item: string) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            </section>

            <section style={card}>
              {sectionTitle('Повторение без стыда', reviewSet.title, 'Без перегруза и без чувства, что нужно сначала снова стать идеальным учеником.')}
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

            <section style={warmCard}>
              {sectionTitle('Ритм недели', weeklyRhythm.title, weeklyRhythm.whyItWorks)}
              <div style={{ display: 'grid', gap: 10 }}>
                {weeklyRhythm.sessions.map((item: any) => (
                  <div key={item.dayLabel} style={{ border: '1px solid #eadfce', borderRadius: 16, padding: 12, background: '#fffdf9' }}>
                    <div style={{ fontSize: 12, color: '#8d8274' }}>{item.dayLabel}</div>
                    <div style={{ fontSize: 15, fontWeight: 700, marginTop: 2 }}>{modeLabels[item.mode] ?? item.mode}</div>
                    <div style={{ marginTop: 4, ...muted }}>Главный трек: {trackLabels[item.primaryTrack] ?? item.primaryTrack}</div>
                  </div>
                ))}
              </div>
            </section>

            <section style={mistCard}>
              {sectionTitle('Первые месяцы пути', 'Как будет раскрываться маршрут', 'Не длинный абстрактный план, а последовательность спокойных этапов, в которых ритм важнее героизма.')}
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
            <section style={warmCard}>
              {sectionTitle('Лист решения', pathDecision.title, pathDecision.keyQuestion)}
              <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.85 }}>{pathDecision.comparePoints.map((p: string) => <li key={p}>{p}</li>)}</ul>
            </section>
            <section style={card}>
              {sectionTitle('Практический сценарий', pathScenario.title, pathScenario.situation)}
              <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.85 }}>{pathScenario.usefulMoves.map((m: string) => <li key={m}>{m}</li>)}</ul>
            </section>
            <section style={mistCard}>
              {sectionTitle('Переход к учебному японскому', bridgePack.title, bridgePack.objective)}
              <div style={{ ...muted, marginTop: 4 }}><strong style={{ color: '#5f4a2f' }}>Сдвиг:</strong> {bridgePack.expectedShift}</div>
            </section>
            <section style={warmCard}>
              {sectionTitle('Практические истины', 'Что чаще всего ломает путь', 'Это не мотивирующие лозунги, а вещи, которые чаще всего путают planning и превращают его в хаос.')}
              <div style={{ display: 'grid', gap: 12 }}>
                {realityDeepCards.map((item: any) => (
                  <div key={item.id} style={{ border: '1px solid #eadfce', borderRadius: 18, padding: 14, background: '#fffdf9' }}>
                    <div style={{ fontSize: 16, fontWeight: 700, lineHeight: 1.35 }}>{item.title}</div>
                    <div style={{ marginTop: 6, ...muted }}>{item.practicalTruth}</div>
                    <div style={{ marginTop: 10, fontSize: 13, color: '#5f4a2f', fontWeight: 700 }}>Что сделать дальше</div>
                    <ul style={{ margin: '6px 0 0', paddingLeft: 18, lineHeight: 1.75 }}>
                      {item.whatToDoNext.map((step: string) => <li key={step}>{step}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
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
                <p style={{ ...muted, margin: 0 }}>Не просто красивые картинки, а язык для critique, портфолио и реального студийного будущего.</p>
              </div>
            </section>
            <section style={warmCard}>
              {sectionTitle('Язык critique', critiqueCard.title, 'Когда нравится визуал, но нужно ещё суметь объяснить, что именно работает и почему.')}
              <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.8 }}>{critiqueCard.sentenceFrames.map((f: string) => <li key={f}>{f}</li>)}</ul>
              <div style={{ marginTop: 10, ...muted }}><strong style={{ color: '#5f4a2f' }}>Микро-задача:</strong> {critiqueCard.microTask}</div>
            </section>
            <section style={mistCard}>
              {sectionTitle('Разговор о портфолио', portfolioFrame.title, 'Это уже не просто словарь, а структура ответа, которая пригодится для студийного разговора, презентации и приёмной логики.')}
              <div style={{ display: 'grid', gap: 10 }}>
                {portfolioFrame.structure.map((item: string) => (
                  <div key={item} style={{ border: '1px solid #e7ddd2', borderRadius: 16, padding: 12, background: '#fffdf9' }}>{item}</div>
                ))}
              </div>
              <div style={{ marginTop: 12, fontSize: 13, color: '#5f4a2f', fontWeight: 700 }}>Полезный японский</div>
              <ul style={{ margin: '6px 0 0', paddingLeft: 18, lineHeight: 1.75 }}>
                {portfolioFrame.usefulJapanese.map((line: string) => <li key={line}>{line}</li>)}
              </ul>
            </section>
            <section style={card}>
              {sectionTitle('Лексика дизайна', designLexicon.title, 'Не просто слова, а строительный материал для обсуждения работ, интерфейсов и визуальных решений.')}
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
            <section style={warmCard}>
              {sectionTitle('Учебная выживаемость', 'Фразы, которые реально помогают не теряться', 'Это уже ближе к жизни в аудитории, офисе и групповой работе, где важен не только язык, но и способность спокойно продолжать действие.')}
              <div style={{ display: 'grid', gap: 12 }}>
                {survivalPatterns.map((item: any) => (
                  <div key={item.id} style={{ border: '1px solid #eadfce', borderRadius: 18, padding: 14, background: '#fffdf9' }}>
                    <div style={{ fontSize: 15, fontWeight: 700 }}>{item.title}</div>
                    <div style={{ marginTop: 6, ...muted }}>{item.useCase}</div>
                    <ul style={{ margin: '8px 0 0', paddingLeft: 18, lineHeight: 1.75 }}>
                      {item.japanese.map((line: string) => <li key={line}>{line}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {tab === 'factual' && (
          <div style={{ display: 'grid', gap: 14 }}>
            <section style={warmCard}>
              {sectionTitle('Проверяемый слой', factualCard.title, factualCard.summary)}
              <div style={{ fontSize: 14, color: '#5f4a2f' }}><strong>Почему это нужно проверять:</strong> {factualCard.whyThisNeedsVerification}</div>
            </section>
            <section style={mistCard}>
              {sectionTitle('Правила доверия', 'Как Michi должен обращаться с фактами', 'Когда речь о грантах, дедлайнах, визах и программах, поддержка не должна подменять проверку.')}
              <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.8 }}>{sourceRules.map((r: any) => <li key={r.id}>{r.rule}</li>)}</ul>
            </section>
            <section style={card}>
              {sectionTitle('Чего не делать', 'Три типичных ошибки planning-а', 'Это не запреты ради строгости, а защита от самых частых логических ловушек.')}
              <div style={{ display: 'grid', gap: 10 }}>
                {realityDeepCards.map((item: any) => (
                  <div key={item.id} style={{ border: '1px solid #ece3d7', borderRadius: 16, padding: 14, background: '#fffdf9' }}>
                    <div style={{ fontSize: 15, fontWeight: 700 }}>{item.title}</div>
                    <ul style={{ margin: '8px 0 0', paddingLeft: 18, lineHeight: 1.75 }}>
                      {item.whatNotToDo.map((rule: string) => <li key={rule}>{rule}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}
      </div>
    </div>
  )
}
