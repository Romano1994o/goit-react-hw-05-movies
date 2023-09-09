import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCastById } from 'API/API';
import {
  Container,
  ActorItem,
  ActorImage,
  ActorName,
  ActorCharacter
} from './Cast.styled';

import { Loader } from './../Loader/Loader';
import { SimpleSlider } from './../Slider/Slider'; // Import the Slider component
import { Notification } from './../Notification/Notification'; // Import the Notification component

const Cast = () => {
  const [actors, setActors] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null); // Додаємо стан для обробки помилок
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchCast() {
      try {
        setIsLoading(true);
        const { cast } = await fetchCastById(movieId);
        setActors(cast);
      } catch (error) {
        console.log(error);
        setError(error); // Встановлюємо стан помилки
      } finally {
        setIsLoading(false);
      }
    }
    fetchCast();
  }, [movieId]);

  return (
    <Container>
      {isLoading && <Loader />}
      {error && (
        // Відображаємо компонент Notification для помилки
        <Notification
          id="error-notification"
          type="error"
          title="Error"
          content="Sorry, please try again"
          removeNotification={() => setError(null)} // Функція для закриття нотифікації помилки
        />
      )}
      {actors ? (
        <>
          <SimpleSlider slides={actors.map((actor) => (
            <ActorItem key={actor.id}>
              <ActorImage
                src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                alt={actor.name}
              />
              <ActorName>{actor.name}</ActorName>
              <ActorCharacter>Character: {actor.character}</ActorCharacter>
            </ActorItem>
          ))} />
        </>
      ) : (
        // Відображаємо компонент Notification для відсутності акторів
        <Notification
          id="no-cast-notification"
          type="info"
          title="No Cast"
          content="We don't have any cast for this movie."
          removeNotification={() => {}}
        />
      )}
    </Container>
  );
};

export default Cast;
