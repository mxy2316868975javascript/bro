import { Header } from './Header'
import { Footer } from './Footer'
import { Section } from './Section'
import { Project } from './Project'
import { Waline } from '../widgets/Waline'
import { IntroTyped } from '../widgets/Typed'
import { Pictures } from '../widgets/Pictures'
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

      <Section {...sectionsInfo[2]}>
        <Pictures />
      </Section>

      <Section {...sectionsInfo[3]}>
        <Waline />
      </Section>

      <Footer />
    </main>
  )
}