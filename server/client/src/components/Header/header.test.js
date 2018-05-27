import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Header } from './';

configure({ adapter: new Adapter() });

describe('<Header />', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<Header auth={{}}/>);
        expect(wrapper.length).toBe(1);
    });

    it('displays correct nav links when authenticated', () => {
        const wrapper = shallow(<Header auth={{}} />);

        expect(wrapper.find('.nav-link').length).toBe(4);
    });

    it('displays login link when not authenticated', () => {
        const wrapper = shallow(<Header auth={false} />);
        expect(wrapper.find('.nav-link').length).toBe(1);
    })
})