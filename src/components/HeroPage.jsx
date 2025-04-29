import React from 'react';

const HeroPage = () => {
  return (
    <div className="relative bg-gradient-to-r from-green-400 to-blue-500 min-h-screen flex flex-col lg:flex-row justify-center items-center px-6 py-10 sm:px-16 lg:px-24">
      {/* Image Section */}
      <div className="lg:w-1/2 w-full mb-8 lg:mb-0 lg:mr-10">
        <img
          src="overview.jpg"
          alt="Overview Image"
          className="object-cover w-full h-full rounded-lg shadow-2xl transform transition duration-500 hover:scale-105"
        />
      </div>

      {/* Text Section */}
      <div className="lg:w-1/2 w-full text-center lg:text-left flex flex-col justify-center items-center lg:items-start gap-6">
        <h1 className="text-white font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight font-serif">
          Welcome to <span className="text-amber-300">Mokshaa Avenues!</span>
        </h1>
        <h6 className="text-white text-2xl sm:text-3xl font-semibold">
          Premium Open Villa Plots <br />near Mumbai Highway<br /> @Nandikandi
        </h6>
        <p className="text-white text-xl sm:text-2xl font-semibold mt-2 ">
          Bank Loans Available
        </p>
        

        
      </div>

      
    </div>
  );
};

export default HeroPage;
