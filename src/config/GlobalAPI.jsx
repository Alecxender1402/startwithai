import axios from "axios";

const Base_URL = 'https://places.googleapis.com/v1/places:searchText';

const config = {
    headers: {
      'ontent-Type': 'application/json', 
      'X-Goog-Api-Key': import.meta.env.VITE_GOOGLE_PLACE_API_KEY,
      'X-Goog-FieldMask': [
        'places.photo',
        'places.displayName',
        'places.id',
      ]
    }
}

export const getPlaces = async (data) => axios.post(Base_URL, data, config);
