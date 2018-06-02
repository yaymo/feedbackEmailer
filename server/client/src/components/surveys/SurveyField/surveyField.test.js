import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SurveyField from './';

configure({ adapter: new Adapter() });

describe('<SurveyField />', () => {

  it('renders without crashing', () => {
    const wrapper = shallow(<SurveyField />);
    expect(wrapper.length).toBe(1);
  });

  it('displays error text when touched', () => {
    const error = 'error!';
    const wrapper = shallow(<SurveyField meta={{ touched: true, error: error }} />);
    expect(wrapper.find('.error').text()).toBe(error);
  });

  it('displays no error when pristine', () => {
    const error = 'error!';
    const wrapper = shallow(<SurveyField meta={{ touched: false, error: error }} />);
    expect(wrapper.find('.error').text()).toBe('');
  });
});