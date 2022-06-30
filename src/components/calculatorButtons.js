import PropTypes from 'prop-types';

const Buttons = (props) => {
  const { handleClick } = props;

  return (
    <div className="buttons-div">
      <button type="button" onClick={handleClick}>AC</button>
      <button type="button" onClick={handleClick}>+/-</button>
      <button type="button" onClick={handleClick}>%</button>
      <button type="button" onClick={handleClick}>÷</button>
      <button type="button" onClick={handleClick}>7</button>
      <button type="button" onClick={handleClick}>8</button>
      <button type="button" onClick={handleClick}>9</button>
      <button type="button" onClick={handleClick}>x</button>
      <button type="button" onClick={handleClick}>4</button>
      <button type="button" onClick={handleClick}>5</button>
      <button type="button" onClick={handleClick}>6</button>
      <button type="button" onClick={handleClick}>-</button>
      <button type="button" onClick={handleClick}>1</button>
      <button type="button" onClick={handleClick}>2</button>
      <button type="button" onClick={handleClick}>3</button>
      <button type="button" onClick={handleClick}>+</button>
      <button type="button" onClick={handleClick}>0</button>
      <button type="button" onClick={handleClick}>.</button>
      <button type="button" onClick={handleClick}>=</button>
    </div>
  );
};

export default Buttons;// to calculator.js

Buttons.propTypes = { handleClick: PropTypes.func.isRequired };
