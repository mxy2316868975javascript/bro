import './App.css'
import cover from './img/cover.jpg'
import Header from './header/header.jsx'
import Footer from './footer/footer.jsx'
import Section from './section/section.jsx'

function App() {
  return (
    <main>

      <Header cover={cover} />

      <Section direction='row'>
        <p>第一段</p>
      </Section>

      <Section direction='row-reverse'>
        <p>第二段</p>
      </Section>

      <Footer />

    </main>
  )
}

export default App
