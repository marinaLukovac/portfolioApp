import { NavLink } from 'react-router-dom';
import { HeaderStyled } from './HeaderStyled';
import photo from '../img/books.png';

const Header = ({ shoppingCart, loggedUser, userName }) => {
  return (
    <HeaderStyled>
      <NavLink to="/portfolio" className="logo-placeholder">
        <img src={photo} alt="logo" />
      </NavLink>

      <span>Hello, {userName}</span>

      <nav className="main-nav">
        <NavLink className="nav-link" exact to="/portfolio">
          HOME
        </NavLink>
        <NavLink className="nav-link" to="/store">
          STORE
        </NavLink>
        {loggedUser !== 'admin' ? (
          <NavLink className="nav-link" to="/shopping-cart">
            SHOPPING CART
            <span className="cart-state">
              <span>
                {shoppingCart.reduce((total, item) => total + item.quantity, 0)}
              </span>
            </span>
          </NavLink>
        ) : null}
        <NavLink className="nav-link" to="/login">
          LOGIN
        </NavLink>
      </nav>
    </HeaderStyled>
  );
};

export default Header;
