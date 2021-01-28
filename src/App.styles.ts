import styled from 'styled-components';

export const Wrapper = styled.div`
display:flex;
flex-wrap:wrap;
justify-content:space-evenly;

@media only screen and (max-width: 710px) {
    flex-direction:column;
    align-items:center;
  }
`;