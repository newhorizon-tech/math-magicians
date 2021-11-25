import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import './App.css';

import HomePage from './routes/home-page';
import QuotePage from './routes/quotes-page';
import CalculatorPage from './routes/calculator-page';
import ExpressionCalculator from './components/ExpressionCalculator';

const App = () => (
  <div className="App">
    <Router>
      <header>
        <nav>
          <h1>
            Math Magicians
          </h1>
          <div className="nav-links">
            <Link to="/"> Home </Link>
            <Link to="/calculator"> Calculator  </Link>
            <Link to="/quotes">Quote</Link>
            <Link to="/expression">Expression calculator</Link>

          </div>
        </nav>
      </header>

      <Switch>
        <Route path="/expression">
          <ExpressionCalculator />
        </Route>

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
