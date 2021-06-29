import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Switch} from 'react-router'
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';


function App() {
  return (
    <Switch>
      <Route path="/signup" exact>
        <Signup />       
      </Route>
      <Route path="/login" exact>
        <Login />         
      </Route>
    </Switch>
  );
}

export default App;
