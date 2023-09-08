import React from 'react'
import {useEffect, useState} from 'react'
import '../Styles/side3.css'
import data from '../Cards2.json'
function Slider3() {
    const [currentPage, setCurrentPage] = useState(1);
    const [width, setwidht] = useState(0);

    var itemsPerPage =3

    if(width <600 && width >0){
        itemsPerPage = 1;
    }else{
      itemsPerPage = 3
    }
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    
    const nextImage = () => {    
      setCurrentPage((prevPage) =>
        prevPage >= Math.ceil(data.length / itemsPerPage) ? 1 : prevPage + 1
      );
    };
    
    const prevImage = () => {
      setCurrentPage((prevPage) =>
        prevPage === 1 ? Math.ceil(data.length / itemsPerPage) : prevPage - 1
      );
    };
    useEffect(()=>{
        const handlescroll = ()=>{
            const windowsinnerwidth = window.innerWidth
            setwidht(windowsinnerwidth)
        }
        window.addEventListener("resize", handlescroll)
        return ()=> window.addEventListener('resize', handlescroll)
    },[])
       
  const currentItems = data.slice(startIndex, endIndex);
  
  return (
    <div className='slider3-wrap flex items-center justify-center mt-12 absolut'>
          
          <button onClick={()=> prevImage()} className='slider-3-lbtn text-3xl font-mono text-white'>{"<"}</button>
        <div className="slider3-body  gap-x-4">
        {currentItems.map((movie, index) => (
          <div key={index} className='slider3-content'>
            <div className="slide3-innerbody">
                {/* <div className='line w-6 h-1'></div> */}
                <div className='slide3-content-body '>
                <img src={movie.image} alt={movie.name} id='slider3-img'/>
                <div className="name-body">
                <h2>{movie.name}</h2>
                </div>
              </div>
            </div>
            <div className="footer-box">
              <div className="first"></div>
              <div className="second"></div>
            </div>
          </div>
        ))}
        </div>
        <button onClick={()=> nextImage()} className=' slider-3-rbtn text-3xl font-mono text-white'>{">"}</button>
    </div>
  )
}

export default Slider3
