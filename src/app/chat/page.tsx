'use client'
import { useMemo } from 'react'
import { useSearchParams } from 'next/navigation'
import ChatScreen from '@/components/ChatScreen'
import { loadProfile } from '@/lib/profile'

export default function ChatPage() {
  const profile = useMemo(() => loadProfile(), [])
  const searchParams = useSearchParams()
  const initialPrompt = searchParams.get('q') ?? undefined

  return <ChatScreen profile={profile} onBack={() => history.back()} isDark={false} initialPrompt={initialPrompt} />
}
