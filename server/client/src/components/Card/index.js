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

    setActiveTab = (activeTab) => {
        this.setState({ activeTab });
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
                                <a className={"nav-link " + (activeTab === 1 ? "active" : "")} href="#">Overview</a>
                            </li>
                            <li className="nav-item" key={ 2 }
                                onClick={ () => this.setActiveTab(2) }>
                            <a className={"nav-link " + (activeTab === 2 ? "active" : "")} href="#">Data</a>
                            </li>
                            <li className="nav-item" key={ 3 }
                                onClick={ () => this.setActiveTab(3) }>
                                <a className={"nav-link " + (activeTab === 3 ? "active" : "")} href="#">Edit</a>
                            </li>
                        </ul>
                    </div>
                    <div className="card-body">
                        <h3 className="card-title">{ this.props.title }</h3>
                    { activeTab === 1 && 
                        <div>
                            <h5 className="card-text">
                                Loops
                                <div className="survey-loops">{ this.props.body }</div>
                            </h5>
                            <p className="survey-created">
                                Sent: { moment(this.props.dateSent).format('MMMM Do, YYYY') }
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
            </div>
            )
    }
}
export default Card;