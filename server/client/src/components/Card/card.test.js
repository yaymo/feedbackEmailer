import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Card from './';
import EditableField from '../utils/EditableField/';

configure({ adapter: new Adapter() });

describe('<Card />', () => {

    it('renders', () => {
        const func = jest.fn();
        const wrapper = shallow(<Card title='My card' body='my body' yes={0} no={0}
                                    dateSent='1/1/2018' onDelete={func}/>);
        expect(wrapper.length).toBe(1);
    });

    it('displays the title and overview by default', () => {
        const func = jest.fn();
        const wrapper = shallow(<Card title='My card' body='my body' yes={0} no={0}
                                    dateSent='1/1/2018' onDelete={func}/>);
        expect(wrapper.find(EditableField).length).toBe(1);
        expect(wrapper.find('.card-text').length).toBe(1);        
    });

    it('calls the tabClickHandler method', () => {
        const func = jest.fn();
        const wrapper = shallow(<Card title='My card' body='my body' yes={0} no={0}
                                    dateSent='1/1/2018' onDelete={func}/>);
        const tabClickMock = jest.fn();
        wrapper.instance().tabClickHandler = tabClickMock;
        wrapper.update();
        wrapper.instance().tabClickHandler('2');
        expect(tabClickMock).toBeCalledWith('2');
    });

    it('toggles the data content', () => {
        const func = jest.fn();
        const wrapper = shallow(<Card title='My card' body='my body' yes={0} no={0}
                                    dateSent='1/1/2018' onDelete={func}/>);

        wrapper.find('.nav-link').at(1).simulate('click', { target: { dataset: { tab: '2'}}});
        expect(wrapper.find('.card-data').length).toBe(1);
        expect(wrapper.find('.card-data a').first().text()).toBe('Yes: 0');
        expect(wrapper.find('.card-data a').last().text()).toBe('No: 0');
    });

    it('toggles the edit content', () => {
        const func = jest.fn();
        const wrapper = shallow(<Card title='My card' body='my body' yes={0} no={0}
                                    dateSent='1/1/2018' onDelete={func}/>);
        wrapper.find('.nav-link').at(2).simulate('click', { target: { dataset: { tab: '3' }}});
        expect(wrapper.find('.delete-survey').length).toBe(1);
    });

    it('calls the onDelete method', () => {
        const func = jest.fn();
        const wrapper = shallow(<Card title='My card' body='my body' yes={0} no={0}
                                    dateSent='1/1/2018' onDelete={func}/>);
        wrapper.find('.nav-link').at(2).simulate('click', { target: { dataset: { tab: '3' }}});
        wrapper.find('.delete-survey').simulate('click', '1');
        expect(func).toHaveBeenCalledWith('1');
    })

});