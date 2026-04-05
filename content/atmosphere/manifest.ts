export type VisualLayer = 'real' | 'dream' | 'process'
export type VisualSeason = 'mixed' | 'spring' | 'summer' | 'autumn' | 'winter'
export type VisualMood = 'quiet' | 'dream' | 'urban' | 'sacred' | 'water' | 'mountain' | 'study' | 'night'
export type VisualUsage = 'hero' | 'scene-cover' | 'path-banner' | 'chapter-open' | 'unlock' | 'chat-bg' | 'info-card'

export interface AtmosphereAsset {
  id: string
  src: string
  source_type: 'real_photo' | 'generated_reference' | 'illustration'
  layer: VisualLayer
  season: VisualSeason
  mood: VisualMood
  theme: string
  intensity: 'calm' | 'inspiring' | 'cinematic'
  usage: VisualUsage[]
  text_safe: boolean
}

export const ATMOSPHERE_ASSETS: AtmosphereAsset[] = [
  {
    "id": "real_01",
    "src": "/visuals/real/real-01.webp",
    "source_type": "real_photo",
    "layer": "real",
    "season": "spring",
    "mood": "water",
    "theme": "bridge",
    "intensity": "calm",
    "usage": [
      "scene-cover",
      "chat-bg"
    ],
    "text_safe": true
  },
  {
    "id": "real_02",
    "src": "/visuals/real/real-02.webp",
    "source_type": "real_photo",
    "layer": "real",
    "season": "spring",
    "mood": "quiet",
    "theme": "train",
    "intensity": "calm",
    "usage": [
      "scene-cover",
      "chat-bg"
    ],
    "text_safe": true
  },
  {
    "id": "real_03",
    "src": "/visuals/real/real-03.jpg",
    "source_type": "real_photo",
    "layer": "real",
    "season": "autumn",
    "mood": "sacred",
    "theme": "temple",
    "intensity": "cinematic",
    "usage": [
      "scene-cover",
      "chapter-open"
    ],
    "text_safe": false
  },
  {
    "id": "real_04",
    "src": "/visuals/real/real-04.jpg",
    "source_type": "real_photo",
    "layer": "real",
    "season": "mixed",
    "mood": "urban",
    "theme": "city",
    "intensity": "cinematic",
    "usage": [
      "hero",
      "chat-bg"
    ],
    "text_safe": true
  },
  {
    "id": "real_05",
    "src": "/visuals/real/real-05.jpg",
    "source_type": "real_photo",
    "layer": "real",
    "season": "summer",
    "mood": "water",
    "theme": "river",
    "intensity": "calm",
    "usage": [
      "scene-cover",
      "path-banner"
    ],
    "text_safe": true
  },
  {
    "id": "real_06",
    "src": "/visuals/real/real-06.jpg",
    "source_type": "real_photo",
    "layer": "real",
    "season": "autumn",
    "mood": "sacred",
    "theme": "stone-steps",
    "intensity": "inspiring",
    "usage": [
      "scene-cover",
      "unlock"
    ],
    "text_safe": false
  },
  {
    "id": "real_07",
    "src": "/visuals/real/real-07.jpg",
    "source_type": "real_photo",
    "layer": "real",
    "season": "spring",
    "mood": "quiet",
    "theme": "sakura",
    "intensity": "inspiring",
    "usage": [
      "hero",
      "scene-cover"
    ],
    "text_safe": true
  },
  {
    "id": "real_08",
    "src": "/visuals/real/real-08.jpg",
    "source_type": "real_photo",
    "layer": "real",
    "season": "mixed",
    "mood": "night",
    "theme": "lantern",
    "intensity": "cinematic",
    "usage": [
      "hero",
      "chat-bg"
    ],
    "text_safe": true
  },
  {
    "id": "real_09",
    "src": "/visuals/real/real-09.jpg",
    "source_type": "real_photo",
    "layer": "real",
    "season": "mixed",
    "mood": "sacred",
    "theme": "bamboo",
    "intensity": "calm",
    "usage": [
      "scene-cover",
      "chapter-open"
    ],
    "text_safe": false
  },
  {
    "id": "real_10",
    "src": "/visuals/real/real-10.jpg",
    "source_type": "real_photo",
    "layer": "real",
    "season": "mixed",
    "mood": "water",
    "theme": "bridge",
    "intensity": "calm",
    "usage": [
      "scene-cover",
      "path-banner"
    ],
    "text_safe": true
  },
  {
    "id": "real_11",
    "src": "/visuals/real/real-11.jpg",
    "source_type": "real_photo",
    "layer": "real",
    "season": "winter",
    "mood": "quiet",
    "theme": "mountain",
    "intensity": "inspiring",
    "usage": [
      "chapter-open",
      "unlock"
    ],
    "text_safe": true
  },
  {
    "id": "real_12",
    "src": "/visuals/real/real-12.jpg",
    "source_type": "real_photo",
    "layer": "real",
    "season": "mixed",
    "mood": "urban",
    "theme": "station",
    "intensity": "calm",
    "usage": [
      "scene-cover",
      "chat-bg"
    ],
    "text_safe": true
  },
  {
    "id": "dream_01",
    "src": "/visuals/dream/dream-01.jpg",
    "source_type": "generated_reference",
    "layer": "dream",
    "season": "mixed",
    "mood": "dream",
    "theme": "fuji",
    "intensity": "inspiring",
    "usage": [
      "hero",
      "chapter-open",
      "unlock",
      "onboarding"
    ],
    "text_safe": true
  },
  {
    "id": "dream_02",
    "src": "/visuals/dream/dream-02.jpg",
    "source_type": "generated_reference",
    "layer": "dream",
    "season": "mixed",
    "mood": "dream",
    "theme": "sakura",
    "intensity": "inspiring",
    "usage": [
      "hero",
      "chapter-open",
      "unlock",
      "onboarding"
    ],
    "text_safe": true
  },
  {
    "id": "dream_03",
    "src": "/visuals/dream/dream-03.jpg",
    "source_type": "generated_reference",
    "layer": "dream",
    "season": "mixed",
    "mood": "dream",
    "theme": "notebook",
    "intensity": "inspiring",
    "usage": [
      "hero",
      "chapter-open",
      "unlock",
      "onboarding"
    ],
    "text_safe": true
  },
  {
    "id": "dream_04",
    "src": "/visuals/dream/dream-04.jpg",
    "source_type": "generated_reference",
    "layer": "dream",
    "season": "mixed",
    "mood": "dream",
    "theme": "map",
    "intensity": "inspiring",
    "usage": [
      "hero",
      "chapter-open",
      "unlock",
      "onboarding"
    ],
    "text_safe": true
  },
  {
    "id": "dream_05",
    "src": "/visuals/dream/dream-05.jpg",
    "source_type": "generated_reference",
    "layer": "dream",
    "season": "mixed",
    "mood": "dream",
    "theme": "paper-cut",
    "intensity": "inspiring",
    "usage": [
      "hero",
      "chapter-open",
      "unlock",
      "onboarding"
    ],
    "text_safe": true
  },
  {
    "id": "dream_06",
    "src": "/visuals/dream/dream-06.jpg",
    "source_type": "generated_reference",
    "layer": "dream",
    "season": "mixed",
    "mood": "dream",
    "theme": "journey",
    "intensity": "inspiring",
    "usage": [
      "hero",
      "chapter-open",
      "unlock",
      "onboarding"
    ],
    "text_safe": true
  },
  {
    "id": "dream_07",
    "src": "/visuals/dream/dream-07.jpg",
    "source_type": "generated_reference",
    "layer": "dream",
    "season": "mixed",
    "mood": "dream",
    "theme": "design",
    "intensity": "inspiring",
    "usage": [
      "hero",
      "chapter-open",
      "unlock",
      "onboarding"
    ],
    "text_safe": true
  },
  {
    "id": "dream_08",
    "src": "/visuals/dream/dream-08.jpg",
    "source_type": "generated_reference",
    "layer": "dream",
    "season": "mixed",
    "mood": "dream",
    "theme": "chapter",
    "intensity": "inspiring",
    "usage": [
      "hero",
      "chapter-open",
      "unlock",
      "onboarding"
    ],
    "text_safe": true
  },
  {
    "id": "dream_09",
    "src": "/visuals/dream/dream-09.jpg",
    "source_type": "generated_reference",
    "layer": "dream",
    "season": "mixed",
    "mood": "dream",
    "theme": "hope",
    "intensity": "inspiring",
    "usage": [
      "hero",
      "chapter-open",
      "unlock",
      "onboarding"
    ],
    "text_safe": true
  },
  {
    "id": "dream_10",
    "src": "/visuals/dream/dream-10.jpg",
    "source_type": "generated_reference",
    "layer": "dream",
    "season": "mixed",
    "mood": "dream",
    "theme": "onboarding",
    "intensity": "inspiring",
    "usage": [
      "hero",
      "chapter-open",
      "unlock",
      "onboarding"
    ],
    "text_safe": true
  },
  {
    "id": "process_01",
    "src": "/visuals/process/process-01.jpg",
    "source_type": "generated_reference",
    "layer": "process",
    "season": "mixed",
    "mood": "study",
    "theme": "visa",
    "intensity": "calm",
    "usage": [
      "path-banner",
      "chapter-open",
      "info-card"
    ],
    "text_safe": true
  },
  {
    "id": "process_02",
    "src": "/visuals/process/process-02.jpg",
    "source_type": "generated_reference",
    "layer": "process",
    "season": "mixed",
    "mood": "study",
    "theme": "notebook",
    "intensity": "calm",
    "usage": [
      "path-banner",
      "chapter-open",
      "info-card"
    ],
    "text_safe": true
  },
  {
    "id": "process_03",
    "src": "/visuals/process/process-03.jpg",
    "source_type": "generated_reference",
    "layer": "process",
    "season": "mixed",
    "mood": "study",
    "theme": "map",
    "intensity": "calm",
    "usage": [
      "path-banner",
      "chapter-open",
      "info-card"
    ],
    "text_safe": true
  },
  {
    "id": "process_04",
    "src": "/visuals/process/process-04.jpg",
    "source_type": "generated_reference",
    "layer": "process",
    "season": "mixed",
    "mood": "study",
    "theme": "study-table",
    "intensity": "calm",
    "usage": [
      "path-banner",
      "chapter-open",
      "info-card"
    ],
    "text_safe": true
  },
  {
    "id": "process_05",
    "src": "/visuals/process/process-05.jpg",
    "source_type": "generated_reference",
    "layer": "process",
    "season": "mixed",
    "mood": "study",
    "theme": "documents",
    "intensity": "calm",
    "usage": [
      "path-banner",
      "chapter-open",
      "info-card"
    ],
    "text_safe": true
  },
  {
    "id": "process_06",
    "src": "/visuals/process/process-06.jpg",
    "source_type": "generated_reference",
    "layer": "process",
    "season": "mixed",
    "mood": "study",
    "theme": "planning",
    "intensity": "calm",
    "usage": [
      "path-banner",
      "chapter-open",
      "info-card"
    ],
    "text_safe": true
  },
  {
    "id": "process_07",
    "src": "/visuals/process/process-07.jpg",
    "source_type": "generated_reference",
    "layer": "process",
    "season": "mixed",
    "mood": "study",
    "theme": "path",
    "intensity": "calm",
    "usage": [
      "path-banner",
      "chapter-open",
      "info-card"
    ],
    "text_safe": true
  },
  {
    "id": "process_08",
    "src": "/visuals/process/process-08.jpg",
    "source_type": "generated_reference",
    "layer": "process",
    "season": "mixed",
    "mood": "study",
    "theme": "application",
    "intensity": "calm",
    "usage": [
      "path-banner",
      "chapter-open",
      "info-card"
    ],
    "text_safe": true
  }
] as AtmosphereAsset[]

export function getAssetsByUsage(usage: VisualUsage) {
  return ATMOSPHERE_ASSETS.filter((item) => item.usage.includes(usage))
}

export function getHeroVisual() {
  return getAssetsByUsage('hero')[0] ?? ATMOSPHERE_ASSETS[0]
}

export function getPathBannerVisual() {
  return getAssetsByUsage('path-banner')[0] ?? ATMOSPHERE_ASSETS[0]
}

export function getChatBackdropVisual() {
  return getAssetsByUsage('chat-bg')[0] ?? ATMOSPHERE_ASSETS[0]
}

export function getSceneCoverByTheme(theme?: string) {
  const exact = ATMOSPHERE_ASSETS.find((item) => item.usage.includes('scene-cover') && item.theme === theme)
  return exact ?? getAssetsByUsage('scene-cover')[0] ?? ATMOSPHERE_ASSETS[0]
}

export function getDesignTrackVisual() {
  return ATMOSPHERE_ASSETS.find((item) => item.layer === 'dream' && item.theme === 'design') ?? getHeroVisual()
}
