"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { FaLocationDot } from "react-icons/fa6";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaUserShield } from "react-icons/fa6";
const communityImages = [
  {
    id: 1,
    title: "Birabo Government Primary School",
    location: "Bholabo, Bangladesh",
    image: "/images/school1.jpeg",
  },
  {
    id: 2,
    title: "Birabo Government Primary School",
    location: "Bholabo, Bangladesh",
    image: "/images/school2.jpeg", // Corrected path and extension
  },
  {
    id: 3,
    title: "Birabo Government Primary School",
    location: "Bholabo, Bangladesh",
    image: "/images/school3.jpeg", // Corrected path and extension
  },
  {
    id: 4,
    title: "Birabo Government Primary School",
    location: "Bholabo, Bangladesh",
    image: "/images/school4.jpeg", // Corrected path and extension
  },
  {
    id: 5,
    title: "Birabo Government Primary School",
    location: "Bholabo, Bangladesh",
    image: "/images/school5.jpeg", // Corrected path and extension
  },
  {
    id: 6,
    title: "Birabo Government Primary School",
    location: "Bholabo, Bangladesh",
    image: "/images/school6.jpeg", // Corrected path and extension
  },
  {
    id: 7,
    title: "Birabo Government Primary School",
    location: "Bholabo, Bangladesh",
    image: "/images/school7.jpeg", // Corrected path and extension
  },
];



const PrimarySchoolSlider = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
            Students from Government Primary Schools Nationwide
          </h2>
        </div>
        <div className="relative">
          <Swiper
            slidesPerView={4}
            //   navigation={true}
            spaceBetween={20}
            pagination={{
              clickable: true,
              // dynamicBullets: true,
            }}
            modules={[]}
            className=""
          >
            {communityImages?.map((community) => (
              <SwiperSlide key={community.id}>
                <div>
                  <div className="relative aspect-[4/4]">
                    <Image
                      src={community.image || "/placeholder.svg"}
                      alt={community.title}
                      fill
                      className="object-cover rounded-lg w-[400px] h-[400px]"
                    />
                  </div>
                  <div>
                    <h2>{community?.title}</h2>
                    <h1 className="flex items-center gap-2">
                      <span className="text-green-500 font-bold">
                        <FaLocationDot />{" "}
                      </span>{" "}
                      {community?.location}
                    </h1>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

       
      </div>
    </section>
  );
};

export default PrimarySchoolSlider;
