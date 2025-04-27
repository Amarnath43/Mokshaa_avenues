import React, { useState, useEffect } from 'react';

const Facilities = () => {
  const images = [
    'DTCP_APPROVED LAYOUT.png', 'vaastu.PNG', 'entrance.PNG', 'gated_community.png',
    '33ft_cementroad.png', 'electricity.PNG', 'sew.jpeg', 'lighting.PNG',
    'security.PNG', 'playarea.PNG', 'plantation.png', 'harvesting.PNG'
  ];

  const facilities = [
    "DTCP Approved Layout", "Layout Designed As Per Vaastu", "Aesthetically Designed Grand Entrance",
    "Gated Community", "33ft. Cement Roads", "Electricity Connection", "Underground Drainage And Sewerage Lines",
    "Street Lighting As Per Standard Length", "24/7 Security", "Children Play Area",
    "Roads With Krebs & Avenue Plantation", "Rainwater Harvesting Pits"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to change the slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Loop back to 0 after the last slide
  };

  // Automatic slide change every 3 seconds
  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide(); // This explicitly calls nextSlide
    }, 3000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="py-10 bg-gray-100 text-gray-800">
      <h1 className="text-3xl font-semibold text-center mb-8 text-gray-700">
        Facilities & Amenities
      </h1>

      {/* Container for Image and Text */}
      <div className="max-w-[700px] mx-auto text-center">
        {/* Image Section */}
        <div className="mb-4 p-4">
          <img
            src={images[currentIndex]}
            alt={`Facility Image ${currentIndex}`}
            className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300"
          />
        </div>

        {/* Text Description Section */}
        <p className="text-xl sm:text-2xl font-medium text-gray-600">
          {facilities[currentIndex]}
        </p>
      </div>
    </div>
  );
};

export default Facilities;
