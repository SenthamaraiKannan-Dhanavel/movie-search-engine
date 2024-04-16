import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001/api';

const searchMovies = async (searchQuery = '') => {
  const response = await axios.get(`${API_BASE_URL}/movies${searchQuery ? `?q=${encodeURIComponent(searchQuery)}` : ''}`);
  return response.data;
};

export { searchMovies };