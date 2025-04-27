import React from 'react'

const LocationHighlights = () => {

    const location_highlights = [
        "2 Km From Mumbai Highway",
        "RRR",
        "Just 5 Min. Drive from Sangareddy",
        "Indian Institute of Technology (IIT)",
        "Gitam University",
        "JNTU Sangareddy",
        "NIMZ",
        "ODF Ordnance Factory",
        "Collectorate Office",
        "Bharath Dynamics Limited",
        "Reputed Schools & Colleges",
        "Pollution Free Environment"
    ]
  return (
    <div className=' shadow-3xl p-5 bg-white sm:rounded-lg border-gray-600 border'>
      <h1 className='font-bold md:text-2xl text-3xl mb-3 text-blue-800 text-center'>Location Highlights</h1>
      <ul className='space-y-1.5'>
      {
      location_highlights.map((highlight, index)=>(<li key={index} className='font-semibold md:text-xl text-amber-700'>
        {highlight}
      </li>))
        
      }
      </ul>
    
      
    </div>
  )
}

export default LocationHighlights
