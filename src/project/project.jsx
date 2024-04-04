/**
 * @fileoverview Project component
 */

import './project.css'
import { itemsInfo } from '../config.js'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Pagination } from 'swiper/modules'
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
    // 临时随机颜色区分一下
    // 如果颜色太深，就换一个
    let randomColor = [0x00, 0x00, 0x00]
    while (randomColor[0] < 0xa0 || randomColor[1] < 0xa0 || randomColor[2] < 0xa0) {
      randomColor = randomColor.map(() => Math.floor(Math.random() * 0xff))
    }
    randomColor = `rgb(${randomColor.join(',')})`

    return (
      <SwiperSlide key={index} style={{ backgroundColor: randomColor, backgroundImage: `url(${item.cover})` }}>
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
        modules={[FreeMode, Pagination]}
        className="swiper-container" 
      >
        {items}
      </Swiper>
  )
}
