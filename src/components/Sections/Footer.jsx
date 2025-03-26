import React from 'react'
import SniffiLogo from "../../assets/Logo/Sniffi Logo.svg"
import FacebookLogo from "../../assets/Logo/Icons/Facebook Icons.svg"
import XLogo from "../../assets/Logo/Icons/X Icons.svg"
import LinkedInLogo from "../../assets/Logo//Icons/LinkedIn Icons.svg"
import YoutubeLogo from "../../assets/Logo/Icons/Youtube Icons.svg"

import SniffiLogoWhite from "../../assets/Logo/Sniffi Logo White.svg"

const Footer = () => {
  return (
    <div className='bg-[#3F3D56] flex p-4 pt-10 pb-10' style={{ fontFamily: 'Poppins, sans-serif' }}>
      <div className='flex justify-between items-start w-full'>
        <div className='w-1/3 text-center'>
            <div><img src={SniffiLogoWhite} alt="logo" className="h-8 w-28"></img></div><br></br>
            <div className='text-white text-justify'><span>At Sniffi, we are dedicated to providing top-notch veterinary care with love and compassion. From routine check-ups to emergency treatments, we ensure your furry companions get the best care possible.</span></div>
        </div>
        <div className='w-1/3 flex flex-col text-left ml-40'>
            <h3 className='font-bold text-white'>QUICK LINKS</h3>
            <br></br>
            <a href="#" className="text-white hover:underline hover:animate-pulse transition duration-500 ease-in-out">HOME</a>
            <a href="#" className="text-white hover:underline hover:animate-pulse transition duration-500 ease-in-out">SERVICE</a>
            <a href="#" className="text-white hover:underline hover:animate-pulse transition duration-500 ease-in-out">LEARNING</a>
            <a href="#" className="text-white hover:underline hover:animate-pulse transition duration-500 ease-in-out">SOCIAL</a>
        </div>
        <div className='w-1/3 text-left'>
            <h3 className='font-bold text-white'>FOLLOW US</h3>
            <br></br>  
            <div className='flex  '>
                <img src={FacebookLogo} alt="logo" className="h-8 w-8 mr-5"></img>
                <img src={XLogo} alt="logo" className="h-8 w-8 mr-5"></img>
                <img src={LinkedInLogo} alt="logo" className="h-8 w-8 mr-5"></img>
                <img src={YoutubeLogo} alt="logo" className="h-8 w-8 mr-5"></img>
            </div> 
        </div>  
      </div>

      <div>

      </div>

    </div>
  )
}

export default Footer
