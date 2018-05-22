import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import axios from 'axios';
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
        dateSent: '',
        onDelete: () => {}
    }
    constructor(props) {
        super(props);
        this.state = {
            activeTab: '1',
            isEditing: false,
            text: this.props.title
        };
    }

    tabClickHandler = ( evt ) => {
        this.setState({ activeTab: evt.target.dataset.tab });
    }

    handleToggle = () => {
        this.setState({ isEditing: !this.state.isEditing });
        if(this.state.isEditing) {
            this.handleBlur(this.props._id, this.state.text);
        }
    }

    handleBlur = async (id, text) => {
        await axios.put(`/api/surveys/${id}`, { title: text });
    }

    handleChange = (e) => {
        this.setState({ text: e.target.value });
    }

    render() {
        const { activeTab, isEditing, text } = this.state;
        return (
            <div className="col-sm-12 col-md-12 col-lg-6  my-3">
                <div className="card">
                    <div className="card-header">
                        <ul className="nav nav-tabs card-header-tabs">
                            <li className="nav-item" key={ 1 } >
                                <a className={"nav-link " + (activeTab === "1" ? "active" : "")} data-tab="1"
                                onClick={ this.tabClickHandler }> Overview </a>
                            </li>
                            <li className="nav-item" key={ 2 } >
                            <a className={"nav-link " + (activeTab === "2" ? "active" : "")} data-tab="2"
                            onClick={ this.tabClickHandler }> Data </a>
                            </li>
                            <li className="nav-item" key={ 3 }>
                                <a className={"nav-link " + (activeTab === "3" ? "active" : "")} data-tab="3"
                                onClick={ this.tabClickHandler }> Edit </a>
                            </li>
                        </ul>
                    </div>
                    <div className="card-body">
                        {  isEditing ? 
                            <input value={text} onChange={this.handleChange} onBlur={this.handleToggle} className="title-input" autoFocus/> :
                            <div className="card-title">
                                <h3 onClick={this.handleToggle}>{text}</h3>
                            </div>
                        }
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
                            <button type="button" className="btn btn-outline-danger delete-survey"
                                onClick={ this.props.onDelete }>
                                Delete
                            </button>
                        }
                    </div>
                </div>
            </div>
            )
    }
}
export default Card;