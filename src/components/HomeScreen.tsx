'use client'
import { UserProfile, isReturningUser, shouldSuggestLevelUp } from '@/lib/profile'
import { getMichiLine } from '../../content/michi_lines'
import studyTracks from '../../content/study_tracks'
import reviewCards from '../../content/review_cards'
import realityCards from '../../content/reality_cards'
import { getHeroVisual, getDesignTrackVisual } from '@/lib/visuals'
import { Screen } from '../app/page'

interface Props {
  profile: UserProfile
  onNavigate: (s: Screen) => void
  isDark: boolean
}

const MICHI_PANEL_OFFSET: Record<string, string> = {
  reader: '0% 0%', traveler: '100% 0%', coffee: '0% 100%', explorer: '100% 100%', night_watcher: '100% 0%',
}

export default function HomeScreen({ profile, onNavigate, isDark }: Props) {
  const fg = isDark ? '#e8e6df' : '#2a2825'
  const fgMuted = isDark ? '#9a978f' : '#7d7469'
  const cardBg = isDark ? 'rgba(21,23,34,0.82)' : 'rgba(255,255,255,0.82)'
  const accent = isDark ? '#d0ae80' : '#8b6c42'
  const border = isDark ? '#2a2d3e' : '#e8e1d7'
  const hero = getHeroVisual()
  const designVisual = getDesignTrackVisual()

  const situation = isReturningUser(profile) ? 'returning' : shouldSuggestLevelUp(profile) ? 'level_up' : 'greeting'
  const michiLine = getMichiLine(profile.michiState, situation)
  const now = new Date()
  const hour = now.getHours()
  const greeting = hour < 12 ? 'Доброе утро' : hour < 18 ? 'Добрый день' : 'Добрый вечер'
  const activeReview = reviewCards.slice(0, 2)
  const designPreview = studyTracks.find(t => t.id === 'design_in_japanese')
  const realityPreview = realityCards.slice(0, 2)

  return (
    <div style={{ minHeight: '100dvh', padding: '0 0 96px', display: 'flex', flexDirection: 'column' }}>
      <div style={{ padding: '20px 18px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <div style={{ fontSize: 11, color: fgMuted, letterSpacing: '0.08em' }}>MICHI JOURNEY · 道</div>
          <div style={{ fontSize: 22, fontWeight: 600, color: fg, marginTop: 4 }}>{greeting}</div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: 11, color: fgMuted }}>уровень</div>
          <div style={{ fontSize: 17, color: accent, fontWeight: 700 }}>{profile.level}</div>
        </div>
      </div>

      <div style={{ padding: '18px' }}>
        <div style={{
          position: 'relative', overflow: 'hidden', borderRadius: 24, minHeight: 220,
          border: `1px solid ${border}`, background: cardBg, boxShadow: '0 14px 40px rgba(0,0,0,0.08)'
        }}>
          {hero?.src && <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: `linear-gradient(180deg, rgba(10,12,18,0.22), rgba(10,12,18,0.66)), url(${hero.src})`,
            backgroundSize: 'cover', backgroundPosition: 'center', opacity: isDark ? 0.95 : 0.82
          }} />}
          <div style={{ position: 'relative', zIndex: 1, padding: 18, display: 'grid', gridTemplateColumns: '1fr auto', gap: 16 }}>
            <div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.72)', marginBottom: 8 }}>Сегодняшний ритуал</div>
              <div style={{ fontSize: 24, lineHeight: 1.25, color: '#fff', fontWeight: 700, maxWidth: 320 }}>Не просто красивый японский, а путь к реальной Японии.</div>
              <div style={{ marginTop: 12, maxWidth: 340, fontSize: 14, lineHeight: 1.6, color: 'rgba(255,255,255,0.84)' }}>{michiLine}</div>
              <div style={{ marginTop: 16, display: 'flex', gap: 10 }}>
                <button onClick={() => onNavigate('scene')} style={{ border: 'none', borderRadius: 14, padding: '12px 14px', background: accent, color: '#fff', cursor: 'pointer', fontWeight: 700 }}>Открыть сцену дня</button>
                <button onClick={() => onNavigate('path')} style={{ border: '1px solid rgba(255,255,255,0.28)', borderRadius: 14, padding: '12px 14px', background: 'rgba(255,255,255,0.08)', color: '#fff', cursor: 'pointer' }}>Path to Japan</button>
              </div>
            </div>
            <div style={{
              width: 112, height: 112, backgroundImage: 'url(/michi-panels.png)', backgroundSize: '200% 200%',
              backgroundPosition: MICHI_PANEL_OFFSET[profile.michiState] || '100% 0%', borderRadius: '50%',
              border: '1px solid rgba(255,255,255,0.16)', boxShadow: '0 8px 24px rgba(0,0,0,0.18)', alignSelf: 'start'
            }} />
          </div>
        </div>
      </div>

      <div style={{ padding: '0 18px 14px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
        {[
          { label: 'Сцен', value: profile.scenesOpened },
          { label: 'Слов', value: profile.wordsEncountered.length },
          { label: 'Точность', value: profile.totalAnswers > 0 ? `${Math.round(profile.correctAnswers / profile.totalAnswers * 100)}%` : '—' },
        ].map((stat) => (
          <div key={stat.label} style={{ background: cardBg, border: `1px solid ${border}`, borderRadius: 16, padding: '12px 8px', textAlign: 'center' }}>
            <div style={{ fontSize: 20, fontWeight: 700, color: accent }}>{stat.value}</div>
            <div style={{ fontSize: 11, color: fgMuted, marginTop: 2 }}>{stat.label}</div>
          </div>
        ))}
      </div>

      <div style={{ padding: '0 18px', display: 'flex', flexDirection: 'column', gap: 12 }}>
        <section style={{ background: cardBg, border: `1px solid ${border}`, borderRadius: 18, padding: 16 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
            <div style={{ fontSize: 14, color: fgMuted }}>Маленькое повторение</div>
            <div style={{ fontSize: 12, color: accent }}>review</div>
          </div>
          <div style={{ display: 'grid', gap: 8 }}>
            {activeReview.map((card: any) => (
              <div key={card.id} style={{ borderRadius: 14, border: `1px solid ${border}`, padding: 12, background: isDark ? 'rgba(255,255,255,0.02)' : '#fffdfa' }}>
                <div style={{ fontSize: 12, color: fgMuted }}>{card.kind}</div>
                <div style={{ fontSize: 16, color: fg, fontWeight: 700, marginTop: 2 }}>{card.front}</div>
                <div style={{ fontSize: 13, color: fgMuted, marginTop: 4 }}>{card.back}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ background: cardBg, border: `1px solid ${border}`, borderRadius: 18, padding: 16, overflow: 'hidden', position: 'relative' }}>
          {designVisual?.src && <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(180deg, rgba(10,12,18,0.10), rgba(10,12,18,0.55)), url(${designVisual.src})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.3 }} />}
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ fontSize: 14, color: fgMuted }}>Design in Japanese</div>
            <div style={{ fontSize: 18, color: fg, fontWeight: 700, marginTop: 4 }}>{designPreview?.title}</div>
            <div style={{ fontSize: 13, color: fg, lineHeight: 1.6, marginTop: 8 }}>{designPreview?.purpose}</div>
            <button onClick={() => onNavigate('path')} style={{ marginTop: 12, borderRadius: 12, padding: '10px 12px', border: `1px solid ${border}`, background: isDark ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.75)', color: fg, cursor: 'pointer' }}>Посмотреть путь</button>
          </div>
        </section>

        <section style={{ background: cardBg, border: `1px solid ${border}`, borderRadius: 18, padding: 16 }}>
          <div style={{ fontSize: 14, color: fgMuted, marginBottom: 10 }}>Path to Japan — реальный слой</div>
          <div style={{ display: 'grid', gap: 8 }}>
            {realityPreview.map((item: any) => (
              <div key={item.id} style={{ borderRadius: 14, border: `1px solid ${border}`, padding: 12 }}>
                <div style={{ fontSize: 15, color: fg, fontWeight: 600 }}>{item.title}</div>
                <div style={{ fontSize: 13, color: fgMuted, lineHeight: 1.55, marginTop: 4 }}>{item.summary}</div>
              </div>
            ))}
          </div>
        </section>

        <button onClick={() => onNavigate('chat')} style={{ background: isDark ? 'rgba(208,174,128,0.10)' : 'rgba(139,108,66,0.08)', borderRadius: 16, padding: '16px', textAlign: 'left', border: `1px solid ${isDark ? 'rgba(208,174,128,0.18)' : 'rgba(139,108,66,0.12)'}`, cursor: 'pointer' }}>
          <div style={{ fontSize: 15, fontWeight: 600, color: fg }}>Поговорить с Michi</div>
          <div style={{ fontSize: 12, color: fgMuted, marginTop: 4 }}>factual mode + guide mode + следующий шаг</div>
        </button>
      </div>
    </div>
  )
}
