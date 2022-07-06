import CalculatorPage from '../pages/calculatorPage';
import renderer from 'react-test-renderer';
import  {render} from '@testing-library/react';

describe('home test', () => {
  it('home render correctly', () => {
    const calcPage = renderer.create(<CalculatorPage />).toJSON();
    expect(calcPage).toMatchSnapshot();
  });

  test('Render CalculatorPage component', () => {
    render(<CalculatorPage />);
  });
});
