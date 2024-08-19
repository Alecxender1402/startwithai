import React from 'react'
import Placecard from './Placecard'

const PlacetoVisit = ({trip}) => {
  return (
    <div>
    <h2 className='font-bold text-lg mt-3'>Places to Visit</h2>

    <div className=''>
        {trip?.tripdata?.itinerary?.map((item,index) => (
            <div className='mt-5' >
                <h2 className='font-medium text-lg'>{item.day}</h2>
                <div className='grid grid-cols-2 gap-5'>
                {item.plan.map((place,index) => (
                    <div className='my-3'>
                        <h2 className='font-medium text-sm text-orange-700'>{place.time_to_spend}</h2>
                        <Placecard place={place}/>
                    </div>
                    ))}
                    </div>
            </div>
        ))}
    </div>
    </div>
  )
}

export default PlacetoVisit
