import { useRef, useEffect } from 'react'
import Typed from 'typed.js'
import '../styles/Typed.css'

export function IntroTyped() {
  // Create reference to store the DOM element containing the animation
  const introTyped = useRef(null)

  useEffect(() => {
    const typed = new Typed(introTyped.current, { 
      strings: ['一个心理学专业的大学生<br>一个社会自由主义者<br>喜欢漫画 / 动漫 / BJD<br>喜欢水彩 / 板绘 / 设计<br>喜欢草莓 / 鱿鱼 / 抹茶 / 无骨鸡爪<br>对网络技术 / 编程感兴趣<br>主要使用 JS, TS, Go, Rust<br>喜欢一切可爱的人事物<br>致力于成为优秀的心理咨询师'],
      typeSpeed: 70,
      backSpeed: 35,
      smartBackspace: true,
      loop: false,
      contentType: 'html',
      showCursor: false,
      startDelay: 2000,
    })

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

export function TitleTyped() {
  // Create reference to store the DOM element containing the animation
  const titleTyped = useRef(null)

  useEffect(() => {
    const typed = new Typed(titleTyped.current, {
      strings: ['莫听穿林打叶声，何妨吟啸且徐行', '知善知恶是良知，为善去恶是格物'],
      typeSpeed: 70,
      backSpeed: 35,
      smartBackspace: true,
      loop: true,
      loopCount: Infinity,
      backDelay: 5000, 
      contentType: 'html',
      showCursor: false,
    })

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