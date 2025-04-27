import React from 'react'

const LocationMap = () => {
  return (
    <div className="overflow-hidden p-4">
     <iframe className="border-0 w-[100%] " src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3802.8009296385108!2d77.98548327517007!3d17.61218548331384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDM2JzQzLjkiTiA3N8KwNTknMTcuMCJF!5e0!3m2!1sen!2sin!4v1745706176383!5m2!1sen!2sin" width="600" height="450"  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}

export default LocationMap


