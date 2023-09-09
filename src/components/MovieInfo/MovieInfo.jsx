import PropTypes from 'prop-types';
import { InfoContainer, MovieContainer, AdditionalContainer } from './MovieInfo.styled';
import { useParams, Link, useLocation } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';

export const MovieInfo = ({ data }) => {
  const location = useLocation();

  const { movieId } = useParams();
  const { poster_path, original_title, vote_average, overview, genres } = data;
  const genresNames = genres.map(genre => genre.name).join(` `);
  const posterUrl = `https://image.tmdb.org/t/p/w200${poster_path}`;
  const rating = vote_average.toFixed(1) * 10;

  const titleAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(10px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 300,
  });

  const scoreAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(10px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 1300,
  });

  const overviewAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(10px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 1800,
  });

  const genresAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(10px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 2300,
  });

  return (
    <>
      <MovieContainer>
        <animated.img style={titleAnimation} src={posterUrl} alt={original_title} />
        <InfoContainer>
          <animated.h2 style={titleAnimation}>{original_title}</animated.h2>
          <animated.p style={scoreAnimation}>User Score: {rating}%</animated.p>
          <animated.h3 style={overviewAnimation}>Overview</animated.h3>
          <animated.div style={{ ...overviewAnimation, maxWidth: '500px' }}>
            <p>{overview}</p>
          </animated.div>
          <animated.h3 style={genresAnimation}>Genres</animated.h3>
          <animated.p style={genresAnimation}>{genresNames}</animated.p>
        </InfoContainer>
      </MovieContainer>
      <AdditionalContainer>
        Additional information
        <ul>
          <li>
            <Link
              to={`/movies/${movieId}/cast`}
              state={{ from: location.state?.from ?? '/' }}
            >
              Cast
            </Link>
          </li>
          <li>
            <Link
              to={`/movies/${movieId}/reviews`}
              state={{ from: location.state?.from ?? '/' }}
            >
              Reviews
            </Link>
          </li>
        </ul>
      </AdditionalContainer>
    </>
  );
};

MovieInfo.propTypes = {
  data: PropTypes.shape({
    poster_path: PropTypes.string.isRequired,
    original_title: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      })
    ),
  }),
};
