import { useState, useEffect, Suspense } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { BackButton,  MovieDetailsContainer } from './MovieDetails.styled';
import { fetchMovieById } from '../../API/API';
import { MovieInfo } from '../../components/MovieInfo/MovieInfo';
import { Loader } from './../../components/Loader/Loader';

const MovieDetails = () => {
  const [movieData, setMovieData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    async function fetchMovie() {
      try {
        setIsLoading(true);
        const result = await fetchMovieById(movieId);
        setMovieData(result);
      } catch (error) {
        console.log(error);
        return alert(`Sorry, please try again`);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovie();
  }, [movieId]);

  return (
    <MovieDetailsContainer>
      <BackButton to={location.state?.from ?? '/'}>
        <BiArrowBack />
        Go back
      </BackButton>
      {isLoading && <Loader />}
      {movieData && <MovieInfo data={movieData} />}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </MovieDetailsContainer>
  );
};

export default MovieDetails;
