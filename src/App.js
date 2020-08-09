import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import 'App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';

const App = () => {
  return (
    <Router>
      <Apps>
        <Switch>
          <Route exact path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route exact path="/login">
            <h1>Login Page</h1>
            <Login />
          </Route>
          {/* this id default page */}
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </Apps>
    </Router>
  );
};

export default App;

const Apps = styled.section``;
