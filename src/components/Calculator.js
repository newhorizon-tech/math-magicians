import { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import './Calculator.css';

const Row = (props) => {
  const { rowButtons } = props;
  return (
    <div className="row">
      {rowButtons.map((name) => (
        <Button key={name} buttonName={name} />
      ))}
    </div>
  );
};

Row.propTypes = {
  rowButtons: PropTypes.arrayOf(PropTypes.string).isRequired,
};

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = { final: 0 };
  }

  render() {
    const { final } = this.state;
    const buttons = [
      ['AC', '+/-', '%', '/'],
      ['7', '8', '9', 'X'],
      ['4', '5', '6', '-'],
      ['1', '2', '3', '+'],
      ['0', '.', '='],
    ];
    return (
      <div id="calculator">
        <div id="display-calc">
          {final}
        </div>

        <div id="calc-buttons">
          {buttons.map((row) => (
            <Row key={row} rowButtons={row} />
          ))}
        </div>
      </div>

    );
  }
}

export default Calculator;
