import styled from 'styled-components';

export const MovieItemComtainer = styled.div`
  width: calc(25% - 30px); 
  margin-bottom: 20px;
  text-align: center;

  @media (max-width: 767px) {
    width: 100%; 
  }
`;

export const MovieImage = styled.img`
  width: 100%;
  height: auto;
  border: 2px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

export const MovieTitle = styled.h2`
  font-size: 18px;
  margin-top: 15px;
  text-align: center;
`;