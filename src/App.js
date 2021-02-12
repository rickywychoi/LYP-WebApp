import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//Redux
import { Provider } from 'react-redux';
import store from './store';

//Components
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path='/' component={Landing}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/register' component={Register}/>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
