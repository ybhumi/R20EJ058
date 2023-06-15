import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AllTrains from './pages/AllTrains';
import SingleTrain from './pages/SingleTrain';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={AllTrains} />
        <Route path="/train/:id" component={SingleTrain} />
      </Switch>
    </Router>
  );
}

export default App;