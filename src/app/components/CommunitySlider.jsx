'use client'

import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const communityImages = [
  {
    id: 1,
    title: "Community-1",
    image: "/images/community_1.jpg",
  },
  {
    id: 2,
    title: "Community-2",
    image: "/images/community_2.jpg",
  },
  {
    id: 3,
    title: "Community-3",
    image: "/images/community_3.jpg",
  },
  {
    id: 4,
    title: "Community-4",
    image: "/images/community_4.jpg",
  },
  {
    id: 5,
    title: "Community-5",
    image: "/images/community_5.jpg",
  },
  {
    id: 6,
    title: "Community-6",
    image: "/images/community_6.jpg",
  },
  {
    id: 7,
    title: "Community-7",
    image: "/images/community_7.jpg",
  },
]

const CommunitySlider = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="  px-4 sm:px-6 lg:px-8">
      <div className='max-w-6xl mx-auto'>
      <h2 className="text-3xl font-bold mb-3">Community Impact</h2>
        <p className=" mb-8 max-w-3xl">
          Every scholarship begins with shipping a mobile phone to the parent of
          the student. Then they create their own mobile bank account using that
          phone, to start receiving their child's scholarships directly, every
          month.
        </p>
      </div>
        
        <div className="relative ">
          <Swiper
            slidesPerView={4}
            // spaceBetween={30}
            navigation={true}
            pagination={{
              clickable: true,
              dynamicBullets: true
            }}
            modules={[Navigation, Pagination]}
            className=" "
          >
            {communityImages.map((community) => (
              <SwiperSlide key={community.id}>
                <div className="relative aspect-[4/4]">
                  <Image 
                    src={community.image || "/placeholder.svg"} 
                    alt={community.title}
                    fill
                    className="object-cover rounded-lg w-[400px]"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Add required CSS for Swiper */}
   
    </section>
  )
}

export default CommunitySlider

