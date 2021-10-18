import styled from 'styled-components';

const StyledBookForm = styled.form`
  width: 70vw;
  padding: 0.8rem 0.8rem 0 0.8rem;
  margin: 0 auto;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  & input,
  textarea,
  label {
    margin-bottom: 0.8rem;
    padding: 0.5rem;
  }
`;

export default StyledBookForm;
