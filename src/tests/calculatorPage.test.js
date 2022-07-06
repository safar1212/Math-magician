import CalculatorPage from '../pages/calculatorPage';
import renderer from 'react-test-renderer';

describe('home test', () => {
  it('home render correctly', () => {
    const calcPage = renderer.create(<CalculatorPage />).toJSON();
    expect(calcPage).toMatchSnapshot();
  });
});
