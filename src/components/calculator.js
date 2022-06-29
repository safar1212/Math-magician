import React from 'react';
import Buttons from './calculatorButtons';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { next: '', operation: '', total: '' };
  }

  render() {
    const handleClick = (event) => {
      this.setState((state) => calculate(state, event.target.textContent));
    };
    const { next, operation, total } = this.state;

    return (
      <div className="calculator-div">
        <div className="input">
          {total}
          {' '}
          {operation}
          {' '}
          {next}
        </div>
        <Buttons handleClick={handleClick} />
      </div>

    );
  }
}

export default Calculator;// to app.js
