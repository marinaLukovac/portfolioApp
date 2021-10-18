import { Link } from 'react-router-dom';
import photoCover from '../img/cover.jpeg';
import { HomeStyled } from './HeaderStyled';

const Home = () => {
  return (
    <HomeStyled>
      <Link to="/store">Check out awesome books</Link>
      <img src={photoCover} alt="" />
    </HomeStyled>
  );
};

export default Home;
