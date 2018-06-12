import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SurveyFiltersList from './';

configure({ adapter: new Adapter() });

describe('<SurveyFiltersList />', () => {

  it('renders without crashing', () => {
    const wrapper = shallow(<SurveyFiltersList />);
    expect(wrapper.length).toEqual(1);
  });

  it('calls handleChange with target value', () => {
    const handleChange = jest.fn();
    const inputValue = 'my value';
    const wrapper = shallow(<SurveyFiltersList handleChange={handleChange} />);
    wrapper.find('input').simulate('change', { target: { value: inputValue } });
    expect(handleChange).toHaveBeenCalledWith(inputValue);
  });

  it('calls handleSortAsc', () => {
    const handleSortAsc = jest.fn();
    const wrapper = shallow(<SurveyFiltersList handleSortAsc={handleSortAsc} />);
    wrapper.find('#btn-asc').simulate('click');
    expect(handleSortAsc).toHaveBeenCalled();
  });

  it('calls handleSortDesc', () => {
    const handleSortDesc = jest.fn();
    const wrapper = shallow(<SurveyFiltersList handleSortDesc={handleSortDesc}/>);
    wrapper.find('#btn-desc').simulate('click');
    expect(handleSortDesc).toHaveBeenCalled();
  });
});