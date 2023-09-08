import React, { useEffect } from 'react'
import { useState } from 'react';
import '../Styles/slider.css'
const images = [
    'https://lumiere-a.akamaihd.net/v1/images/who-is-ahsoka-spheres-hero-desktop_472ef009.jpeg?region=0,0,2048,878',
    'https://lumiere-a.akamaihd.net/v1/images/loth-cat-cookies-spheres-hero-desktop_641b4665.jpeg?region=0,0,2048,878',
        'https://lumiere-a.akamaihd.net/v1/images/mando-blu-ray-hero-desktop_aa411adb.jpeg?region=0,0,2048,878',
        'https://lumiere-a.akamaihd.net/v1/images/ahsoka-104-hero-desktop_d1e637c4.jpeg?region=0,0,1600,686'
]
function Slider() {
    const [curIndex, setIndex] = useState(0);

    const nextImage = () => {
      setIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    };
  
    const prevImage = () => {
      setIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    };
  
        // useEffect(()=>{
        //     const interval = setInterval(nextImage , 3000)
        //     return ()=> clearInterval(interval)

        // },[])
  return (
   <>
    <div className="slider mb-2 ">
      <div className="slider-body-container">
      <div className="img-body">
      
        <button onClick={()=> prevImage()} id='left-btn' className='text-3xl font-mono text-white'>{"<"}</button>

        <div className="slide-multiple">
              <img
              src={images[curIndex]}
              alt={`Slide ${curIndex}`}
              className="slider-image"
            />
          </div>
          <button onClick={()=> nextImage()} id='right-btn' className='text-3xl font-mono text-white'>{">"}</button>
        </div>
        
      <div className="content-overlay">
        <div className="content-detail">
        <div className="content-body flex flex-col justify-center items-center  flex-grow-1  ">
            <div className="content-title ">
                <h1>
                <img src="https://lumiere-a.akamaihd.net/v1/images/ahsoka-fan-celebration-logotitle_a0cec146.png?region=0,0,805,321" alt="tite-img"  width={"400px"} />
                </h1>
            </div>
            <div className="content-disc  font-mono text-white font-bold mt-7 text-lg">
              <p>
                Watch
                <i>Ashoka</i>
                in theaters at the Midseason Fan Celebration event!
              </p>
            </div>
            <div className="moredetails-btn mt-7 text-white font-semibold border-none">
              <button className='border-none pl-6 pr-6 pt-2 pb-2 text-black font-serif bg-yellow-300 rounded-3xl'>More details </button>
            </div>
          </div>
        </div>
        </div>
      </div>

      <div className='img-bnt-cont '>
           <div className="body-btn-img">
           <div onClick={()=> setIndex(0)} className='slide-btn-img'>
                <h1>ASHOKA PART -4 
                </h1>
                <img src={images[0]} alt=""  id="img-bot" />
            </div>
            <div onClick={()=> setIndex(1)} className='slide-btn-img' >
                <h1>HE MANDALORIAN</h1>
                <img src={images[1]} alt=""  id="img-bot" />
            </div>
            <div onClick={()=> setIndex(2)} className='slide-btn-img'>
                <h1>LOTH-CAT COOKIES</h1>
                <img src={images[2]} alt=""  id="img-bot"  />
            </div>
            <div onClick={()=> setIndex(3)} className='slide-btn-img'>
                <h1>WHO IS AHSOKA TANO</h1>
               
                <img src={images[3]} alt=""  id="img-bot" />
            </div>
           </div>
        </div>
    </div>
  
   </>
  )
}

export default Slider
