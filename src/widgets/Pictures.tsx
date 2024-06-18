import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import { picsList } from '../config'
import { useState, useEffect } from 'react'

export function Pictures() {

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

  const pics = picsList.map((pic, index) => {
    return (
      <SwiperSlide 
        key={index}
        className='w-full h-full p-4 bg-white dark:bg-zinc-900'
      >
        <img 
          src={pic} 
          className='object-cover w-full h-full rounded-2xl border-solid border-4 border-rose-950 dark:border-rose-50 hover:scale-[1.02] shadow-lg dark:brightness-75'
        />
      </SwiperSlide>
    )
  })
  pics.sort(() => Math.random() - 0.5)

  return (
    <>
      <Swiper
        slidesPerView={slidesPerView}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        speed={500}
        loop={true}
        className='w-full h-full relative'
      >
        {pics}
      </Swiper>
    </>
  )
}