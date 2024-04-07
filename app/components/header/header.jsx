/**
 * @fileoverview Header component
 */

import './header.css'
import { TitleTyped } from '../typed/typed.jsx'
import ThemeSwitcher from './themeswitcher.jsx'
import Image from 'next/image'
import cover from './cover.jpg'

class Header {
  static render() {
    return (
      <header>
        <Image src={cover} alt='cover' className='header-cover' />
        <ThemeSwitcher />
        <p className='header-title'>小叶子的个人小站</p>
        <TitleTyped />
      </header>
    )
  }
}

export default Header.render