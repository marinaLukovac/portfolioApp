import { useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { getAllUsers } from '../../service';
import StyledForm from './StyledForm';

const Login = ({ setLoggedUser, setUser }) => {
  const [userName, setUserName] = useState('');
  const [passwordLogin, setPassword] = useState('');
  let history = useHistory();

  const handlerLogin = (e) => {
    e.preventDefault();
    //dodati validaciju
    getAllUsers().then((res) => {
      let temp = [];
      if (res.data) {
        temp = JSON.parse(JSON.stringify([...res.data]));
        //console.log('response je tu ');
      }
      let user = temp.find((user) => user.username === userName);
      if (user) {
        //console.log('user postoji');
        if (user.password === passwordLogin) {
          //console.log('dobra mu je sifra');
          setUser(user);
          if (Object.keys(user).join('').includes('admin')) {
            //console.log('admin je');
            setLoggedUser('admin');
            //console.log('admin se ulogovao');
            history.push('/store'); //dodati token?
          } else {
            //console.log('user see ulogovao');
            setLoggedUser('user');
            history.push('/store'); //dodati token?
          }
        }
      } else {
        //console.log('nema juzera');
        console.log('neuspesna registracija');
      }
    });
    setLoggedUser('');
    setPassword('');
  };
  //smisliti placeholdere
  return (
    <StyledForm onSubmit={handlerLogin}>
      <input
        type="text"
        placeholder="username"
        onInput={(e) => {
          setUserName(e.target.value.trim());
        }}
      />
      <label></label>
      <input
        type="password"
        placeholder="*************"
        onInput={(e) => {
          setPassword(e.target.value.trim());
        }}
      />
      <label></label>
      <input type="submit" value="LOGIN" />
      <Link to="/register">OR REGISTER</Link>
    </StyledForm>
  );
};

export default Login;
