import Home from "../pages/home";
import renderer from 'react-test-renderer';
import  {render} from '@testing-library/react';

describe('home test', () => {

  it('home render correctly', () => {
    const homePage = renderer.create(<Home />).toJSON();
    expect(homePage).toMatchSnapshot();
  });

  test('Render Home component', () => {
    render(<Home />);
  });
});
