import Navbar from "../components/navBar";
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';

describe('navbar test', () => {
  it('home render correctly', () => {
    const navbar = renderer.create(<Router><Navbar /></Router>).toJSON();
    expect(navbar).toMatchSnapshot();
  });
});
