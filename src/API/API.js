import axios from 'axios';

const API_KEY = 'e6c6b5e7c078fa3d9f19a91134816f70';
const BASE_URL = 'https://api.themoviedb.org/3';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
    language: 'en-US',
  },
});

export const fetchTrandingMovies = async () => {
  try {
    const response = await axiosInstance.get('/trending/movie/day');
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchMoviesByQuery = async (query) => {
  try {
    const response = await axiosInstance.get('/search/movie', {
      params: {
        query: query,
        page: 1,
        include_adult: false,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchMovieById = async (id) => {
  try {
    const response = await axiosInstance.get(`/movie/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchCastById = async (id) => {
  try {
    const response = await axiosInstance.get(`/movie/${id}/credits`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchReviewsById = async (id) => {
  try {
    const response = await axiosInstance.get(`/movie/${id}/reviews`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};