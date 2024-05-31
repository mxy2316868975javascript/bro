import { init } from '@waline/client'
import '@waline/client/style'
import { useEffect } from 'react'

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
  return (
    <div 
      id='waline'
      style={{ scrollbarWidth: 'none' }}
      className='
        w-full h-full p-2 overflow-y-auto
        bg-white dark:bg-zinc-900
      '
    ></div>
  )
}
