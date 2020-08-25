import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import 'App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import Test from './Test';
import { useStateVaule } from './StateProvider';
import { auth } from './firebase';

const App = () => {
  const [{ user }, dispatch] = useStateVaule();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  console.log(user);

  return (
    <Router>
      <Apps>
        <Switch>
          <Route exact path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          {/* this id default page */}
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
          <Route exact path="/test">
            <Test />
          </Route>
        </Switch>
      </Apps>
    </Router>
  );
};

export default App;

const Apps = styled.section``;
