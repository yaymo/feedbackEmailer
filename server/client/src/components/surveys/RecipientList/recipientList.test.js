import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RecipientList from './';

configure({ adapter: new Adapter() });

describe('<RecipientList />', () => {
  let recipients = [{
    email: 'email1'
  }, {
    email: 'email2'
  }];

  it('renders', () => {
    const wrapper = shallow(<RecipientList recipients={recipients} />);
    expect(wrapper.length).toBe(1);
  });

  it('renders 2 children', () => {
    const wrapper = shallow(<RecipientList recipients={recipients} />);
    expect(wrapper.find('ul').children().length).toEqual(2);
  });
});