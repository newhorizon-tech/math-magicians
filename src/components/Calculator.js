import { Component } from 'react';
import Row from './Row';
import './Calculator.css';

import calculate from '../logic/calculate';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = { };
    this.handleCalc = this.handleCalc.bind(this);
  }

  handleCalc(e) {
    const buttonName = e.target.textContent;
    const newState = calculate(this.state, buttonName);
    this.setState(Object.assign(newState));
  }

  render() {
    const { total, next } = this.state;
    const buttons = [
      ['AC', '+/-', '%', '/'],
      ['7', '8', '9', 'x'],
      ['4', '5', '6', '-'],
      ['1', '2', '3', '+'],
      ['0', '.', '='],
    ];
    return (
      <div id="calculator">
        <div id="display-calc">
          {(next == null) ? total : next}
        </div>

        <div id="calc-buttons">
          {buttons.map((row) => (
            <Row key={row} rowButtons={row} handleCalc={() => this.handleCalc} />
          ))}
        </div>
      </div>

    );
  }
}

export default Calculator;
