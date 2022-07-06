import Quote from '../pages/quote';
import renderer from 'react-test-renderer';
import {render} from '@testing-library/react';

describe('quote test', () => {

  it('quote render correctly', () => {
    const quotePage = renderer.create(<Quote />).toJSON();
    expect(quotePage).toMatchSnapshot();
  });

  test('Render Calculator component', () => {
    render(<Quote />);
  });
});
