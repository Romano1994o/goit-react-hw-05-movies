import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMoviesByQuery } from 'API/API';
import { Loader } from './../../components/Loader/Loader';
import { MovieItem } from './../../components/MovieItem/MovieItem';
import { Notification } from './../../components/Notification/Notification';
import {
  MoviesContainer,
  SearchForm,
  SearchInput,
  SearchButton,
  LoadingContainer,
  MoviesListContainer
} from './Movies.styled';




const Movies = () => {
  const [query, setQuery] = useState('');
  const [moviesData, setMoviesData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query');
  const [error, setError] = useState(null);
  const [notifications, setNotifications] = useState([]); 

  const handleChange = event => {
    setQuery(event.target.value);
  };

  useEffect(() => {
    if (searchQuery === '' || searchQuery === null) {
      return;
    }

    const fetchByQuery = async () => {
      try {
        setIsLoading(true);
        const { results } = await fetchMoviesByQuery(searchQuery);
        setMoviesData(results);
      } catch (error) {
        console.log(error);
        setError(error);
        
        addNotification('error', 'Error', 'Sorry, please try again');
      } finally {
        setIsLoading(false);
      }
    };

    fetchByQuery();
  }, [searchQuery]);

  const onHandleSubmit = event => {
    event.preventDefault();

    setSearchParams({ query: query });
    setQuery('');
  };

  const addNotification = (type, title, content) => {
    const id = new Date().getTime().toString();
    const newNotification = {
      id,
      type,
      title,
      content,
    };

    setNotifications(prevNotifications => [...prevNotifications, newNotification]);
  };

  return (
    <MoviesContainer>
      <SearchForm onSubmit={onHandleSubmit}>
        <SearchInput type="text" value={query} onChange={handleChange} />
        <SearchButton type="submit">Search Movie</SearchButton>
      </SearchForm>
      {isLoading && (
        <LoadingContainer>
          <Loader />
        </LoadingContainer>
      )}
      {moviesData ? (
        moviesData.length > 0 ? (
          <MoviesListContainer>
            {moviesData.map((movie) => (
              <MovieItem key={movie.id} movie={movie} />
            ))}
          </MoviesListContainer>
        ) : (
          <Notification
            id="error-notification"
            type="error"
            title="Error"
            content="No result Found!"
            removeNotification={() => setNotifications([])}
          />
        )
      ) : null}
      {error && (
        <Notification
          id="error-notification"
          type="error"
          title="Error"
          content="Sorry, please try again"
          removeNotification={() => setNotifications([])}
        />
      )}
      {notifications.map(notification => (
        <Notification
          key={notification.id}
          id={notification.id}
          type={notification.type}
          title={notification.title}
          content={notification.content}
          removeNotification={() =>
            setNotifications(prevNotifications =>
              prevNotifications.filter(n => n.id !== notification.id)
            )
          }
        />
      ))}
    </MoviesContainer>
  );
};

export default Movies;
