import { TitleTyped } from '../widgets/Typed'
import { Switch, ConfigProvider } from 'antd'
import { SunFilled, MoonFilled, GithubFilled } from '@ant-design/icons'
import { useState, useEffect, useRef } from 'react'

function ThemeSwitcher() {
  // 主题按钮
  const button = useRef<HTMLButtonElement>(null)
  // 设置主题切换按钮颜色
  const [themeBtnColor, setThemeBtnColor] = useState<string>('#fff0f0')
  // 主题切换事件处理函数
  const handleThemeChange = (checked: boolean) => {
    const htmlClasses = document.documentElement.classList
    if (checked) {
      setThemeBtnColor('#FFD700') // 设置为亮色
      htmlClasses.remove('dark')
    } else {
      setThemeBtnColor('#F18F01') // 设置为暗色
      htmlClasses.add('dark')
    }
  }
  // 如果系统是暗色模式，则点一下按钮
  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      button.current!.click() 
    }
  }, [])
  // 渲染
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#F18F01', /* 亮色背景颜色 */
          colorPrimaryHover: '#D16F00', /* 亮色背景颜色 (hover) */
          colorTextQuaternary: '#833500', /* 暗色背景颜色 */
          colorTextTertiary: '#631500', /* 暗色背景颜色 (hover) */
        },
        components: {
          Switch: {
            handleBg: themeBtnColor,
          },
        },
      }}
    >
      <Switch
        className='sticky top-4 left-4 bottom-24' 
        checkedChildren={<SunFilled />}
        unCheckedChildren={<MoonFilled />}
        defaultChecked 
        onChange={handleThemeChange} 
        ref={button}
      />
    </ConfigProvider>
  )
}

function Cover() {
  return (
    <div className='absolute w-full h-full -z-10 dark:brightness-75'>
      <img 
        src='/covers/cover.jpg' 
        className='absolute w-full h-full object-cover' 
      />  
    </div>
  )
}

function GithubButton() {
  return (
    <a
      href='https://github.com/LeafYeeXYZ'
      className='
        float-right sticky top-2 right-3 bottom-24
        bg-orange-100 dark:bg-zinc-950
        pt-1 pb-1 pl-4 pr-4 border-2 border-orange-900 dark:border-black
        rounded-full text-orange-900 dark:text-orange-50
        hover:scale-[1.03] active:scale-[0.97]
      '
      target='_blank'
    >
      <GithubFilled />
    </a>
  )
}

function MainTitle() {
  return (
    <p
      className='
        w-full text-center text-white font-bold pt-[40vh] pb-[2vh] text-4xl sm:text-4xl md:text-5xl
      '
    >小叶子的个人小站</p>
  )
}

export function Header() {
  return (
    <header
      className='
        relative w-full h-dvh pb-4
      '
    >
      <Cover />
      <ThemeSwitcher />
      <GithubButton />
      <MainTitle />
      <TitleTyped />
    </header>
  )
}