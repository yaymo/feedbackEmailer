import React from 'react';
import { SurveyForm } from './';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<SurveyForm />', () => {
    let wrapper;
    let handleSubmit;
    let onSurveySubmit;

    beforeEach(() => {
        handleSubmit = jest.fn();
        onSurveySubmit = jest.fn();
        wrapper = shallow(<SurveyForm label='' name='a' handleSubmit={handleSubmit} onSurveySubmit={onSurveySubmit} />);
    });
    it('renders without crashing', () => {
        expect(wrapper.length).toBe(1);
    });

    it('calls handleSubmit once', () => {
        wrapper.find('.survey-form').simulate('submit');
        expect(handleSubmit.mock.calls.length).toBe(1);
    });

    it('calls handleSubmit with onSurveySubmit', () => {
        wrapper.find('.survey-form').simulate('submit');
        expect(handleSubmit).toHaveBeenCalledWith(onSurveySubmit);
    });
});