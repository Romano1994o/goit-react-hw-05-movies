import styled from 'styled-components';

export const MovieContainer = styled.div`
  padding-top: 20px;
  padding-bottom: 5px;
  display: flex;
  gap: 20px;
  border-bottom: 1px solid gray;
`;
export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;




export const AdditionalContainer = styled.div`
  margin-top: 20px;
  font-size: 18px; 
  
  ul {
    list-style: none;
    padding: 0;
    
    li {
      margin-bottom: 10px; 
      
      a {
        text-decoration: none;
        color: #0074cc; 
        transition: color 0.3s;
        
        &:hover {
          color: #004080; 
        }
      }
    }
  }
`;

