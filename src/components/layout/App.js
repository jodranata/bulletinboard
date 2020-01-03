import React from 'react';
import { BrowserRouter as Router, HashRouter, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Dashboard from '../dashboard/Dashboard';
import Projectdetail from '../project/Projectdetail';
import Signin from '../auth/Signin';
import Signup from '../auth/Signup';
import Createproject from '../project/Createproject';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <HashRouter basename="/">
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/project/:id" component={Projectdetail} />
            <Route path="/signin" component={Signin} />
            <Route path="/signup" component={Signup} />
            <Route path="/create" component={Createproject} />
          </Switch>
        </HashRouter>
      </div>
    </Router>
  );
}
