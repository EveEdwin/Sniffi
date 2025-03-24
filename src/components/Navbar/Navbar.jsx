import React from 'react'
import SniffiLogo from "../../assets/Logo/Sniffi Logo.svg"
const Navbar = () => {
  return (
    <div className="flex justify-between font-semi-bold items-center p-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <div className="flex items-center">
        <img src={SniffiLogo} alt="logo" className="h-8 w-28" />
      </div>
      <div className="flex space-x-4 w-1/3 justify-between">
        <a href="#" className="hover:text-[#FE5F62]">HOME</a>
        <a href="#" className="hover:text-[#FE5F62]">SERVICE</a>
        <a href="#" className="hover:text-[#FE5F62]">LEARNING</a>
        <a href="#" className="hover:text-[#FE5F62]">SOCIAL</a>
        <a href="#" className="hover:text-[#FE5F62]">TnC</a>
      </div>
      <div>
        <button className="bg-[#FE5F62] hover:bg-[#FE5F62] text-white py-1 px-8 rounded" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Book Appointment
        </button>
      </div>
    </div>
  )
}

export default Navbar
