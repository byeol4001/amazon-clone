import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import 'App.css';
import Header from './Header';
import Home from './Home';

const App = () => {
  return (
    <Router>
      <Apps>
        <Switch>
          <Route exact path="/checkout">
            <Header />

            <h1>Checkout</h1>
          </Route>
          <Route exact path="/login">
            <h1>Login Page</h1>
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
