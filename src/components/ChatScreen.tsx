'use client'
import { useState } from 'react'
import { UserProfile } from '@/lib/profile'

interface Props {
  profile: UserProfile
  onBack: () => void
  isDark: boolean
}

export default function ChatScreen({ profile, onBack, isDark }: Props) {
  const [input, setInput] = useState('')

  const palette = {
    bg: isDark ? '#11121b' : '#f6f2eb',
    card: isDark ? 'rgba(25,28,40,0.88)' : 'rgba(255,255,255,0.88)',
    border: isDark ? '#2a2d3e' : '#e6ddd0',
    text: isDark ? '#ece7df' : '#2b2925',
    muted: isDark ? '#9a978f' : '#776f65',
    accent: isDark ? '#d0ae80' : '#8b6c42',
  }

  return (
    <div style={{ minHeight: '100dvh', padding: 16, background: palette.bg, color: palette.text }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
        <button onClick={onBack} style={{ background: 'none', border: 'none', fontSize: 24, cursor: 'pointer', color: palette.text }}>←</button>
        <div>
          <div style={{ fontSize: 18, fontWeight: 700 }}>Поговорить с Michi</div>
          <div style={{ fontSize: 12, color: palette.muted }}>Chat layer is being stabilized for v7 build</div>
        </div>
      </div>

      <div style={{ background: palette.card, border: `1px solid ${palette.border}`, borderRadius: 18, padding: 16, lineHeight: 1.6 }}>
        <div style={{ fontSize: 14, marginBottom: 8 }}>Привет, {profile.name || 'друг'}.</div>
        <div style={{ color: palette.muted, marginBottom: 14 }}>
          Этот экран временно упрощён, чтобы стабилизировать сборку v7. Следующим шагом я верну сюда полноценный chat layer поверх новой архитектуры.
        </div>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Спроси про японский, дизайн, вузы или путь в Японию"
          style={{ width: '100%', borderRadius: 14, border: `1px solid ${palette.border}`, padding: '14px 14px', background: 'transparent', color: palette.text, outline: 'none' }}
        />
        <div style={{ marginTop: 12, fontSize: 12, color: palette.muted }}>
          Черновой статус: input сохранён, следующий шаг — вернуть ответы, источники и follow-up chips после стабилизации деплоя.
        </div>
        <button style={{ marginTop: 14, border: 'none', borderRadius: 14, padding: '10px 16px', background: palette.accent, color: '#fff', cursor: 'pointer', fontWeight: 700 }}>
          Скоро здесь снова будет разговор
        </button>
      </div>
    </div>
  )
}
