import React, { useEffect, useState } from 'react';

import { HomeTitle, HomeWrapper, MoviesContainer, } from './Home.styled';
import { fetchTrandingMovies } from '../../API/API';
import { Loader } from './../../components/Loader/Loader';
import { MovieItem } from './../../components/MovieItem/MovieItem';

const Home = () => {
  const [moviesData, setMoviesData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const { results } = await fetchTrandingMovies();
        setMoviesData(results);
      } catch (error) {
        console.error(error);
        alert('Sorry, please try again');
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <HomeWrapper>
      <HomeTitle>Trending today</HomeTitle>
      {isLoading && <Loader />}
    
      <MoviesContainer>
      {moviesData.map((movie) => (
              <MovieItem key={movie.id} movie={movie} />
            ))}
      </MoviesContainer>
    </HomeWrapper>
  );
};

export default Home;
