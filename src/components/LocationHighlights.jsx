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
    <div className=' shadow-2xl p-5 rounded '>
      <h1 className='font-bold md:text-2xl text-3xl mb-3'>Location Highlights</h1>
      <ul className='space-y-1.5'>
      {
      location_highlights.map((highlight, index)=>(<li key={index} className='font-semibold md:text-xl'>
        {highlight}
      </li>))
        
      }
      </ul>
    
      
    </div>
  )
}

export default LocationHighlights
