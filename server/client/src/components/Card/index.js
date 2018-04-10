import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import './card.css'

class Card extends Component {

    static propTypes = {
        title: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        yes: PropTypes.number.isRequired,
        no: PropTypes.number.isRequired,
        dateSent: PropTypes.string.isRequired,
        onDelete: PropTypes.func.isRequired
    }

    static defaultProps = {
        title: '',
        body: '',
        yes: 0,
        no: 0,
        dateSent: '1/1/1970',
        onDelete: () => {}
    }
    constructor(props) {
        super(props);
        this.state = {
            activeTab: "1"
        };
    }

    tabClickHandler = ( evt ) => {
        this.setState({ activeTab: evt.target.dataset.tab });
    }

    render() {
        const { activeTab } = this.state;

        return (
            <div className="col-sm-12 col-md-12 col-lg-6  my-3">
                <div className="card">
                    <div className="card-header">
                        <ul className="nav nav-tabs card-header-tabs">
                            <li className="nav-item" key={ 1 } >
                                <a className={"nav-link " + (activeTab === '1' ? "active" : "")} data-tab="1"
                                onClick={ this.tabClickHandler }> Overview </a>
                            </li>
                            <li className="nav-item" key={ 2 } >
                            <a className={"nav-link " + (activeTab === '2' ? "active" : "")} data-tab="2"
                            onClick={ this.tabClickHandler }> Data </a>
                            </li>
                            <li className="nav-item" key={ 3 }>
                                <a className={"nav-link " + (activeTab === '3' ? "active" : "")} data-tab="3"
                                onClick={ this.tabClickHandler }> Edit </a>
                            </li>
                        </ul>
                    </div>
                    <div className="card-body">
                        <h3 className="card-title">{ this.props.title }</h3>
                    { activeTab === "1" && 
                        <h5 className="card-text">
                            Loops
                            <div className="survey-loops">{ this.props.body }</div>
                        </h5>    
                    }
                    { activeTab === "2" && 
                    <div className="card-data">
                        <a>Yes: { this.props.yes }</a>
                        <a>No: { this.props.no }</a>
                        <p className="survey-created pull-right">
                            Sent: { moment(this.props.dateSent).format('MMMM Do, YYYY') }
                        </p>
                    </div>
                    }
                    { activeTab === "3" &&
                        <div>
                            <a href="/surveys"
                                onClick={ this.props.onDelete }
                                className="delete-survey">
                                Delete
                            </a>
                        </div>
                    }
                    </div>
                </div>
            </div>
            )
    }
}
export default Card;