import React from 'react';
import Calculator from './components/Calculator';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1> Math Magicians </h1>
        </header>
        <Calculator />
      </div>
    );
  }
}

export default App;
