import calculate from "../logic/calculate";

describe('Calculate file testing', () => {

  it('AC test', () => {
    const obj = {
      total: 10,
      next: 3,
      operation: 'AC',
    };

    expect(calculate(obj, 'AC')).toStrictEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  it('0 test', () => {
    const obj = {
      next: '0',
    };

    expect(calculate(obj, '0')).toStrictEqual({});
  });

  it('next test', () => {
    const obj = {
      total: '10',
      next: '5',
      operation: '+',
    };

    expect(calculate(obj, '2')).toStrictEqual({
      total: '10',
      next: '52',
      operation: '+',
    });
  });

});
