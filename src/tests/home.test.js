import Home from "../pages/home";
import renderer from 'react-test-renderer';

describe('home test', () => {
  it('home render correctly', () => {
    const homePage = renderer.create(<Home />).toJSON();
    expect(homePage).toMatchSnapshot();
  });
});
