import HeroPage from "./components/HeroPage"
import Navbar from "./components/Navbar"
import ContactUs from "./components/ContactUs"
import Facilities from "./components/Facilities"
import LocationHighlights from "./components/LocationHighlights"
import LocationMap from "./components/LocationMap"
import Footer from "./components/Footer"
import { useRef } from "react"
import DownloadBrochure from "./components/DownloadBrochure"
import { Toaster } from 'react-hot-toast';

function App() {
  // Create refs for each section
  const overviewRef = useRef(null);
  const facilitiesRef = useRef(null);
  const locationHighlightsRef = useRef(null);
  const contactRef = useRef(null);
  const locationMapRef = useRef(null);

   // Function to scroll to a specific section
   const scrollToSection = (section) => {
    if (section.current) {
      section.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="">
      <Toaster /> {/* This is where toasts will be shown */}
      <Navbar
       scrollToSection={scrollToSection} 
       overviewRef={overviewRef}
       facilitiesRef={facilitiesRef}
       locationHighlightsRef={locationHighlightsRef}
       contactRef={contactRef}
       locationMapRef={locationMapRef}
      />
      <hr />
      <HeroPage ref={overviewRef}/>
      
      <div className="flex justify-center items-center m-auto bg-gray-300 bg-[url('/nnn.jpg')] mb-2 md:p-10" ref={contactRef}>
      <ContactUs />
      </div>
      
      <div className="flex justify-center items-center mb-4" ref={facilitiesRef}><Facilities/></div>
      
      <div className="flex justify-center items-center bg-[url('/60241.jpg')] sm:p-8" ref={locationHighlightsRef}><LocationHighlights/></div>
      
      <div ref={locationMapRef}><LocationMap ></LocationMap></div>
      
      <Footer/>
      <div className="text-center bg-amber-300 font-bold text-black px-4 py-2 sm:hidden w-full fixed bottom-0">
      <DownloadBrochure/>
      </div>
    </div>
    
  )
}

export default App
