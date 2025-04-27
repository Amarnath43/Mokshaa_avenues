import React from 'react'

const HeroPage = () => {
  return (
    <div className='lg:flex-row justify-center items-center flex flex-col'>
      <div  className='lg:w-[50%] w-[100%]'>
        <img src="overview.jpg" alt="Overview Image" className="object-cover h-full w-full"  />
      </div>
      <div className='lg:w-[50%] w-[100%] flex flex-col justify-center items-center p-10 gap-2.5'>
        <h1 className='text-green-500 font-bold text-2xl text-center'>Welcome to Mokshaa Avenues! </h1>
            <h6 className='text-amber-800 text-xl font-semibold'>Villa Open Plots <br /> @Nandikandi <br />Mumbai Highway</h6>
       <p className='text-blue-700 text-xl font-semibold'>Bank Loans Available</p>
        {/*Your trusted partner in turning land into lasting value. At Mokshaa Avenues, we specialize in offering premium residential and commercial plots in rapidly developing areas, ensuring both a smart investment and a perfect place to build your dreams. With a focus on quality development, transparency, and customer-first values, we are committed to creating well-planned, legally secure, and future-ready communities that you and your family can be proud of. */}
      </div>
      
    </div>
  )
}

export default HeroPage
