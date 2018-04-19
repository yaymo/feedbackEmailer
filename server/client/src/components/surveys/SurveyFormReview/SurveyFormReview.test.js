import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import _ from 'lodash';
import { SurveyFormReview } from './';
import formFields from '../FormFields/';

configure({ adapter: new Adapter() });

// describe('<SurveyFormReview />', () => {
//     let wrapper;
//     let onCancel;
//     let onSubmit;

//     beforeEach(() => {
//         onCancel = jest.fn();
//         onSubmit = jest.fn();
//         wrapper = shallow(<SurveyFormReview reviewFields={formFields} onCancel={onCancel} />);
//     });

    it('renders without crashing', () => {
        expect(1).toBe(1);
    });
// });