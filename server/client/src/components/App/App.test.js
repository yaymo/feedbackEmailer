import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import App from './App';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const middlewares = [];
const mockStore = configureStore(middlewares);

describe('root app', () => {
    const initialState = {};
    const store = mockStore(initialState);

    it('renders without crashing', () => {
    const wrapper = shallow(<Provider store={store}><App/></Provider>);
    expect(wrapper.find(App).length).toBe(1);
    });
})
