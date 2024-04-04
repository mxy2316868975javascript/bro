import { useEffect } from 'react'
import './App.css'
import cover from './img/cover.jpg'
import Header from './header/header.jsx'
import Footer from './footer/footer.jsx'
import Section from './section/section.jsx'
import Project from './project/project.jsx'
import { IntroTyped } from './typed/typed.jsx'
import { denoCountURL, sectionsInfo } from './config.js'

function App() {
  // 加载 DenoCount
  useEffect(() => {
    // 创建 script 标签
    const script = document.createElement('script')
    // 设置属性
    script.src = `${denoCountURL}/static`
    script.defer = true
    script.dataset.db = denoCountURL
    // 添加到 body
    document.body.appendChild(script)
    // 卸载
    return () => {
      document.body.removeChild(script)
    }
  }, [])
  // 渲染
  return (
    <main>
      <Header cover={cover} />

      <Section direction={sectionsInfo[0].direction} title={sectionsInfo[0].title} subtitle={sectionsInfo[0].subtitle}>
        <Project />
      </Section>

      <Section direction={sectionsInfo[1].direction} title={sectionsInfo[1].title} subtitle={sectionsInfo[1].subtitle}>
        <IntroTyped />
      </Section>

      <Section direction={sectionsInfo[2].direction} title={sectionsInfo[2].title} subtitle={sectionsInfo[2].subtitle}>
        <iframe src='/comment.html' width='100%' height='100%' frameBorder='' id='waline'></iframe>
      </Section>

      <Footer />
    </main>
  )
}

export default App
