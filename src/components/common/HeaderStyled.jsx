import styled from 'styled-components';

export const HeaderStyled = styled.header`
  padding: 1vh 25vh;
  display: flex;
  justify-content: space-between;
  background-color: #f9fafd;
  box-shadow: 0 2px 3px 0.5px #e5eaf6;
  & .logo-placeholder {
    width: 5rem;
  }
  & span,
  & .logo-placeholder {
    align-self: center;
  }
  & .main-nav {
    padding: 1rem;
  }
  & .nav-link {
    margin-left: 2rem;
    font-size: 1.3rem;
    color: grey;
    text-decoration: none;
    position: relative;
  }
  & .nav-link:hover,
  & .nav-link.active {
    text-decoration: underline;
    text-underline-offset: 0.1rem;
    color: #4835b5;
  }
  & .cart-state {
    display: inline-block;
    padding: 0.2rem 0.5rem;
    position: absolute;
    top: -0.5rem;
    right: -0.8rem;
    background-color: white;
    border-radius: 50%;
    border: solid 0.2px #d1d3dd;
    box-shadow: 1px 2px 5px -1px #babdcd;
  }
  & img {
    width: 80%;
  }
`;

export const HomeStyled = styled.div`
  & a {
    position: absolute;
    top: 40vh;
    left: 25vh;
    display: inline-block;
    padding: 1.5vh 3vh;
    background-color: #ffdb33;
    border-radius: 6px;
    font-weight: 600;
    font-size: 1.8rem;
    color: #4c3f00;
  }
  & a:hover {
    color: #7f4261;
    background-color: #ffffff;
    box-shadow: 2px 2px 5px 0.3px #ffdb33;
  }
  width: 100vw;
  & img {
    width: 100%;
  }
`;
