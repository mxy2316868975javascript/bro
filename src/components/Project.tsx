import '../styles/Project.css'
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
      <SwiperSlide key={index} style={{ '--background-img': `url(${item.cover.src})` } as React.CSSProperties}>
        <a className='cover-author' href={item.cover.link} target='_blank'>© {item.cover.author}</a>
        <p className='item-container'>
          {item.icon}
          <span className='item-title'>{item.title}</span>
          <span className='item-description'>{item.description}</span>
          <a className='item-link' href={item.link} target='_blank'>↗</a>
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
