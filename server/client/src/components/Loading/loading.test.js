import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LoadingIndicator from './';

configure({ adapter: new Adapter() });

describe('<Loading />', () => {

  it('renders', () => {
    const wrapper = shallow(<LoadingIndicator />);
    expect(wrapper.length).toBe(1);
  });
});