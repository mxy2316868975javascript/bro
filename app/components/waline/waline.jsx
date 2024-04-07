'use client'

import { init } from '@waline/client'
import '@waline/client/style'
import { useEffect } from 'react'
import './waline.css'
import { walineConfig } from '../config.jsx'

export default function Waline() {
  useEffect(() => {
    const waline = init(walineConfig)
    return () => {
      waline.destroy()
    }
  }, [])
  return <div id="waline"></div>
}
