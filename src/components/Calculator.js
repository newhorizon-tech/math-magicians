import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
  }

  render() {
    const { value } = this.state;

    return (
      <div id="calculator">
        <h1>
          Calculator
        </h1>

        <h2>
          {value}
        </h2>
      </div>
    );
  }
}

export default Calculator;
