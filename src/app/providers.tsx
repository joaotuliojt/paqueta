'use client'
import { getCssText, resetStyles } from '@/theme/stitches.config'
import { useServerInsertedHTML } from 'next/navigation'
import { PropsWithChildren } from 'react'

export default function Providers({ children }: PropsWithChildren) {
  useServerInsertedHTML(() => {
    return (
      <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
    )
  })
  resetStyles()

  return <>{children}</>
}
