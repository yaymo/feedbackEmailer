import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { SurveyList }  from './';
import LoadingIndicator from '../../Loading';
import SurveyFiltersList from '../SurveyFiltersList';

configure({ adapter: new Adapter() });

describe('<SurveyList />', () => {

  it('renders without crashing', () => {
    const wrapper = shallow(<SurveyList surveys={ []} />);
    expect(wrapper).toHaveLength(1);
  });

  it('displays a loading indicator', () => {
    const wrapper = shallow(<SurveyList surveys={[]} isLoading={true}/>);
    expect(wrapper.find(LoadingIndicator)).toHaveLength(1);
  });

  it('renders the filtersList', () => {
    const wrapper = shallow(<SurveyList surveys={[]}/>);
    expect(wrapper.find(SurveyFiltersList)).toHaveLength(1);
  });
});