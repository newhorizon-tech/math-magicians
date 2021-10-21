import PropTypes from 'prop-types';
import React from 'react';
import './Calculator.css';

const Button = (props) => {
  const { buttonName } = props;
  return (
    <button type="button">
      {buttonName}
    </button>
  );
};

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
};

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
  }

  render() {
    const { value } = this.state;
    const buttons = [
      ['AC', '+/-', '%', '/'],
      ['7', '8', '9', 'X'],
      ['4', '5', '6', '-'],
      ['1', '2', '3', '+'],
    ];
    return (
      <div id="calculator">
        <div id="display-calc">
          {value}
        </div>

        <div id="calc-buttons">
          <div className="row">
            {buttons[0].map((name) => (
              <Button key={name} buttonName={name} />
            ))}
          </div>

          <div className="row">
            {buttons[1].map((name) => (
              <Button key={name} buttonName={name} />
            ))}
          </div>

          <div className="row">
            {buttons[2].map((name) => (
              <Button key={name} buttonName={name} />
            ))}
          </div>

          <div className="row">
            {buttons[3].map((name) => (
              <Button key={name} buttonName={name} />
            ))}
          </div>

          <div className="row">
            <button type="button" buttonName="0" className="double-button"> 0 </button>
            <Button buttonName="." />
            <Button buttonName="=" />

          </div>

        </div>
      </div>

    );
  }
}

export default Calculator;
