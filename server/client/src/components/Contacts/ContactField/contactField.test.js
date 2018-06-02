import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ContactField from './';

configure({ adapter: new Adapter() });

describe('<ContactField />', () => {

  it('renders', () => {
    const wrapper = shallow(<ContactField />);
    expect(wrapper.length).toBe(1);
  });

  it('displays error text when touched', () => {
    const error = 'error!';
    const wrapper = shallow(<ContactField meta={{ touched: true, error: error }}/>);
    expect(wrapper.find('.error').text()).toBe(error);
  });

  it('displays no error text when pristine', () => {
    const error = 'error!';
    const wrapper = shallow(<ContactField meta={{ touched: false, error: error }} />);
    expect(wrapper.find('.error').text()).toBe('');
  });
});