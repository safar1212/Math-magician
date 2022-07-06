import Navbar from "../components/navBar";
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';


describe('Navbar', () => {

  test('Builds the snapchot of the navbar component safely', () => {
    const navbar = renderer.create(<Router><Navbar /></Router>).toJSON();
    expect(navbar).toMatchSnapshot();
  });

  test('renders navbar component', () => {
    render(<Router><Navbar /></Router>);

    screen.getByRole('navigation');
  });

});




