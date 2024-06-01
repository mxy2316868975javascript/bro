import { TitleTyped } from '../widgets/Typed'
import { ThemeSwitcher } from '../widgets/ThemeSwitcher'
import { GithubFilled } from '@ant-design/icons'

export function Header() {

  return (
    <header
      className='
        relative w-full h-dvh pb-4
      '
    >
      <img 
        src='/covers/cover.jpg' 
        alt='cover' 
        className='absolute w-full h-full object-cover -z-10 brightness-100 dark:brightness-75'
      />
      <ThemeSwitcher />
      <a
        href='https://github.com/LeafYeeXYZ'
        className='
          float-right sticky top-2 right-4 bottom-24
          bg-rose-50 dark:bg-zinc-950
          pt-2 pb-2 pl-4 pr-4
          rounded-full text-rose-950 dark:text-rose-50
          hover:scale-[1.03] active:scale-[0.97]
        '
        target='_blank'
      >
        <GithubFilled />
      </a>
      <p
        className='w-full text-center text-white font-bold pt-[40vh] pb-[2vh] text-4xl sm:text-4xl md:text-5xl'
      >小叶子的个人小站</p>
      <TitleTyped />
    </header>
  )
}