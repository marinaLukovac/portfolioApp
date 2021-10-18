import photoCover from '../img/cover.jpg';
import { HomeStyled } from './HeaderStyled';

const Home = () => {
  return (
    <HomeStyled>
      <img src={photoCover} alt="" />
    </HomeStyled>
  );
};

export default Home;
