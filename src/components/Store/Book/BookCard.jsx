import styled from 'styled-components';

const BookCard = styled.article`
  margin: 1rem 0;
  border-radius: 0.3rem;
  background-color: #fdfcfb;
  box-shadow: 0 3px 4px 0.5px #f5f1e9;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  & button {
    width: 8rem;
    padding: 0.3rem 0.6rem;
  }
  & button,
  & p,
  & a {
    margin-top: 0.6rem;
  }
`;

export default BookCard;
