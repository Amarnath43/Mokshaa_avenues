import React from 'react'
import { useState, useEffect } from 'react';

const Facilities = () => {

    const images=['DTCP_APPROVED LAYOUT.png','vaastu.PNG','entrance.PNG','gated_community.png','33ft_cementroad.png','electricity.PNG', 'underground_drainage.png','lighting.PNG','security.PNG',  'playarea.PNG','plantation.png','harvesting.PNG'];
    const facilities = [
        "DTCP Approved Layout",
        "Layout Designed As Per Vaastu",
        "Aesthetically Designed Grand Entrance",
        "Gated Community",
        "33ft. Cement Roads",
        "Electricity Connection",
        "Under Ground Drainage And Sewerage Lines",
        "Street Lighting As Per Standard Length",
        "24/7 Security",
        "Children Play Area",
        "Roads With Krebs & Avenue Plantation",
        "Rainwater Harvesting Pits",
        
    ]
    const [currentIndex, setCurrentIndex] = useState(0);


     // Function to change the slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Loop back to 0 after the last slide

    
  };

    // Automatic slide change every 3 seconds
    useEffect(()=>{
        const slideInterval = setInterval(() => {
            nextSlide();  // This explicitly calls nextSlide
        }, 3000);

         // Cleanup the interval when the component unmounts
     return () => clearInterval(slideInterval);
    },[])


  return (
    <div>
      <h1 className='font-bold text-3xl text-center my-3.5'>Facilites & Amenties</h1>

      <div className='md:w-[600px] md:h-[400px] w-[400px] h-[300px] p-4'>
        <img src={images[currentIndex]} alt={`image ${currentIndex}`} className='object-cover rounded'/>
        
      </div>
      <p className='font-bold text-center text-2xl '>{facilities[currentIndex]}</p>
    </div>
  )
}

export default Facilities
