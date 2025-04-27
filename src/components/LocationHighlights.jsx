import React from 'react';

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
  ];

  return (
    <div className="shadow-xl p-6 bg-gradient-to-r from-indigo-500 to-purple-600 sm:rounded-lg border-gray-600 border">
      <h1 className="font-bold text-4xl mb-6 text-white text-center drop-shadow-lg">
        Location Highlights
      </h1>
      <ul className="space-y-3">
        {location_highlights.map((highlight, index) => (
          <li key={index} className="font-semibold text-lg text-white hover:text-yellow-400 transition duration-300 ease-in-out transform hover:scale-105">
            <span className="text-yellow-200">{index + 1}. </span>{highlight}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LocationHighlights;
