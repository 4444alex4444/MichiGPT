import type * as ReactNamespace from 'react'

declare global {
  namespace React {
    export import CSSProperties = ReactNamespace.CSSProperties
  }
}

export {}
