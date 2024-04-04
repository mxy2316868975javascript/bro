import './App.css'
import cover from './img/cover.jpg'
import Header from './header/header.jsx'
import Footer from './footer/footer.jsx'
import Section from './section/section.jsx'
import { IntroTyped } from './typed/typed.jsx'

function App() {
  return (
    <main>

      <Header cover={cover} />

      <Section direction='row' title='我的项目( ╯▽╰)' subtitle='这里是小叶子的个人小站~'>
        <div style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '1.2rem',
          gap: '0.5rem',
        }}>
          <p>本站使用 React + Vite 构建, 目前尚未完成</p>
          <p><a href='https://github.com/LeafYeeXYZ'>我的 Github ↗</a></p>
          <p><a href='https://legacy.leafyee.xyz'>旧版网站 ↗</a></p>
          <p>本站总访问量: <span id='SV'></span> (自2024.1.1)</p>
          <script src="https://count.leafyee.xyz/static" data-db="https://count.leafyee.xyz"></script>
        </div>
      </Section>

      <Section direction='row-reverse' title='关于我|ω・）' subtitle='小叶子的自我介绍!'>
        <IntroTyped />
      </Section>

      <Section direction='row' title='留言板(๑￫ܫ￩)' subtitle='可以匿名留言哦~'>
        <iframe src='/comment.html' width='100%' height='100%' frameBorder='' id='waline'></iframe>
      </Section>

      <Footer />

    </main>
  )
}

export default App
