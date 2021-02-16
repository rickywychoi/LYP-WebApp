import React, {useEffect}from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//Redux
import { Provider } from 'react-redux';
import store from './store';
import setAuthToken from './config/setAuthToken';
import {loadUser} from './actions/auth';

//Components
import PrivateRoute from './components/routing/PrivateRoute'
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Test from './components/Test'

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
          <PrivateRoute exact path='/test' component={Test}/>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
