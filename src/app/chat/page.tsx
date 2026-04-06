'use client'
import { useEffect, useMemo, useState } from 'react'
import ChatScreen from '@/components/ChatScreen'
import { loadProfile } from '@/lib/profile'

export default function ChatPage() {
  const profile = useMemo(() => loadProfile(), [])
  const [initialPrompt, setInitialPrompt] = useState<string | undefined>(undefined)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const q = params.get('q') ?? undefined
    setInitialPrompt(q)
  }, [])

  return <ChatScreen profile={profile} onBack={() => history.back()} isDark={false} initialPrompt={initialPrompt} />
}
