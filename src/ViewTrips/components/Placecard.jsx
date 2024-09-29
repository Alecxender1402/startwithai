import { Button } from '@/components/ui/button'
import React from 'react'
import { FaMapLocation } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Placecard = ({place}) => {
  return (
    <Link to = {'https://www.google.com/maps/search/?api=1&query='+place?.name} target='_blank'>
    <div className='p-3 mt-2 flex gap-5 hover:scale-105 transition-all hover:shadow-md cursor-pointer'>
    
    {/* <img
          src={place?.image_url || '/img.webp'} // Use dynamic image URL, fallback to default image
          alt={place?.name}
          className='w-[130px] h-[130px] rounded-xl'
        /> */}

    <div>
         <h2 className='font-bold text-lg'>{place.name}</h2>
         <p className='text-sm text-gray-400'>{place.details}</p>
        
    </div>

    </div>
    </Link>
  )
}

export default Placecard
