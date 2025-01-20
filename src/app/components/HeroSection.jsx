"use client"

import React, { useState } from 'react'
import heroPic from '../../../public/images/hero_pc.jpg'
import Image from 'next/image'
const HeroSection = () => {
  const [scholarshipCount, setScholarshipCount] = useState(1)
  const pricePerScholarship = 1650

  return (
    <section className="relative min-h-screen">
      <div className="absolute inset-0">
        <Image 
          src={heroPic}
          alt="Students on rickshaw" 
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Start your scholarship
            </h1>
            <p className="text-xl mb-8">
              Directly for students in Government Primary Schools throughout Bangladesh
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-xl w-[400px] ml-40">
            <h2 className="text-2xl mb-6">Join the <span className="text-green-500  font-semibold">&#35;alteryouthrevolution</span></h2>
            
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your name"
                className="w-full p-3 border rounded-lg"
              />
              <input
                type="email"
                placeholder="Your email"
                className="w-full p-3 border rounded-lg"
              />
              
              <div className="flex border rounded-lg">
                <select className="p-3 border-r">
                  <option>+88</option>
                </select>
                <input
                  type="tel"
                  placeholder="Your number"
                  className="flex-1 p-3"
                />
              </div>

             <div className=" ">
                <p className="font-semibold">Number of Scholarships</p>
                <div className="flex items-center space-x-3">
                  <button
                    type="button"
                    className=" w-10 h-10 rounded   bg-green-500 text-xl text-white   flex items-center justify-center"
                    onClick={() => setScholarshipCount((prev) => Math.max(1, prev - 1))}
                  >
                    -
                  </button>
                  <span>{scholarshipCount}</span>
                  <button
                    type="button"
                    className="w-10 h-10 rounded   bg-green-500  text-xl text-white flex items-center justify-center"
                    onClick={() => setScholarshipCount((prev) => prev + 1)}
                  >
                    +
                  </button>
                  <span className=" text-2xl font-semibold ml-10 ">
                    BDT {(scholarshipCount * pricePerScholarship).toLocaleString()}
                    <span className="text-sm font-normal  ">/month</span>
                  </span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-green-500 text-white py-3 rounded-lg font-medium hover:bg-emerald-600 transition-colors"
              >
                START NOW
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
