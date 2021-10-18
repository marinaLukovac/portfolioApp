import { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router';
import { getAllBooks } from '../../service';
import Store from '../Store/Store';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import Login from '../Login/Login';
import Register from '../Login/Register';
import SingleBook from '../SingleBook/SingleBook';
import MainStyled from './MainStyled';
import Home from './Home';

const Main = ({
  setShoppingCart,
  shoppingCart,
  setLoggedUser,
  setUser,
  loggedUser,
  user,
}) => {
  const [allBooks, setAllBooks] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [updateStore, setUpdatedStore] = useState(false);
  useEffect(() => {
    getAllBooks().then((res) => {
      setAllBooks(JSON.parse(JSON.stringify([...res.data])));
      setFiltered([...res.data]);
      console.log('this rendered');
    });
  }, [updateStore]);
  return (
    <MainStyled>
      <Switch>
        <Route exact path="/portfolio">
          <Home />
        </Route>

        <Route exact path="/store">
          <Store
            setShoppingCart={setShoppingCart}
            loggedUser={loggedUser}
            allBooks={allBooks}
            setAllBooks={setAllBooks}
            filtered={filtered}
            setFiltered={setFiltered}
            updateStore={updateStore}
            setUpdatedStore={setUpdatedStore}
          ></Store>
        </Route>

        <Route exact path="/store/:id">
          <SingleBook allBooks={allBooks}></SingleBook>
        </Route>

        {loggedUser !== 'admin' ? (
          <Route exact path="/shopping-cart">
            <ShoppingCart
              setShoppingCart={setShoppingCart}
              shoppingCart={shoppingCart}
              loggedUser={loggedUser}
              user={user}
            ></ShoppingCart>
          </Route>
        ) : null}

        <Route exact path="/login">
          <Login setLoggedUser={setLoggedUser} setUser={setUser} />
        </Route>

        <Route exact path="/register">
          <Register
            shoppingCart={shoppingCart}
            setLoggedUser={setLoggedUser}
            setUser={setUser}
          />
        </Route>
      </Switch>
    </MainStyled>
  );
};

export default Main;
