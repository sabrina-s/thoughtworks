import React from 'react';
import './App.css';
import Navbar from './Users/Navbar';
import Dogs from './Dogs/Dogs';
import LoginPage from './Users/LoginPage';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Dogs} />
          <Route path='/login' component={LoginPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
