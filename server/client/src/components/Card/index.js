import React, { Component } from 'react';
import moment from 'moment';
import './card.css'

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 1
        };
    }

    setActiveTab = (key) => {
        this.setState({ activeTab: key });
    }

    render() {
        const activeTab = this.state.activeTab;

        return (
            <div className="col-sm-12 col-md-6 col-lg-6  my-3">
                <div className="card">
                    <div className="card-header">
                        <ul className="nav nav-tabs card-header-tabs">
                            <li className="nav-item" key={ 1 }
                                onClick={ () => this.setActiveTab(1) }>
                                Overview
                            </li>
                            <li className="nav-item" key={ 2 }
                                onClick={ () => this.setActiveTab(2) }>
                                Data
                            </li>
                            <li className="nav-item" key={ 3 }
                                onClick={ () => this.setActiveTab(3) }>
                                Edit
                            </li>
                        </ul>
                    </div>
                    { activeTab === 1 && 
                        <div className="card-body">
                            <h3 className="card-title">{ this.props.title }</h3>
                            <h5 className="card-text">
                                Loops
                                <div className="survey-loops">{ this.props.body }</div>
                            </h5>
                            <p className="survey-created">
                                Sent on: { moment(this.props.dateSent).format('l') }
                            </p>
                        </div> 
                    }
                    { activeTab === 2 && 
                    <div className="card-data">
                        <a>Yes: { this.props.yes }</a>
                        <a>No: { this.props.no }</a>
                    </div>
                    }
                    { activeTab === 3 &&
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
            )
    }
}
export default Card;