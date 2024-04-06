import './App.css'
import cover from './img/cover.jpg'
import Header from './header/header.jsx'
import Footer from './footer/footer.jsx'
import Section from './section/section.jsx'
import Project from './project/project.jsx'
import Waline from './waline/waline.jsx'
import { IntroTyped } from './typed/typed.jsx'
import { sectionsInfo } from './config.jsx'

function App() {
  // 渲染
  return (
    <main>
      <Header cover={cover} />

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
