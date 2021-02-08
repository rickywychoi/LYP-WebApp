import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//Components
import Landing from './components/layout/Landing';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Landing}/>
      </Switch>
    </Router>
  );
}

export default App;
