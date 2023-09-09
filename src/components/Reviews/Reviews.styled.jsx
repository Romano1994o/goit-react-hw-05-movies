import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 20px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

export const ReviewsList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ReviewsItem = styled.div`
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  padding: 15px;
  margin-bottom: 15px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);

  h3 {
    font-size: 18px;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
    color: #333;
  }
`;