import styled from 'styled-components';

export const MoviesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 30px;
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`;

export const SearchInput = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;
  width: 300px;
`;

export const SearchButton = styled.button`
  padding: 10px 20px;
  background-color: #0074cc;
  color: #fff;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 100%;
`;

export const MoviesListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 -15px;
  width: 100%;
`;
