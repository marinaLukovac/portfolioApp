import { useState } from 'react';
import { Link } from 'react-router-dom';
import { addNewUser, getAllUsers } from '../../service';
import { emailIsValid, passwordIsValid } from '../../validation';
import StyledForm from './StyledForm';
import { v1 as uuidv1 } from 'uuid';
import { useHistory } from 'react-router';

const Register = ({ shoppingCart, setLoggedUser, setUser }) => {
  const [inputName, setInputName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('*****************');
  const [errorArray, setErrorArray] = useState(['', '', '', '', '', '']);
  let history = useHistory();

  const handlerRegistration = (e) => {
    e.preventDefault();
    let errorArr = ['', '', '', '', '', ''];

    if (!inputName) {
      // 0 arr
      errorArr[0] = '*This field is required';
    }
    if (!username) {
      errorArr[1] = '*This field is required';
    }
    if (!emailIsValid(email)) {
      errorArr[2] = '*Email is not valid';
    }
    if (!passwordIsValid(password)) {
      errorArr[3] =
        '*Password should contain minimum 7 characters, number,capital letter and small letter';
    }
    if (password !== passwordConfirm) {
      errorArr[4] = "*Passwords don't match";
    }
    setErrorArray([...errorArr]);
    console.log(
      errorArr.join('').trim(),
      'ovo je vrednost koja se dobija u proveri'
    );
    if (errorArr.join('').trim()) {
      console.log('*neuspesna registracija');
      return null;
    } else {
      setErrorArray(['', '', '', '', '', '']);
    }
    getAllUsers().then((res) => {
      let temp = [...res.data];
      let user = temp.find((user) => user.username === username);
      let userMail = temp.find((user) => user.email === email);
      let errorArr = [...errorArray];

      if (temp.length === 0 || (!user && !userMail)) {
        console.log('create new user');
        let newUser = {
          name: inputName,
          username: username,
          password: password,
          id: uuidv1(),
          shoppingCart: shoppingCart.length !== 0 ? [...shoppingCart] : [],
        };
        addNewUser(newUser);
        setErrorArray(['', '', '', '', '', '']);
        setInputName('');
        setUsername('');
        setPassword('');
        setPasswordConfirm('');
        setEmail('');
        setLoggedUser('user');
        setUser(newUser);
        history.push('/store');
      } else if (user) {
        errorArr[1] = '*Choose another username';
      } else if (userMail) {
        errorArr[2] = '*Use another email';
      }
      setErrorArray([...errorArr]);

      console.log(errorArr);
    });
  };

  return (
    <StyledForm onSubmit={handlerRegistration}>
      <input
        type="text"
        placeholder="Full Name"
        value={inputName}
        onChange={(e) => {
          setInputName(e.target.value);
        }}
      />
      <label>{errorArray[0]}</label>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value.trim());
        }}
      />
      <label>{errorArray[1]}</label>
      <input
        type="text"
        placeholder="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value.trim());
        }}
      />
      <label>{errorArray[2]}</label>
      <input
        type="password"
        placeholder="eg: passworD_123"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value.trim());
        }}
      />
      <label>{errorArray[3]}</label>
      <input
        type="password"
        placeholder="*************"
        value={passwordConfirm}
        onChange={(e) => {
          setPasswordConfirm(e.target.value.trim());
        }}
      />
      <label>{errorArray[4]}</label>

      <input type="submit" value="REGISTER" />
      <Link to="/login">OR LOGIN</Link>
    </StyledForm>
  );
};

export default Register;
