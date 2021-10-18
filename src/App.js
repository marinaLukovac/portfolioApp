import GlobalStyle from './components/common/GlobalStyle';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/common/Header';
import Main from './components/common/Main';
import { useState } from 'react';

function App() {
  const [shoppingCart, setShoppingCart] = useState([]);
  const [loggedUser, setLoggedUser] = useState('guest');
  const [user, setUser] = useState({ username: '', shoppingCart: [] });
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header
        userName={user.username ? user.username : 'Guest'}
        setShoppingCart={setShoppingCart}
        shoppingCart={shoppingCart}
        loggedUser={loggedUser}
      />
      <Main
        shoppingCart={shoppingCart}
        setShoppingCart={setShoppingCart}
        loggedUser={loggedUser}
        setLoggedUser={setLoggedUser}
        setUser={setUser}
        user={user}
      />
    </BrowserRouter>
  );
}

export default App;
