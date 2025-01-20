import React from 'react'
import Image from 'next/image'
import appGraduation from '../../../public/images/app_graduation.png'
import appScholarShip from '../../../public/images/app_scholarship.jpg'
import appSchool from '../../../public/images/app_school.png'
 
import appStore from '../../../public/icons/appstore_small.svg'
import playStore from '../../../public/icons/playstore_small.svg'
const FeatureSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4">The Uber for Scholarships</h2>
        <p className="text-center   mb-4 max-w-xl   mx-auto">
          A platform connecting the world with financially struggling students in Government Primary Schools of Bangladesh
        </p>

        <div className="grid md:grid-cols-3  ">
          {/* App Store Buttons */}
          <div className="flex justify-center gap-4 md:col-span-3 mb-10">
            <a href="#" className="w-40">
              <Image src={playStore} alt="Download on App Store" width={140} height={53} />
            </a>
            <a href="#" className="w-40">
              <Image src={appStore} alt="Get it on Google Play" width={140} height={53} />
            </a>
          </div>

          {/* Feature Cards */}
          <div className="text-center w-[400px] ">
            <div className="relative h-[400px] w-[400px] mb-6">
              <Image 
                src={appSchool}
                alt="Transfer directly"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Transfer directly</h3>
            <p className="text-sm text-center w-[300px] mx-auto">
              Your scholarship is transferred directly to your student's family on their mobile bank account.
            </p>
          </div>

          <div className="text-center  w-[400px]">
            <div className="relative h-[400px] mb-6  w-[400px]">
              <Image 
                src={appScholarShip}
                alt="Get school reports"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Get school reports</h3>
            <p className="text-sm text-center w-[350px] mx-auto ">
              View attendance data and report cards from your student's school, until completion of Class 5.
            </p>
          </div>

          <div className="text-center  w-[400px]">
            <div className="relative h-[400px]  w-[400px] mb-6">
              <Image 
                src={appSchool}
                alt="Ensure a literate citizen"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Ensure a literate citizen</h3>
            <p className="text-sm text-center w-[350px] mx-auto">
              Your scholarship continues until completion of class 5, when your student achieves literacy.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeatureSection
