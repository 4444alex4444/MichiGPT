'use client'
import { useEffect, useState } from 'react'
import HomeScreen from '@/components/HomeScreen'
import SceneScreen from '@/components/SceneScreen'
import PathScreen from '@/components/PathScreen'
import ChatScreen from '@/components/ChatScreen'
import SettingsScreen from '@/components/SettingsScreen'
import VisualBackdrop from '@/components/VisualBackdrop'
import { loadProfile, UserProfile } from '@/lib/profile'

export type Screen = 'home' | 'scene' | 'path' | 'chat' | 'settings'

export default function App() {
  const [screen, setScreen] = useState<Screen>('home')
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const p = loadProfile()
    setProfile(p)
    const hour = new Date().getHours()
    setIsDark(hour >= 20 || hour < 7)
    if (typeof window !== 'undefined' && (window as any).Telegram?.WebApp) {
      const tg = (window as any).Telegram.WebApp
      tg.ready()
      tg.expand()
    }
  }, [])

  const refreshProfile = () => setProfile(loadProfile())
  if (!profile) return <Loader isDark={isDark} />

  return (
    <div style={{ minHeight: '100dvh', position: 'relative', color: isDark ? '#ece7df' : '#2b2925' }}>
      <VisualBackdrop isDark={isDark} />
      <div style={{ position: 'relative', zIndex: 1 }}>
        {screen === 'home' && <HomeScreen profile={profile} onNavigate={setScreen} isDark={isDark} />}
        {screen === 'scene' && <SceneScreen profile={profile} onBack={() => setScreen('home')} onProfileUpdate={refreshProfile} isDark={isDark} />}
        {screen === 'path' && <PathScreen profile={profile} onBack={() => setScreen('home')} onProfileUpdate={refreshProfile} isDark={isDark} />}
        {screen === 'chat' && <ChatScreen profile={profile} onBack={() => setScreen('home')} isDark={isDark} />}
        {screen === 'settings' && <SettingsScreen profile={profile} onBack={() => setScreen('home')} onProfileUpdate={refreshProfile} isDark={isDark} />}
        {screen === 'home' && <BottomNav current={screen} onNavigate={setScreen} isDark={isDark} />}
      </div>
    </div>
  )
}

function BottomNav({ current, onNavigate, isDark }: { current: Screen; onNavigate: (s: Screen) => void; isDark: boolean }) {
  const bg = isDark ? 'rgba(18,20,31,0.88)' : 'rgba(255,255,255,0.78)'
  const border = isDark ? '#2c3042' : '#eadfce'
  const items: { id: Screen; label: string; emoji: string }[] = [
    { id: 'home', label: 'Сегодня', emoji: '🌙' },
    { id: 'path', label: 'Путь', emoji: '🗺' },
    { id: 'chat', label: 'Michi', emoji: '🐱' },
    { id: 'settings', label: 'Настройки', emoji: '⚙' },
  ]
  return (
    <nav style={{ position: 'fixed', bottom: 0, left: 0, right: 0, display: 'flex', padding: '8px 0 max(8px, env(safe-area-inset-bottom))', background: bg, borderTop: `1px solid ${border}`, backdropFilter: 'blur(12px)' }}>
      {items.map((item) => (
        <button key={item.id} onClick={() => onNavigate(item.id)} style={{
          flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2,
          background: 'none', border: 'none', cursor: 'pointer',
          color: current === item.id ? (isDark ? '#d0ae80' : '#8b6c42') : (isDark ? '#7d7a75' : '#9a9187'),
          fontSize: 10, padding: '4px 0',
        }}>
          <span style={{ fontSize: 20 }}>{item.emoji}</span>
          {item.label}
        </button>
      ))}
    </nav>
  )
}

function Loader({ isDark }: { isDark: boolean }) {
  return (
    <div style={{ minHeight: '100dvh', display: 'grid', placeItems: 'center', background: isDark ? '#11121b' : '#f6f2eb' }}>
      <div style={{ textAlign: 'center', color: isDark ? '#9a978f' : '#776f65' }}>
        <div style={{ fontSize: 46, marginBottom: 8 }}>🐱</div>
        <div>Michi готовится…</div>
      </div>
    </div>
  )
}
