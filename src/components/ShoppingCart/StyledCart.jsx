import styled from 'styled-components';

export const ShoppingCartTable = styled.section`
  & .description {
    flex: display;
    flex-direction: column;
  }
  img {
    height: 100%;
  }
  & .heading {
    display: grid;
    grid-template-columns: 3% 40% 30% 27%;

    font-size: 2rem;
    padding: 1rem;
  }
  & .total {
    display: grid;
    grid-template-columns: 73% 27%;
    font-size: 2rem;
    padding: 1rem;
  }
`;
export const ShoppingCartItemCard = styled.article`
  font-size: 1.5rem;
  padding: 1rem;
  display: grid;
  grid-template-columns: 5% 40% 30% 25%;
  & button {
    margin: 0.5rem;
    height: 1.5rem;
    width: 1.5rem;
  }
  p {
    align-self: center;
  }
`;
