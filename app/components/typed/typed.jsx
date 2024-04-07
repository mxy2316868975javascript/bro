'use client'

import { useRef, useEffect } from 'react'
import Typed from 'typed.js'
import './typed.css'
import { introTypedConfig, titleTypedConfig } from '../config.jsx'

function IntroTyped() {
  // Create reference to store the DOM element containing the animation
  const introTyped = useRef(null)

  useEffect(() => {
    const typed = new Typed(introTyped.current, introTypedConfig)

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy()
    }
  }, [])

  return (
    <div id='intro-typed'>
      <span ref={introTyped}></span>
    </div>
  )
}

function TitleTyped() {
  // Create reference to store the DOM element containing the animation
  const titleTyped = useRef(null)

  useEffect(() => {
    const typed = new Typed(titleTyped.current, titleTypedConfig)

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy()
    }
  }, [])

  return (
    <div id='title-typed'>
      <span ref={titleTyped}></span>
    </div>
  )
}

export { IntroTyped, TitleTyped }