import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const login = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push('/');
      })
      .catch((e) => alert(e.message));
  };
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push('/');
      })
      .catch((e) => alert(e.message));
  };
  return (
    <Logins>
      <Link to="/">
        <img
          src="data:image/png;base64,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"
          alt=""
          className="login__logo"
        />
      </Link>
      <div className="login__container">
        <h1>SIGN IN</h1>
        <form>
          <h5>E-Mail</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" onClick={login}>
            Sign In
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
        <button onClick={register}>Create your Amazon Account</button>
      </div>
    </Logins>
  );
};

export default Login;

const Logins = styled.section`
  background-color: #fff;
  height: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  .login__logo {
    width: 100px;
    object-fit: contain;
    margin: 20px 0;
  }
  .login__container {
    width: 300px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid lightgray;
    h1 {
      font-weight: 500;
      font-size: 25px;
      margin-bottom: 20px;
    }
    form > h5 {
      margin-bottom: 5px;
    }
    form > input {
      height: 30px;
      margin-bottom: 10px;
      background-color: #fff;
      width: 98%;
      border: 1px solid #ccc;
      border-radius: 3px;
    }
    form > button {
      width: 100%;
      height: 30px;
      margin-top: 10px;
      padding: 5px;
      background-color: #f0c14b;
      border: 1px solid;
      border-color: #a88734 #9c7e31 #846a29;
      color: #111;
    }
  }
`;
