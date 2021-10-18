import styled from 'styled-components';

export const StoreCard = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: 30% 30% 30%;
  justify-content: space-between;
  list-style: none;

  & a {
    text-decoration: none;
    color: inherit;
  }
`;
export const PageNavigation = styled.ul`
  list-style: none;
  display: flex;
  & button {
    font-size: 0.8rem;
    padding: 0.2rem 0.5rem;
    margin: 0 0.4rem;
    border: none;
    background: none;
  }
  & button:hover,
  & button:active {
    color: #4835b5;
    font-weight: 600;
    text-decoration: underline;
    text-underline-offset: 0.1rem;
  }
`;
