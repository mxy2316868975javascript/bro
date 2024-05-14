import { init } from '@waline/client'
import '@waline/client/style'
import { useEffect } from 'react'
import '../styles/Waline.css'

export function Waline() {
  useEffect(() => {
    const waline = init({
      el: '#waline',
      path: '/',
      lang: 'zh-CN',
      serverURL: 'https://comment.leafyee.xyz',
      turnstileKey: '0x4AAAAAAAOZ5cnsddyB2fQW',
      emoji: [
        'https://unpkg.com/@waline/emojis@1.2.0/bilibili',
        'https://unpkg.com/@waline/emojis@1.2.0/bmoji',
      ]
    })
    return () => {
      waline!.destroy()
    }
  }, [])
  return <div id="waline"></div>
}
