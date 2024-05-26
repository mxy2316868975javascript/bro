import '../styles/Header.css'
import { TitleTyped } from './Typed'
import { ThemeSwitcher } from './ThemeSwitcher'
import { GithubFilled } from '@ant-design/icons'

export function Header() {

  return (
    <header>
      <img src='/covers/cover.jpg' alt='cover' className='header-cover' />
      <ThemeSwitcher />
      <a href='https://github.com/LeafYeeXYZ' className='header-github' target='_blank'>
        <GithubFilled />
      </a>
      <p className='header-title'>小叶子的个人小站</p>
      <TitleTyped />
    </header>
  )
}