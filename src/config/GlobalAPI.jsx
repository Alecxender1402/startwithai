
import axios from "axios";

const BASE_URL = 'https://maps.googleapis.com/maps/api/place/textsearch/json';

const getPlaces = async(query) => {
  const url = `${BASE_URL}?query=${encodeURIComponent(query)}&key=${import.meta.env.VITE_GOOGLE_PLACE_API_KEY}`;
  
  // Inside getPlaces function
return axios.get(url)
.then(response => {
  console.log('API Response:', response.data);
  return response.data;
})
.catch(error => {
  console.error('Error fetching places:', error);
  throw error;
});

};

export { getPlaces };
