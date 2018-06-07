import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { SurveyNew } from './';
// import { SurveyForm } from '../SurveyForm';

configure({ adapter: new Adapter() });

describe('<SurveyNew />', () => {

  it('renders', () => {
    const wrapper = shallow(<SurveyNew />);
    expect(wrapper.length).toBe(1);
  });

  // the nested components are rendering as reduxForms
  // TODO: figure out if it's possible to render them as unconnected components
  // it('displays the <SurveyForm /> by default', () => {
  //   const wrapper = shallow(<SurveyNew />);
  //   console.log(wrapper.debug());
  //   expect(wrapper.find(SurveyForm).length).toBe(1);
  // });
});
