import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SurveyList  from './';

configure({ adapter: new Adapter() });

const createTestProps = () => ({
    _id: '1',
    title: 'title',
    body: 'body',
    dateSent: '1/1/2018',
    yes: 0,
    no: 0,
    onDelete: jest.fn()
});

describe('<SurveyList />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<SurveyList surveys={[ createTestProps() ]} />);
    })
    it('renders without crashing', () => {
        expect(wrapper).toHaveLength(1);
    });

    it('renders a card', () => {
        expect(wrapper.find('Card')).toHaveLength(1);
    });
});