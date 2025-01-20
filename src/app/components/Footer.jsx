import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-gray-50 py-8">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between  ">
        <div className="mb-4 md:mb-0">
          <h2 className="text-lg font-bold mb-2">Learn About AlterYouth</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline ">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-sm ">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-sm">
                How It works
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-sm">
                Scholarship Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-sm">
                Get the app
              </a>
            </li>
          </ul>
        </div>
     
        <div className="flex items-end space-x-4 mt-4 md:mt-0 text-sm">
          <a href="#" className="hover:underline ">
            Towards a literate Bangladesh
          </a>
          <a href="#" className="hover:underline">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="hover:underline">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    <hr className="my-5 bg-gray-800" />
      <div className="flex justify-between items-center" >
         <div>
         <p className="text-sm text-gray-600 mb-2">© 2025 AlterYouth Limited</p>
          <a href="#" className="hover:underline">
            Terms of Service
          </a>
        
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
         </div>
          <div className="flex items-center gap-6">
            <span><FaFacebookF /></span>
            <span><FaInstagram /></span>
          </div>
        </div>
    </div>
  </footer>
  )
}

export default Footer
