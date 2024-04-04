/**
 * @fileoverview Header component
 */

import './header.css'
import { TitleTyped } from '../typed/typed.jsx'

class Header {
  static render({ cover }) {
    return (
      <header>
        <p className='header-title'>小叶子的个人小站</p>
        <img src={cover} alt='cover' className='header-cover' />
        <TitleTyped />
      </header>
    )
  }
}

export default Header.render