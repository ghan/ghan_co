import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import routes from './data/routes';
import Home from './pages/Home';
import Zip from './pages/Zip';
import FourOFour from './pages/FourOFour';
import ExternalRoute from './components/ExternalRoute';

export default function App() {
  const list = routes.map((r) => {
    if (r.hasOwnProperty('url')) {
      return (
        <Route key={r.tag} exact path={`/${r.tag}`} component={() => { window.location = r.url; return null;} }/>
      );
    } else {
      return null;
    }
  });

  return (
    <Router>
      <Switch>
        { list }
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
