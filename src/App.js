import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

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
      <Route path="/">
        <HomePage />
      </Route>

      <Route path="/quotes">
        <QuotePage />
      </Route>

      <Route path="/calculator">
        <CalculatorPage />
      </Route>

    </Router>
  </div>
);

export default App;
