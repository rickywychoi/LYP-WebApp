import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// Pages
import Landing from './pages/Landing/Landing'
import DashboardHome from './pages/Dashboard/DashboardHome/DashboardHome'
import UserProfile from './pages/User/UserProfile'
import GroupProfile from './pages/Group/GroupProfile'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Landing}/>
        <Route exact path='/home' component={DashboardHome}/>
        <Route exact path='/user' component={UserProfile}/>
        <Route exact path='/group' component={GroupProfile}/>
      </Switch>
    </Router>
  );
}

export default App;
