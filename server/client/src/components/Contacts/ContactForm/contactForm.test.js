import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {ContactForm} from './';

configure({ adapter: new Adapter() });

describe('<ContactForm />', () => {

  it('renders', () => {
    const wrapper = shallow(<ContactForm onContactSubmit={jest.fn()} handleClear={jest.fn()}/>);
    expect(wrapper.length).toEqual(1);
  });

  it('calls onSubmit', () => {
    const onSubmit = jest.fn();
    const wrapper = shallow(<ContactForm onContactSubmit={onSubmit} handleClear={jest.fn()}/>);
    wrapper.find('#contact-form').simulate('submit');
    expect(onSubmit).toHaveBeenCalled();
  });
});