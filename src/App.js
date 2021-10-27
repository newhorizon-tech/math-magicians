import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import HomePage from './routes/home-page';
import QuotePage from './routes/quotes-page';
import CalculatorPage from './routes/calculator-page';

const App = () => (
  <div className="App">
    <header>
      <h1>
        Math Magicians
      </h1>
    </header>

    <Router>
      <Switch>
        <Route path="/quotes">
          <QuotePage />
        </Route>

        <Route path="/calculator">
          <CalculatorPage />
        </Route>

        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  </div>
);

export default App;
