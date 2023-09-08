import React from 'react'

import { BsInstagram } from 'react-icons/bs';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';
import { FaTiktok } from 'react-icons/fa';
import { AiOutlineYoutube } from 'react-icons/ai';

function Fotter() {
  return (
    <div className='footer-body pb-12 mt-7 x-sm:w-full lg:w-80'>
            <h2 className='text-white text-xl font-semibold '>More From Star Wars</h2>
        <div className='text-white text-2xl font-semibold flex items-center justify-center gap-x-4 x-sm:gap-x-7 mt-5 lg:w-80 x-sm:w-full '>
            <FaTiktok/>
            <BsInstagram/>
            <AiFillFacebook/>
            <AiOutlineTwitter/>
            <AiOutlineYoutube/>
        </div>
        
        
      
    </div>
  )
}

export default Fotter
