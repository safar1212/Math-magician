import Navbar from "../components/navBar";
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';


describe('Navbar', () => {
  test('renders navbar component', () => {
    render(<Router><Navbar /></Router>);

    screen.getByRole('navigation');
  });
});
