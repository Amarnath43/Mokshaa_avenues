import React from 'react';

const HeroPage = () => {
  return (
    <div className="relative bg-gradient-to-r from-green-400 to-yellow-500 min-h-screen flex flex-col lg:flex-row justify-center items-center px-6 py-10 sm:px-16 lg:px-24">
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
        <h1 className="text-white font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight">
          Welcome to <span className="text-amber-300">Mokshaa Avenues!</span>
        </h1>
        <h6 className="text-white text-2xl sm:text-3xl font-semibold">
          Villa Open Plots <br />@Nandikandi <br /> Mumbai Highway
        </h6>
        <p className="text-black text-xl sm:text-xl font-medium mt-2">
          Bank Loans Available
        </p>

        
      </div>

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>
    </div>
  );
};

export default HeroPage;
