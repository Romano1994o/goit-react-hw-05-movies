import PropTypes from 'prop-types';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  MovieItemComtainer,
  MovieImage,
  MovieTitle, 
} from './MovieItem.styled';

export const MovieItem = ({ movie, index }) => {
  const location = useLocation();
  return (
    <MovieItemComtainer>
      <Link
        to={`/movies/${movie.id}`}
        key={index}
        style={{ textDecoration: 'none' }}
        state={{ from: location }}
      >
        <MovieImage
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          alt={`Movie Poster ${index}`}
        />
        <MovieTitle>{movie.original_title}</MovieTitle>
      </Link>
    </MovieItemComtainer>
  );
};

MovieItem.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    poster_path: PropTypes.string.isRequired,
    original_title: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default MovieItem;
