import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { SurveyList }  from './';
import LoadingIndicator from '../../Loading';

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

  it('renders without crashing', () => {
    const wrapper = shallow(<SurveyList surveys={[ createTestProps() ]} />);
    expect(wrapper).toHaveLength(1);
  });

  it('renders a card', () => {
    const wrapper = shallow(<SurveyList surveys={[ createTestProps() ]} />);
    expect(wrapper.find('Card')).toHaveLength(1);
  });

  it('displays a loading indicator', () => {
    const wrapper = shallow(<SurveyList surveys={[ createTestProps() ]} isLoading={true}/>);
    expect(wrapper.find(LoadingIndicator)).toHaveLength(1);
  });

  it('calls handleChange with target value', () => {
    const handleChange = jest.fn();
    const inputValue = 'my value';
    const wrapper = shallow(<SurveyList surveys={[ createTestProps() ]} handleChange={handleChange} />);
    wrapper.find('input').simulate('change', { target: { value: inputValue } });
    expect(handleChange).toHaveBeenCalledWith(inputValue);
  });
});