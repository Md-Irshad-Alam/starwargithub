import React, {useEffect , useState} from 'react'
import axios from 'axios';
import data from '../Cards1.json'
import '../Styles/slider2.css'
function Slider2() {
    const [currentPage, setCurrentPage] = useState(1);
    const [width, setwidht] = useState(0);

    var itemsPerPage =6

    if(width <600 && width >0){
      itemsPerPage = 2;
  }else{
    itemsPerPage = 6
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
        console.log(width)
  const currentItems = data.slice(startIndex, endIndex);
  
  return (
    <div className='slider2-wrap flex items-center justify-center mt-7'>
        
            <button onClick={()=> prevImage()} className='slider-2-lbtn text-3xl font-mono text-white'>{"<"}</button>
            

        <div className="slider2-body grid grid-cols-6 gap-x-4">
        {currentItems.map((movie, index) => (
          <div key={index} className='slider2-content'>
            <div className='w-full h-full '>
            <img src={movie.image} alt={movie.name} id='slider2-img'/>
            <h2 className='text-white text-2xl font-medium  font-sans x-sm:text-base'>{movie.name}</h2>
            </div>

            <div className="footer-box2">
              <div className="first2"></div>
              <div className="second2"></div>
            </div>
          </div>
        ))}
        </div>
        <button onClick={()=> nextImage()} className=' slider-2-rbtn text-3xl font-mono text-white'>{">"}</button>
    </div>
  )
}

export default Slider2
