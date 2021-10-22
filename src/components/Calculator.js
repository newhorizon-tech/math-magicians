import { useState } from 'react';
import Row from './Row';
import './Calculator.css';

import calculate from '../logic/calculate';

const Calculator = () => {
  const [calcObj, setCalcObj] = useState({});
  const { next, total } = calcObj;

  const handleCalc = (e) => {
    const buttonName = e.target.textContent;
    const newState = calculate(calcObj, buttonName);
    setCalcObj(Object.assign(newState));
  };

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
          <Row key={row} rowButtons={row} handleCalc={() => handleCalc} />
        ))}
      </div>
    </div>

  );
};

export default Calculator;
