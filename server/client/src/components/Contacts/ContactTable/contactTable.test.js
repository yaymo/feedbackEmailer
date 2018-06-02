import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { ContactTable } from './';

configure({ adapter: new Adapter() });

describe('<ContactTable />', () => {

  it('renders', () => {
    const wrapper = shallow(<ContactTable />);
    expect(wrapper.length).toBe(1);
  });
});