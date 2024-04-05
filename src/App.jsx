import './App.css'
import cover from './img/cover.jpg'
import Header from './header/header.jsx'
import Footer from './footer/footer.jsx'
import Section from './section/section.jsx'
import Project from './project/project.jsx'
import ThemeSwitcher from './antdesign/themeswitcher.jsx'
import { IntroTyped } from './typed/typed.jsx'
import { sectionsInfo } from './config.jsx'

function App() {
  // 渲染
  return (
    <main>
      <ThemeSwitcher />

      <Header cover={cover} />

      <Section {...sectionsInfo[0]}>
        <Project />
      </Section>

      <Section {...sectionsInfo[1]}>
        <IntroTyped />
      </Section>

      <Section {...sectionsInfo[2]} overwriteHeight='40rem'>
        <iframe src='/comment.html' width='100%' height='100%' frameBorder='' id='waline'></iframe>
      </Section>

      <Footer />
    </main>
  )
}

export default App
