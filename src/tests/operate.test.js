
import operate from "../logic/operate";

describe('Operate file testing', () => {
  it('test addition', () => {
    expect(operate(2, 2, '+')).toBe('4');
  });
  it('test subtract', () => {
    expect(operate(10, 2, '-')).toBe('8');
  });
  it('test multiply', () => {
    expect(operate(2, 3, 'x')).toBe('6');
  });
  it('test divide', () => {
    expect(operate(4, 2, '÷')).toBe('2');
  });
  it('test modulo', () => {
    expect(operate(11, 5, '%')).toBe('1');
  });
});
