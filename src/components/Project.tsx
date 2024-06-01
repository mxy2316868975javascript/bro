import { itemsInfo } from '../config'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import { useState, useEffect } from 'react'

export function Project() {
  // 根据屏幕宽度随时更新 swiper 的 slidesPerView
  const [slidesPerView, setSlidesPerView] = useState(3)
  // 添加初始值和监听事件
  useEffect(() => {
    function updateSlidesPerView() {
      if (window.innerWidth < 1000) {
        setSlidesPerView(1)
      } else if (window.innerWidth < 1500) {
        setSlidesPerView(2)
      } else {
        setSlidesPerView(3)
      }
    }
    updateSlidesPerView()
    window.addEventListener('resize', updateSlidesPerView)
    return () => {
      window.removeEventListener('resize', updateSlidesPerView)
    }
  }, [])
  // 生成项目列表
  const items = itemsInfo.map((item, index) => {
    return (
      <SwiperSlide 
        key={index} 
        style={{ '--background-img': `url(${item.cover.src})` } as React.CSSProperties}
        className='
          flex relative overflow-hidden flex-row justify-between items-end text-center
          before:content-[""] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-cover before:bg-center before:-z-10 before:bg-item-cover before:dark:brightness-75 before:hover:scale-105 before:transition
        '
      >
        <a // 图片作者信息
          className='
            absolute inline-block top-1 right-0 pt-1 pb-1 pl-2 pr-2 rounded-full text-xs bg-rose-50 opacity-70 dark:brightness-75 hover:opacity-100 scale-75
          ' 
          href={item.cover.link} 
          target='_blank'
        >© {item.cover.author}</a>
        <p // 项目底栏
          className='
            pl-[0.6rem] h-10 leading-10 w-full text-left bg-white dark:bg-zinc-900 text-rose-950 dark:text-rose-50
          '
        >
          { // 图标
            item.icon
          }
          <span // 标题
            className='ml-2 text-base text-rose-950 dark:text-rose-50 font-bold'
          >{item.title}</span>
          <span // 描述
            className='ml-2 text-sm text-rose-800 dark:text-rose-50 font-bold opacity-75'
          >{item.description}</span>
          <a // 链接
            className='float-right font-base font-bold w-10 h-10 leading-10 pl-2 pr-2 bg-rose-50 dark:bg-zinc-950 text-center hover:bg-rose-500 hover:text-rose-50'  
            href={item.link} 
            target='_blank'
          >↗</a>
        </p>
      </SwiperSlide>
    )
  })
  // 渲染
  return (
      <Swiper
        slidesPerView={slidesPerView}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, FreeMode, Pagination]}
        className='w-full h-full'
        loop={true} 
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }} 
        speed={500}
      >
        {items}
      </Swiper>
  )
}
