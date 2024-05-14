import '../styles/App.css'
import { Header } from './Header'
import { Footer } from './Footer'
import { Section } from './Section'
import { Project } from './Project'
import { Waline } from './Waline'
import { IntroTyped } from './Typed'
import { sectionsInfo } from '../config'

export function App() {
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