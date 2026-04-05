'use client'
import { useMemo, useState } from 'react'
import { UserProfile, addPathInterest } from '@/lib/profile'
import pathCards, { PathCard, PathCategory } from '../../content/path_cards'
import realityCards from '../../content/reality_cards'
import designJapanese from '../../content/design_japanese'
import { getPathBannerVisual } from '@/lib/visuals'

interface Props {
  profile: UserProfile
  onBack: () => void
  onProfileUpdate: () => void
  isDark: boolean
}

const CATEGORY_LABELS: Record<PathCategory, string> = {
  grants: '🎓 Гранты', language: '📖 Язык', university: '🏛 Университеты', visa: '📄 Виза',
  daily_life: '🏠 Жизнь', design: '✏️ Дизайн', community: '👥 Среда',
}

export default function PathScreen({ profile, onBack, onProfileUpdate, isDark }: Props) {
  const [activeCard, setActiveCard] = useState<PathCard | null>(null)
  const [tab, setTab] = useState<'cards'|'reality'|'design'>('cards')
  const [filter, setFilter] = useState<PathCategory | null>(null)

  const fg = isDark ? '#e8e6df' : '#2a2825'
  const fgMuted = isDark ? '#9a978f' : '#7d7469'
  const cardBg = isDark ? 'rgba(21,23,34,0.82)' : 'rgba(255,255,255,0.82)'
  const accent = isDark ? '#d0ae80' : '#8b6c42'
  const border = isDark ? '#2a2d3e' : '#e8e1d7'
  const pathVisual = getPathBannerVisual()

  const displayCards = useMemo(() => filter ? pathCards.filter(c => c.category === filter) : pathCards, [filter])

  function openCard(card: PathCard) {
    addPathInterest(card.category)
    onProfileUpdate()
    setActiveCard(card)
  }

  if (activeCard) {
    return (
      <div style={{ minHeight: '100dvh', paddingBottom: 36 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '16px 18px' }}>
          <button onClick={() => setActiveCard(null)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 22, color: fg }}>←</button>
          <div style={{ fontSize: 12, color: fgMuted }}>{CATEGORY_LABELS[activeCard.category]}</div>
        </div>
        <div style={{ padding: '0 18px' }}>
          <div style={{ fontSize: 25, lineHeight: 1.25, color: fg, fontWeight: 700, marginBottom: 18 }}>{activeCard.title}</div>
          {[['Суть', activeCard.summary], ['Практически', activeCard.practical_tip], ['Шаг сегодня', activeCard.small_step], ['Michi note', activeCard.michi_note]].map(([label, value], i) => (
            <div key={label} style={{ background: cardBg, border: `1px solid ${border}`, borderRadius: 18, padding: 16, marginBottom: 12 }}>
              <div style={{ fontSize: 12, color: i === 2 ? accent : fgMuted, marginBottom: 8, letterSpacing: '0.05em' }}>{label}</div>
              <div style={{ fontSize: 14, color: fg, lineHeight: 1.7 }}>{value}</div>
            </div>
          ))}
          {activeCard.official_link && <a href={activeCard.official_link} target="_blank" rel="noreferrer" style={{ display: 'inline-block', marginTop: 8, color: accent }}>Открыть официальный источник ↗</a>}
        </div>
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100dvh', paddingBottom: 36 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '16px 18px' }}>
        <button onClick={onBack} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 22, color: fg }}>←</button>
        <div>
          <div style={{ fontSize: 18, color: fg, fontWeight: 700 }}>Path to Japan</div>
          <div style={{ fontSize: 12, color: fgMuted }}>не бюрократия, а путь, который становится понятнее</div>
        </div>
      </div>

      <div style={{ padding: '0 18px 12px' }}>
        <div style={{ position: 'relative', borderRadius: 22, overflow: 'hidden', border: `1px solid ${border}`, background: cardBg }}>
          {pathVisual?.src && <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(180deg, rgba(12,14,20,0.16), rgba(12,14,20,0.58)), url(${pathVisual.src})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.82 }} />}
          <div style={{ position: 'relative', zIndex: 1, padding: 18 }}>
            <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.75)' }}>Process Japan</div>
            <div style={{ fontSize: 22, lineHeight: 1.3, color: '#fff', fontWeight: 700, maxWidth: 360, marginTop: 6 }}>Мечта становится реальнее, когда у неё появляется карта.</div>
          </div>
        </div>
      </div>

      <div style={{ padding: '0 18px 12px', display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {(['cards','reality','design'] as const).map(item => (
          <button key={item} onClick={() => setTab(item)} style={{ borderRadius: 999, padding: '8px 12px', border: `1px solid ${border}`, background: tab === item ? accent : cardBg, color: tab === item ? '#fff' : fg, cursor: 'pointer' }}>
            {item === 'cards' ? 'Карты пути' : item === 'reality' ? 'Reality cards' : 'Design Japanese'}
          </button>
        ))}
      </div>

      {tab === 'cards' && (
        <>
          <div style={{ padding: '0 18px 12px', display: 'flex', gap: 8, overflowX: 'auto' }}>
            <button onClick={() => setFilter(null)} style={{ borderRadius: 999, padding: '8px 12px', border: `1px solid ${border}`, background: filter === null ? accent : cardBg, color: filter === null ? '#fff' : fg, cursor: 'pointer' }}>Все</button>
            {(Object.keys(CATEGORY_LABELS) as PathCategory[]).map(cat => (
              <button key={cat} onClick={() => setFilter(cat)} style={{ borderRadius: 999, padding: '8px 12px', border: `1px solid ${border}`, background: filter === cat ? accent : cardBg, color: filter === cat ? '#fff' : fg, cursor: 'pointer', whiteSpace: 'nowrap' }}>{CATEGORY_LABELS[cat]}</button>
            ))}
          </div>
          <div style={{ padding: '0 18px', display: 'grid', gap: 10 }}>
            {displayCards.map(card => (
              <button key={card.id} onClick={() => openCard(card)} style={{ textAlign: 'left', background: cardBg, border: `1px solid ${border}`, borderRadius: 18, padding: 16, cursor: 'pointer' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: 10 }}>
                  <div style={{ fontSize: 12, color: accent }}>{CATEGORY_LABELS[card.category]}</div>
                  <div style={{ fontSize: 11, color: fgMuted }}>{card.horizon === 'now' ? 'сейчас' : card.horizon === 'one_year' ? 'через год' : 'долгосрочно'}</div>
                </div>
                <div style={{ fontSize: 16, color: fg, fontWeight: 700, marginTop: 6 }}>{card.title}</div>
                <div style={{ fontSize: 13, color: fgMuted, lineHeight: 1.55, marginTop: 6 }}>{card.summary}</div>
              </button>
            ))}
          </div>
        </>
      )}

      {tab === 'reality' && (
        <div style={{ padding: '0 18px', display: 'grid', gap: 10 }}>
          {realityCards.map((item: any) => (
            <div key={item.id} style={{ background: cardBg, border: `1px solid ${border}`, borderRadius: 18, padding: 16 }}>
              <div style={{ fontSize: 12, color: accent }}>{item.topic}</div>
              <div style={{ fontSize: 16, color: fg, fontWeight: 700, marginTop: 6 }}>{item.title}</div>
              <div style={{ fontSize: 13, color: fgMuted, lineHeight: 1.6, marginTop: 6 }}>{item.summary}</div>
            </div>
          ))}
        </div>
      )}

      {tab === 'design' && (
        <div style={{ padding: '0 18px', display: 'grid', gap: 10 }}>
          {designJapanese.map((item: any) => (
            <div key={item.id} style={{ background: cardBg, border: `1px solid ${border}`, borderRadius: 18, padding: 16 }}>
              <div style={{ fontSize: 18, color: fg, fontWeight: 700 }}>{item.jp}</div>
              <div style={{ fontSize: 12, color: fgMuted, marginTop: 2 }}>{item.reading} · {item.en}</div>
              <div style={{ fontSize: 13, color: fg, lineHeight: 1.6, marginTop: 8 }}>{item.use}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
