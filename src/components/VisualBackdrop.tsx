'use client'
import { getHeroVisual, getPathVisual } from '@/lib/visuals'

export default function VisualBackdrop({ isDark }: { isDark: boolean }) {
  const hero = getHeroVisual()
  const path = getPathVisual()
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 0, overflow: 'hidden', pointerEvents: 'none' }}>
      {hero?.src && (
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `linear-gradient(180deg, rgba(8,10,18,0.55), rgba(8,10,18,0.82)), url(${hero.src})`,
          backgroundSize: 'cover', backgroundPosition: 'center',
          opacity: isDark ? 0.42 : 0.18, transform: 'scale(1.06)'
        }} />
      )}
      {path?.src && (
        <div style={{
          position: 'absolute', right: '-10%', bottom: '-5%', width: '60%', height: '34%',
          backgroundImage: `linear-gradient(180deg, rgba(17,18,27,0.1), rgba(17,18,27,0.25)), url(${path.src})`,
          backgroundSize: 'cover', backgroundPosition: 'center',
          filter: 'blur(18px)', opacity: isDark ? 0.16 : 0.12, borderRadius: 36
        }} />
      )}
      <div style={{
        position: 'absolute', inset: 0,
        background: isDark
          ? 'radial-gradient(circle at top, rgba(208,174,128,0.12), transparent 35%), linear-gradient(180deg, rgba(8,10,18,0.72), rgba(8,10,18,0.94))'
          : 'radial-gradient(circle at top, rgba(208,174,128,0.16), transparent 35%), linear-gradient(180deg, rgba(246,242,235,0.82), rgba(246,242,235,0.95))'
      }} />
    </div>
  )
}
