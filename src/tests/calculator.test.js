import Calculator from '../components/calculator';
import  {render} from '@testing-library/react';
import renderer from 'react-test-renderer';

describe('Calculator page of the App', () => {
    test('Builds the snapchot of the Calculator component safely', () => {
      const calc = renderer.create(<Calculator />);
      expect(calc.toJSON()).toMatchSnapshot();
    });

    test('Render Calculator component', () => {
      render(<Calculator />);
    });

  });






// describe('Calculator', () => {
//   test('renders calculator component', () => {
//     render(<Calculator />);

//     screen.getByRole(div);
//   });
// });
