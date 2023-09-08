import React, { useState } from 'react'

import { BsInstagram } from 'react-icons/bs';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';
import { FaTiktok } from 'react-icons/fa';
import { HiMiniMagnifyingGlass } from 'react-icons/hi2';
import { AiOutlineUser } from 'react-icons/ai';
import { ImParagraphJustify } from 'react-icons/im';
import {Link} from 'react-router-dom'
import '../Styles/nav.css'
import Navbar from './Navbar';

function Headers() {
  const [show, setshow] = useState(false)
  const toggle =()=>{
    setshow(!show)
  }
  return (
    <div className='Header-cont text-white font-semibold w-full'>
      <div className=' navbar-cont-body flex items-center justify-between h-16 w-85 pl-5 pr-5 p-2  m-auto'>
        <div className='togglebtn' onClick={()=> toggle()}>
         <ImParagraphJustify/>
        </div>

      <div className={`menu ${show ? 'show':''}`} >
        <FaTiktok/>
        <BsInstagram/>
        <AiFillFacebook/>
        <AiOutlineTwitter/>
      </div>
      <div className="logo-img">
        <img src="https://lumiere-a.akamaihd.net/v1/images/sw_nav_logo_mobile_659fef1a_1_99c6e87c.png?region=0,0,312,32" alt="" />
      </div>

      <div className='flex items-center gap-x-7'>
        <div className='flex items-center gap-x-3'>
            <HiMiniMagnifyingGlass/>
            {/* <input type="text" placeholder='SEARCH' className='border-none bg-gray-600' /> */}
        </div>
        <div className='flex items-center gap-x-3 sm:hidden x-sm:hidden'> 
            <AiOutlineUser/>
            <p>USER</p>
        </div>
      </div>
      <div className="footer-nav-cont uppercase gap-x-12 flex items-center justify-center text-primary ">
            <Link to="#" >News+ featurs</Link>
            <Link to="#" >video</Link>
            <Link to="#" >film</Link>
            <Link to="#" >Series</Link>
            <Link to="#" >Intractive</Link>
            <Link to="#" >databank</Link>
            <Link to="#" >disney+</Link>
        </div>
      </div>
      {/* <Navbar/> */}
    </div>
  )
}

export default Headers
