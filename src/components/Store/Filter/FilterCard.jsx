import styled from 'styled-components';

const FilterCard = styled.form`
  padding: 0.8rem;
  display: grid;
  grid-template-columns: 16% 16% 16% 18% 16% 18%;
  grid-template-rows: 7vh 5vh;
  & input,
  & label,
  & select {
    margin-right: 0.5rem;
    padding: 0.5rem;
    align-self: center;
  }
  label {
    text-align: right;
  }
`;
export default FilterCard;
