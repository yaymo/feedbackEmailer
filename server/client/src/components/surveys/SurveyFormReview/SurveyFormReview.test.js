import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { SurveyFormReview } from './';

configure({ adapter: new Adapter() });

describe('<SurveyFormReview />', () => {
    let wrapper;
    let onCancel;
    let onSubmit;

    // beforeEach(() => {
    //     onCancel = jest.fn();
    //     onSubmit = jest.fn();
    //     const reviewFields = { title: 'title', subject: 'subject', body:'body', recipients: 'a@b.com'};
    //     wrapper = shallow(<SurveyFormReview title='a' onCancel={onCancel} submitSurvey={onSubmit} />);
    // });

    // it('renders without crashing', () => {
    //     expect(wrapper.length).toBe(1);
    // });
});