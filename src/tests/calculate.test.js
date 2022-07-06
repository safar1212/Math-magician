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

});
