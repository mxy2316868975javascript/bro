import './components/main.css'
import Header from './components/header/header.jsx'
import Footer from './components/footer/footer.jsx'
import Section from './components/section/section.jsx'
import Project from './components/project/project.jsx'
import Waline from './components/waline/waline.jsx'
import { IntroTyped } from './components/typed/typed.jsx'
import { sectionsInfo } from './components/config.jsx'

function App() {
  // 渲染
  return (
    <main>
      <Header />

      <Section {...sectionsInfo[0]}>
        <Project />
      </Section>

      <Section {...sectionsInfo[1]}>
        <IntroTyped />
      </Section>

      <Section {...sectionsInfo[2]} overwriteHeight='35rem'>
        <Waline />
      </Section>

      <Footer />
    </main>
  )
}

export default App
