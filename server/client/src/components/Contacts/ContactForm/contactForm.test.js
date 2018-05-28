import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<contactForm />', () => {
  it('renders', () => {
    const wrapper = shallow(<contactForm />);
    expect(wrapper.length).toBe(1);
  });

  it('calls onSubmit', () => {
    const onSubmit = jest.fn();
    const wrapper = shallow(<contactForm onContactSubmit={onSubmit} />);
    wrapper.simulate('submit');
    wrapper.update();
    expect(onSubmit).toBeCalled();
  });

  it('disabled Add when pristine', () => {
    const handleClear = jest.fn();
    const wrapper = shallow(<contactForm pristine={true} handleClear={handleClear} />);
    wrapper.find('.btn-info').simulate('click');
    expect(handleClear).not.toHaveBeenCalled();
  })
});