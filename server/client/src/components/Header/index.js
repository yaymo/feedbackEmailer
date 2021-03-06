import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Header.css';


export class Header extends Component {

    static propTypes = {
        auth: PropTypes.oneOfType([
            PropTypes.bool,
            PropTypes.object
        ])
    }

    static defaultProps = {
        auth: {}
    }

    renderLoginNav() {
        switch(this.props.auth) {
            case null:
                return;
            case false:
                return (
                    <li key={ 1 }><a className="nav-link" href="/auth/google" id="google">Sign up / Login</a></li>
                );
            default:
                return [
                    <li key={ 2 } className="nav-item">
                        <a className="nav-link" href="/surveys">Dashboard</a></li>,
                    <li key={ 3 } className="nav-item">
                        <a className="nav-link" href="/credits">Credits</a></li>,
                    <li key={ 4 } className="nav-item">
                        <a className="nav-link" href="/contacts">Contacts</a></li>,
                    <li key={ 5 } className="nav-item">
                        <a className="nav-link" href="/api/logout">Logout</a></li>
                ];
        }
    }
    render() {
        return (
                <nav className="navbar navbar-expand-md navbar-dark bg-primary sticky-top">
                        <Link to={this.props.auth ? '/surveys' : '/'}
                            id="logo" className="navbar-brand">
                            Loop.io
                        </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            {this.renderLoginNav()}
                        </ul>
                    </div>
            </nav>
        );
    }
}
function mapStateToProps(state) {
    return {
        auth: state.auth
    }
}
export default connect(mapStateToProps)(Header);