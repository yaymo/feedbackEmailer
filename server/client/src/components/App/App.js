import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../Header';
import * as actions from '../../actions';
import Landing from '../Landing';
import Dashboard from '../Dashboard';
import SurveyNew from '../surveys/SurveyNew/';
import Credits from '../Credits/'
import ContactTable from '../ContactTable';
import './App.css';


class App extends Component {

    static propTypes = {
        fetchUser: PropTypes.func
    }

    static defaultProps = {
        fetchUser: () => {}
    }
    componentDidMount() {
        this.props.fetchUser();
    }
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Header />
                        <div className="container">
                            <Route exact path='/' component={Landing} />
                            <Route exact path='/surveys' component={Dashboard} />
                            <Route path='/surveys/new' component={SurveyNew} />
                            <Route path='/credits' component={Credits} />
                            <Route path='/contacts' component={ContactTable} />
                        </div>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default connect(null, actions)(App);