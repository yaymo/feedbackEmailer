import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import contactField from './';

configure({ adapter: new Adapter() });

describe('<contactField />', () => {

  it('renders', () => {
    const wrapper = shallow(<contactField />);
    expect(wrapper.length).toBe(1);
  });
});