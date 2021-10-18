import styled from 'styled-components';

const StyledForm = styled.form`
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  margin: 5vh auto;
  background-color: #fdfcfb;
  box-shadow: 0 3px 4px 0.5px #f5f1e9;
  & input {
    padding: 0.5rem 1rem;
    border: solid 1px lightgray;
    border-radius: 0.2rem;
    box-shadow: 1px 1px 1px 0.2px #fcfbfb;
  }
  & input[type='text']:focus {
    margin-top: 0.5rem;
    border: #ffdb33 solid 0.5px;
    transition: ease-in-out, width 0.35s ease-in-out;
  }
  & label {
    padding: 0 1rem;
    height: 1rem;
    color: red;
    font-style: italic;
  }
  & input[type='submit'] {
    background-color: #ffdb33;
    color: #4c3f00;
    font-size: 1.2rem;
    font-weight: 400;
    border: none;
  }
  & input[type='submit']:hover {
    color: #7f4261;
    background-color: #ffffff;
    box-shadow: 2px 2px 2px 1px #d8c6cf;
  }

  & a {
    margin: 0 auto;
    margin-top: 1.2rem;
  }
`;
export default StyledForm;
