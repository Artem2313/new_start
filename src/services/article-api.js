import axios from 'axios';

const BASE_URL = 'https://hn.algolia.com/api/v1/search?query=';

export const fetchArticles = (query = 'react') => {
  return axios.get(BASE_URL + query);
};

export const dummy = () => {};
