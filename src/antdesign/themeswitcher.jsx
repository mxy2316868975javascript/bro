/**
 * @fileoverview 主题切换组件
 */

import { Switch, ConfigProvider } from 'antd'
import { SunFilled, MoonFilled } from '@ant-design/icons'
import './themeswitcher.css'
import { useState, useEffect } from 'react'

function ThemeSwitcher() {
  // 设置主题切换按钮颜色
  const [themeBtnColor, setThemeBtnColor] = useState('#fff0f0')
  // 主题切换事件处理函数
  const handleThemeChange = (checked) => {
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
      document.querySelector('.theme-switch').click()  
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
        className='theme-switch' 
        checkedChildren={<SunFilled />}
        unCheckedChildren={<MoonFilled />}
        defaultChecked 
        onChange={handleThemeChange}
      />
    </ConfigProvider>
  )
}

export default ThemeSwitcher