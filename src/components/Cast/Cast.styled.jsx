import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  text-align: center;
`;


export const ActorsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const ActorItem = styled.div`
  max-width: 100%
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f7f7f7;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  /* Анімація для появи тексту */
  opacity: 0.85;
  transform: translateY(10px);
  transition: opacity 0.5s ease, transform 0.5s ease;

  &:hover {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ActorImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 10px 10px 0 0; 
`;

export const ActorInfo = styled.div`
  padding: 10px;
`;

export const ActorName = styled.p`
  font-size: 18px;
  margin-top: 10px;
  font-weight: bold;
`;

export const ActorCharacter = styled.p`
  font-weight: bold;
  margin-top: 10px;
`;


