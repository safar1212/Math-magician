import React from 'react';
import Buttons from './calculatorButtons';
import calculate from '../logic/calculate';
import operate from '../logic/operate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calculator-div">
        <div className="input">0</div>
        <Buttons />
      </div>

    );
  }
}

export default Calculator;// to app.js
