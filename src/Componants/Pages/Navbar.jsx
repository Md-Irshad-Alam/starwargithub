import React from 'react'
import '../Styles/nav.css'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    
   <div className='text-white font-semibold w-full relative bottom-0 top-7 '>
     <div className='w-80  m-auto '>
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
   </div>
   
  )
}

export default Navbar
