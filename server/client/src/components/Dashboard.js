import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SurveyList from './surveys/SurveyList';

class Dashboard extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <SurveyList />
                <div className="fixed-action-btn">  
                        <Link to="/surveys/new" className="btn-floating btn-large red">
                            <i className="material-icons">add</i>
                        </Link>
                </div>
            </div>
        );
    }
};
function mapStateToProps(state) {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(Dashboard);