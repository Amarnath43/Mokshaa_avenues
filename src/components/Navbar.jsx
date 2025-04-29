import React, { useState } from 'react'
import DownloadBrochure from './DownloadBrochure';


const Navbar = ({ scrollToSection, overviewRef, facilitiesRef, locationHighlightsRef, contactRef, locationMapRef}) => {
    const [isMenuButtonOpen, setIsMenuButtonOpen]=useState(false);
    return (
        <div>
        <div className='flex justify-between items-center px-9 bg-white '>
            <div >
                <img src="IMG_6044.PNG" alt="Mokshaa avenues Logo" className='w-[100px] ' />
            </div>
            <div className='lg:flex gap-7 hidden font-bold text-lg '>
                <button onClick={() => scrollToSection(overviewRef)} className='hover:text-green-500'>Overview</button>
                <button onClick={() => scrollToSection(contactRef)} className='hover:text-green-500'>Contact us</button>
                <button onClick={() => scrollToSection(facilitiesRef)} className='hover:text-green-500'>Facilities</button>
                <button onClick={() => scrollToSection(locationHighlightsRef)} className='hover:text-green-500'>Location Highlights</button>
                <button onClick={() => scrollToSection(locationMapRef)} className='hover:text-green-500'>Location Map</button>
                <div className='bg-green-500 px-2 py-1 rounded-lg animate-bounce'>
                <DownloadBrochure/>
                </div>
            </div>
            
                <div className='lg:hidden flex items-center'>

                    <button onClick={() => setIsMenuButtonOpen(!isMenuButtonOpen)}><span className='text-2xl'>&#9776;</span></button>
                </div>
           
        </div>

        {
            isMenuButtonOpen && (
              <div className='absolute top-20 left-0 bg-white shadow-lg p-4 space-y-4 z-10 lg:hidden w-full'>
                <button className=' h-12 px-6 text-white border-green-500 bg-green-600 font-bold rounded w-full' onClick={() => {scrollToSection(overviewRef); setIsMenuButtonOpen(!isMenuButtonOpen)}}>Overview</button>
                <button className=' h-12 px-6 text-white border-green-500 bg-green-600 font-bold rounded w-full' onClick={() => {scrollToSection(contactRef); setIsMenuButtonOpen(!isMenuButtonOpen)}}>Contact us</button>
                <button className=' h-12 px-6 text-white border-green-500 bg-green-600 font-bold rounded w-full' onClick={() => {scrollToSection(facilitiesRef); setIsMenuButtonOpen(!isMenuButtonOpen)}}>Facilities</button>
                <button className=' h-12 px-6 text-white border-green-500 bg-green-600 font-bold rounded w-full' onClick={() => {scrollToSection(locationHighlightsRef); setIsMenuButtonOpen(!isMenuButtonOpen)}}>Location Highlights</button>
                <button className=' h-12 px-6 text-white border-green-500 bg-green-600 font-bold rounded w-full' onClick={() => {scrollToSection(locationMapRef); setIsMenuButtonOpen(!isMenuButtonOpen)}}>Location Map</button>
                
              </div>
            )
          }
        </div>

        
        
    )
}

export default Navbar
