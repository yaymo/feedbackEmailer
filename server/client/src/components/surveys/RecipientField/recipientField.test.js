import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RecipientField from './';

configure({ adapter: new Adapter() });

describe('<RecipientField />', () => {

  it('renders', () => {
    const wrapper = shallow(<RecipientField />);
    expect(wrapper.length).toBe(1);
  });

  it('calls handleToggle onClick', () => {
    const handleToggle = jest.fn();
    const wrapper = shallow(<RecipientField handleToggle={handleToggle} />);
    wrapper.find('.field-input').simulate('click');
    expect(handleToggle).toHaveBeenCalled();
  });

  it('calls handleToggle onBlur', () => {
    const handleToggle = jest.fn();
    const wrapper = shallow(<RecipientField handleToggle={handleToggle}/>);
    wrapper.find('.field-input').simulate('blur');
    expect(handleToggle).toHaveBeenCalled();
  });

  it('displays an error when touched', () => {
    const error = 'error!';
    const wrapper = shallow(<RecipientField meta={{ touched: true, error: error}}/>);
    expect(wrapper.find('.error').text()).toEqual(error);
  });

  it('displays no error when pristine', () => {
    const error = 'error!';
    const wrapper = shallow(<RecipientField meta={{ touched: false, error: error }} />);
    expect(wrapper.find('.error').text()).toEqual('');
  })
});