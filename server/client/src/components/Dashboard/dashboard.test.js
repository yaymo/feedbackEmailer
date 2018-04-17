import React from 'react';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import { Dashboard } from './';
import SurveyList from '../surveys/SurveyList/';

configure({ adapter: new Adapter() });

describe('<Dashboard />', () => {

    it('renders without crashing', () => {
        const wrapper = shallow(<Dashboard auth={{ credits: 1 }}/>);
        expect(wrapper.length).toBe(1);
    });

    // it('has correct props', () => {
    //     const wrapper = mount(<Dashboard auth={ { credits: 1 } } />);
    //     console.log(wrapper.prop('auth'))
    //     expect(wrapper.prop('auth')).toEqual({ credits: 1 });
    // });

    it('renders the surveyList component', () => {
        const wrapper = shallow(<Dashboard auth={ { credits: 1 } }/>)
        expect(wrapper.find(SurveyList).length).toBe(1);
    });
});