import { Button } from '@/components/ui/button';
import { getPlaces } from '@/config/GlobalAPI';
import React, { useEffect } from 'react'
import { IoSend } from "react-icons/io5";

const InfoSection = ({trip}) => {
    useEffect(()=> {
     trip && getphoto();
    },[trip])

    const getphoto = async()=> {
        const data = {
            textQuery: trip?.userselection?.place
        }
       const result = await getPlaces(data).then((res)=> {
        console.log(res.data);
       })
    }
  return (
    <div>
      <div className='flex justify-between items-center'>
      <div className='my-5 flex flex-col gap-2'>
        <h2 className='font-bold text-2xl'>{trip?.userselection?.place}</h2>
        <div className='flex gap-5'>
            <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-lg'>📅 {trip?.userselection?.days} Days</h2>
            <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-lg'>💰 {trip?.userselection?.budget} Budget</h2>
            <h2 className='p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-lg'>🍾 No of {trip?.userselection?.people}</h2>
        </div>
      </div>
         
        

      </div>
    </div>
  )
}

export default InfoSection
