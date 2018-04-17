import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SurveyField from './';

configure({ adapter: new Adapter() });

describe('<SurveyField />', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<SurveyField input='' label='label' meta={{ error: {}, touched: false} }/>);
        expect(wrapper.length).toBe(1);
    });

    // it('displays the error text', () => {
    //     const wrapper = shallow(<SurveyField input='' label='' meta={{ errors: { email: 'you must supply an email', touched: true }}}/>);
    //     console.log(wrapper.prop('label');
    //     //expect(wrapper.find('.error').text()).toBe('you must supply an email');
    // });
});