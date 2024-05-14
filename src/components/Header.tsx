import '../styles/Header.css'
import { TitleTyped } from './Typed'
import { ThemeSwitcher } from './ThemeSwitcher'
import cover from '../images/cover.jpg'

export function Header() {

  return (
    <header>
      <img src={cover} alt='cover' className='header-cover' />
      <ThemeSwitcher />
      <p className='header-title'>小叶子的个人小站</p>
      <TitleTyped />
    </header>
  )
}