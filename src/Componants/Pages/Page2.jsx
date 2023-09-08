import React from 'react'
import '../Styles/background.css'
import Slider2 from './Slider2'
import Slider3 from './Slider3'
import Slider4 from './Slider4'
function Page2() {
  return (
    <div className='page2-container'>
      <div className="overlay-content-body h-fit ">
      <div className="background-img"></div>
        <div className=" overlay-content flex flex-col justify-center items-center   ">
           
            <div className="content-title float-right w-68 m-auto ">
                <img src="https://lumiere-a.akamaihd.net/v1/images/ahsoka-fan-celebration-logotitle_a0cec146.png?region=0,0,805,321" alt="tite-img"  width={"400px"} />
            </div>
            <div className="text-white font-bold text-xl  mt-5">
              <p>
              Ahsoka Tano investigates an emerging threat to the galaxy. 
              </p>
            </div>
            <div className=" mt-7 text-white font-semibold lg:w-85 m-auto morebtn-cont">
              <button className='border-none Lg:w-1/3 pl-6 pr-6 pt-2 pb-2 text-black font-serif bg-yellow-300 rounded-3xl'>STREEM NOW </button>
              <button className='border-yellow-300 Lg:w-1/3 border-2 pl-6 pr-6 pt-2 pb-2 text-black font-serif bg-white rounded-3xl mt-5 ml-3'>EXPLORE NORE </button>
            </div>
          </div>
      </div>
      <div className="body-page2 w-90 m-auto grid lg:grid-cols-2  ">
        <div className="content-body-page2 flex items-center justify-center w-1/2  ">
            <img src="https://lumiere-a.akamaihd.net/v1/images/ahsoka-fan-celebration-0912-featured_e47a7f4e.jpeg?region=0%2C0%2C1600%2C900&width=1536" alt="" />
            <div className="title-wraper text-xl ">
               
                    <p>Watch Ahsoka in Theaters at the Midseason Fan Celebration Event</p>
                    <div className="footer-box">
                <div className="first"></div>
              <div className="second"></div>
            </div>
            </div>
        </div>
        <div className="content-body-page2 flex items-center justify-center w-1/2  ">
            <img src="https://lumiere-a.akamaihd.net/v1/images/ahsoka-fan-celebration-0912-featured_e47a7f4e.jpeg?region=0%2C0%2C1600%2C900&width=1536" alt="" />
            <div className="title-wraper text-xl ">
                
                    <p>Watch Ahsoka in Theaters at the Midseason Fan Celebration Event</p>
                <div className="footer-box">
                <div className="first"></div>
              <div className="second"></div>
            </div>
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default Page2
