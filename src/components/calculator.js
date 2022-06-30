// import React from 'react';
import { useState } from 'react';
import Buttons from './calculatorButtons';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState(0);

  const handleClick = (event) => {
    setState((state) => calculate(state, event.target.textContent));
  };

  return (
    <div className="calculator-div">
      <div className="input">
        {state.total}
        {state.operation}
        {state.next}
      </div>
      <Buttons handleClick={handleClick} />
    </div>

  );
};

export default Calculator;// to app.js
