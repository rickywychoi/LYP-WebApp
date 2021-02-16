import React, {useEffect}from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//Redux
import { Provider } from 'react-redux';
import store from './store';
import setAuthToken from './config/setAuthToken';
import {loadUser} from './actions/auth';

// Pages
import Landing from './pages/Landing/Landing'
import DashboardHome from './pages/Dashboard/DashboardHome/DashboardHome'
import UserProfile from './pages/User/UserProfile'
import GroupProfile from './pages/Group/GroupProfile'

//Components
import PrivateRoute from './components/routing/PrivateRoute'
import Login from './components/auth/Login';
import Register from './components/auth/Register';

if(localStorage.token) {
  setAuthToken(localStorage.token);
}



const App = () => {

  useEffect(()=> {
    store.dispatch(loadUser());
  }, []);
  
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path='/' component={Landing}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/register' component={Register}/>
          <Route exact path='/home' component={DashboardHome}/>
          <Route exact path='/user' component={UserProfile}/>
          <Route exact path='/group' component={GroupProfile}/>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
