import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import Zip from './pages/Zip';
import FourOFour from './pages/FourOFour';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/zip">
          <Zip />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path='*' exact>
          <FourOFour/>
        </Route>
      </Switch>
    </Router>
  );
}
