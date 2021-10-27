import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import QuotePage from './routes/quotes-page';
// import HomePage from './routes/home-page';
// import CalculatorPage from './routes/calculator-page';

const App = () => (
  <div className="App">
    <header>
      <h1>
        Math Magicians
      </h1>
    </header>

    <Router>
      <Route path="/quotes">
        <QuotePage />
      </Route>
    </Router>
  </div>
);

export default App;
