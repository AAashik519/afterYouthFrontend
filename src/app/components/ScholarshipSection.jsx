"use client"

import React, { useRef, useState } from "react"
import DisabledFather from "../../../public/icons/DisabledFather"
import SvgSingleMother from "../../../public/icons/SingleMother"
import SvgOrphan from "../../../public/icons/Orphan"
import { FaPlay } from "react-icons/fa"
import { IoClose } from "react-icons/io5"

const ScholarshipSection = () => {
  const ScholarshipCards = [
    {
      id: 1,
      image: "/images/ht2.jpeg",
      title: "Are you a teacher? Get Your Students listed on the platform",
      linkMsz: "Download the school app ",
      description: "This is the first card.",
    },
    {
      id: 2,
      image: "/images/person.jpg",
      title: "You can be anywhere in the world",
      linkMsz: "See all scholarships",
      description: "This is the second card.",
    },
    {
      id: 3,
      image: "/images/applicant.jpg",
      title: "While students get closer to their dreams",
      linkMsz: "See all graduates",
      description: "This is the third card.",
    },
  ]

  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef(null)

  const handlePlay = () => {
    setIsPlaying(true)
    // Small delay to ensure DOM is ready
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play().catch((error) => {
          console.log("Video play failed:", error)
        })
      }
    }, 100)
  }

  const handleClose = () => {
    setIsPlaying(false)
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }

  return (
    <div className="my-8">
      <div className="w-[700px] mx-auto justify-center items-center">
        <h2 className="text-[28px] font-semibold text-center">Scholarship Eligibility </h2>
        <p className="text-center px-8 mt-2">
          Only students who are currently enrolled in Government Primary Schools and fall under any of the following
          criteria are eligible to apply for scholarships
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-3 gap-4 mt-8">
        <div
          className="flex gap-2 items-center justify-center h-28 rounded-xl px-2 py-6"
          style={{
            boxShadow:
              "rgba(14, 63, 126, 0.06) 0px 0px 0px 1px, rgba(42, 51, 70, 0.03) 0px 1px 1px -0.5px, rgba(42, 51, 70, 0.04) 0px 2px 2px -1px, rgba(42, 51, 70, 0.04) 0px 3px 3px -1.5px, rgba(42, 51, 70, 0.03) 0px 5px 5px -2.5px, rgba(42, 51, 70, 0.03) 0px 10px 10px -5px, rgba(42, 51, 70, 0.03) 0px 24px 24px -8px",
          }}
        >
          <div className="w-20 p-2">
            <span>
              <DisabledFather />
            </span>
          </div>
          <div>
            <h2 className="text-base font-semibold">Disabled Father</h2>
            <p className="text-[14px]">Student's father is physically unable to work</p>
          </div>
        </div>
        <div
          className="flex gap-2 items-center h-28 rounded-xl px-2 py-6"
          style={{
            boxShadow:
              "rgba(14, 63, 126, 0.06) 0px 0px 0px 1px, rgba(42, 51, 70, 0.03) 0px 1px 1px -0.5px, rgba(42, 51, 70, 0.04) 0px 2px 2px -1px, rgba(42, 51, 70, 0.04) 0px 3px 3px -1.5px, rgba(42, 51, 70, 0.03) 0px 5px 5px -2.5px, rgba(42, 51, 70, 0.03) 0px 10px 10px -5px, rgba(42, 51, 70, 0.03) 0px 24px 24px -8px",
          }}
        >
          <div className="w-20 p-2">
            <span>
              <SvgSingleMother />
            </span>
          </div>
          <div>
            <h2 className="text-base font-semibold">Single Mother</h2>
            <p className="text-[14px]">Student's father is deceased or has abandoned the family</p>
          </div>
        </div>
        <div
          className="flex gap-2 items-center h-28 rounded-xl px-2 py-6"
          style={{
            boxShadow:
              "rgba(14, 63, 126, 0.06) 0px 0px 0px 1px, rgba(42, 51, 70, 0.03) 0px 1px 1px -0.5px, rgba(42, 51, 70, 0.04) 0px 2px 2px -1px, rgba(42, 51, 70, 0.04) 0px 3px 3px -1.5px, rgba(42, 51, 70, 0.03) 0px 5px 5px -2.5px, rgba(42, 51, 70, 0.03) 0px 10px 10px -5px, rgba(42, 51, 70, 0.03) 0px 24px 24px -8px",
          }}
        >
          <div className="w-20 p-2">
            <span>
              <SvgOrphan />
            </span>
          </div>
          <div>
            <h2 className="text-base font-semibold">Orphan</h2>
            <p className="text-[14px]">Both parents are deceased or have abandoned the child</p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
        {ScholarshipCards?.map((card) => (
          <div key={card.id} className="relative group overflow-hidden rounded-lg shadow-lg">
            <div className="w-full h-[450px] overflow-hidden relative">
              <img
                src={card.image || "/placeholder.svg"}
                alt={card.title}
                className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
              />
              {/* Adding a dark overlay with low opacity before hover */}
              <div className="absolute inset-0 bg-black opacity-25"></div>
            </div>
            <div className="absolute top-0 left-0 text-white p-6">
              <h3 className="text-3xl w-[300px] font-semibold">{card.title}</h3>
              <p className="text-sm underline">{card.linkMsz}</p>
            </div>
          </div>
        ))}
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Video Thumbnail and Modal */}
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <img src="/images/ay_video_poster.jpg" alt="Video thumbnail" className="w-full h-full object-cover" />
                {!isPlaying && (
                  <button
                    onClick={handlePlay}
                    className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors group"
                  >
                    <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white/90 group-hover:bg-white transition-colors">
                      <FaPlay className="w-8 h-8 text-gray-900" />
                    </div>
                  </button>
                )}
              </div>

              {/* Video Modal */}
              {isPlaying && (
                <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
                  <div className="relative w-full max-w-4xl">
                    <button onClick={handleClose} className="absolute -top-12 right-0 text-white hover:text-gray-200">
                      <IoClose className="w-8 h-8" />
                    </button>
                    <div className="relative aspect-video">
                      <video ref={videoRef} className="w-full h-full" controls preload="auto">
                        <source src="/videos/ay_explainer.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Content */}
            <div>
              <h2 className="text-4xl font-bold mb-6">The scholarship app</h2>
              <p className="leading-relaxed">
                In Bangladesh, while 98% of children enroll in school, 2 million children drop out to work before
                achieving literacy in order to support their families financially. On the flipside, Bangladesh has a
                diaspora population of 10 million in advanced economies who wish to make an impact on their homeland.
                AlterYouth, imagine Uber for scholarships, is a C2C scholarship app enabling users from around the world
                to start scholarships directly for financially struggling students in Government Primary Schools of
                Bangladesh, through digital banking.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ScholarshipSection

