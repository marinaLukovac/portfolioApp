import styled from 'styled-components';

const SingleBookStyled = styled.article`
  height: 50vh;
  display: flex;
  background-color: #f9fafd;
  box-shadow: 0 3px 5px 0.5px #e5eaf6;
  padding: 7vh 0;
  margin: 13vh 20vw;
  & div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 8vh 8vh 8vh 0;
    max-width: 40vw;
  }
`;
export default SingleBookStyled;
