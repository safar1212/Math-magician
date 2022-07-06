import Quote from '../pages/quote';
import renderer from 'react-test-renderer';

describe('quote test', () => {
  it('quote render correctly', () => {
    const quotePage = renderer.create(<Quote />).toJSON();
    expect(quotePage).toMatchSnapshot();
  });
});
