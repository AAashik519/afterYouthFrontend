import React from 'react'
import SvgGoogle from '../../../public/icons/Google'
const AssociatationSection = () => {
   
  return (
    <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-medium text-center mb-16">In Association With</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 items-center">
        {/* UNDP */}
        <div className="flex items-center text-center space-y-4">
          <div className="h-32 flex items-center">
            <img
              src="/images/undp.jpg"
              alt="UNDP Logo"
              className="h-[120px] w-auto object-contain"
            />
          </div>
          <p className="text-sm font-medium">
            "Asia Pacific
            <br />
            SDG Enterprise Award"
          </p>
        </div>

        {/* Expo Live */}
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="h-32 flex items-center">
            <img
              src="/images/expo.png"
              alt="Expo Live Logo"
              className="h-[80px] w-auto object-contain"
            />
          </div>
          <p className="text-sm">
            An Expo 2020
            <br />
            Dubai Initiative
          </p>
        </div>

        {/* Google */}
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="h-32 flex items-center">
            <img
              src="/images/expo.png"
              alt="Google Logo"
              className="h-[80px] w-auto object-contain"
            />
            {/* <span className="w-[100px]"><SvgGoogle /></span> */}
          </div>
          <p className="text-sm">Winner of Google Business Group Stories</p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default AssociatationSection
