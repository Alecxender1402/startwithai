import React, { useState } from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

const Index = () => {
  const [value, setValue] = useState("");

  return (
    <div className='sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10'>
      <h2 className='font-bold text-3xl justify-center flex mb-4'>Tell us your travel preferences</h2>
      <p className='mt-3 text-gray-500 text-xl justify-center flex'>Just provide some basic information, and our trip planner will generate a customized itinerary based on your preferences.</p>
      <div className='mt-20'>
        <div>
          <h2 className='text-xl my-3 font-medium'>What is the destination of your choice?</h2>
          <GooglePlacesAutocomplete
            apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
            selectProps={{
              value,
              onChange: setValue,
              placeholder: 'Enter a city name...',
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Index;
