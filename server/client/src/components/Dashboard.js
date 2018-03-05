import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Glyphicon, Button, Tooltip, OverlayTrigger } from 'react-bootstrap';
import SurveyList from './surveys/SurveyList';
import '../styles/Dashboard.css';

class Dashboard extends Component {

    render() {
        const zeroCreditsTooltip = (
            <Tooltip id="credits-tooltip">You must have at least one credit!</Tooltip>
    );
        return (
            <div>
                <SurveyList />
                <div className="fixed-action-btn">
                    {this.props.auth && this.props.auth.credits ?
                        <Link to="/surveys/new" className="btn btn-danger btn-lg plus">
                            <Glyphicon glyph="plus" />
                        </Link>
                        :
                    <OverlayTrigger placement="left" overlay={ zeroCreditsTooltip } >
                        <Button bsSize="large" className="plus zero">
                            <Glyphicon glyph="plus" />
                        </Button>
                    </OverlayTrigger>
                    }
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