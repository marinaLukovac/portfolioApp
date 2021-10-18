import styled from 'styled-components';

export const ShoppingCartTable = styled.section`
  flex: display;
  flex-direction: column;
  margin: 10vh;

  img {
    height: 100%;
  }
  & .heading {
    display: grid;
    grid-template-columns: 5% 40% 30% 25%;

    font-size: 1.5rem;
    padding: 1rem;
  }
  & .total {
    display: grid;
    grid-template-columns: 5% 70% 25%;
    font-size: 1.5rem;
    padding: 1rem;
  }
`;

export const ShoppingCartItemCard = styled.article`
  font-size: 1.5rem;
  padding: 1rem;
  display: grid;
  grid-template-columns: 5% 40% 30% 25%;
  & button {
    margin: 0.8rem auto;
    height: 1.5rem;
    width: 1.5rem;
  }
  p {
    align-self: center;
  }
`;
