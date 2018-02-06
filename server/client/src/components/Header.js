import React, {Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';
import './styles/Header.css';


class Header extends Component {    
    renderLogin() {
        switch(this.props.auth) {
            case null:
                return;
            case false:
                return (
                    <li key="1"><a href="/auth/google">Login With Google</a></li>
                );
            default: 
                return [
                    <li key="1"><a href="/dashboard">Dashboard</a></li>,
                    <li key="2" style={{ margin: '0 10px' }}>
                        <a href="/credits">
                        Credits
                        </a>
                    </li>,
                    <li key="1"><a href="/api/logout">Logout</a></li>
                ];
        }
    }
    render() {
        return (
                <nav>
                    <div className="nav-wrapper">
                        <ul className="left">
                            <Link to={this.props.auth ? '/surveys' : '/'}
                                className="brand-logo nav-item" href="/">
                                Survey.Me
                            </Link>
                        </ul>
                            <ul className="right">
                                {this.renderLogin()}
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