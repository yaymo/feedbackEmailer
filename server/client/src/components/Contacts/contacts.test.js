import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Contacts } from './';
import LoadingIndicator from '../Loading';

configure({ adapter: new Adapter() });

describe('<Contacts />', () => {

  it('renders', () => {
    const wrapper = shallow(<Contacts />);
    expect(wrapper.length).toBe(1);
  });

  it('displays the loading indicator', () => {
    const wrapper = shallow(<Contacts isLoading={true} />);
    expect(wrapper.find(LoadingIndicator).length).toBe(1);
  });

  it('displays 2 children components', () => {
    const wrapper = shallow(<Contacts />);
    expect(wrapper.children().length).toBe(2);
  })
});