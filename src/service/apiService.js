import axios from 'axios';
const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '29970026-ac3fe5699883ebc097e04e8ad';

const getApiResult = async (searchQuery, page) => {
  const response = await axios.get(
    `${BASE_URL}?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data;
};

export default getApiResult;
