'use client'
import { useMemo } from 'react'
import ChatScreen from '@/components/ChatScreen'
import { loadProfile } from '@/lib/profile'

export default function ChatPage() {
  const profile = useMemo(() => loadProfile(), [])
  return <ChatScreen profile={profile} onBack={() => history.back()} isDark={false} />
}
