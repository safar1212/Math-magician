import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import CalculatorPage from '../pages/calculatorPage';

describe('home test', () => {
  it('home render correctly', () => {
    const calcPage = renderer.create(<CalculatorPage />).toJSON();
    expect(calcPage).toMatchSnapshot();
  });

  test('Render CalculatorPage component', () => {
    render(<CalculatorPage />);
  });
});
