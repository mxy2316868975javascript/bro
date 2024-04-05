/**
 * @fileoverview Project component
 */

import './project.css'
import { itemsInfo } from '../config.js'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import { useState, useEffect } from 'react'

export default function Project() {
  // 根据屏幕宽度随时更新 swiper 的 slidesPerView
  const [slidesPerView, setSlidesPerView] = useState(3)
  useEffect(() => {
    function updateSlidesPerView() {
      if (window.innerWidth < 768) {
        setSlidesPerView(1)
      } else if (window.innerWidth < 1200) {
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
      <SwiperSlide key={index} style={{ backgroundImage: `url(${item.cover})` }}>
        <p className='item-title'>{item.title}</p>
        <p className='item-description'>{item.description}</p>
        <a className='item-link' href={item.link} target='_blank'>点击访问 ↗</a>
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
        className="swiper-container" 
        loop={true} 
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }} 
        speed={500}
      >
        {items}
      </Swiper>
  )
}
