import React, {Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';


const titleStyles = {
    marginLeft: '20px',
}

const navStyles = {
    marginBottom: '25px'
}

class Header extends Component {
    renderContent() {
        switch(this.props.auth) {
            case null:
                return;
            case false:
                return (
                    <li><a href="/auth/google">Login With Google</a></li>
                );
            default: 
                return [
                    <li key="1"><Payments /></li>,
                    <li key="2" style={{ margin: '0 10px' }}>
                        Credits: {this.props.auth.credits}
                    </li>,
                    <li key="3"><a href="/api/logout">Logout</a></li>
                ];
        }
    }
    render() {
        return (
            <nav style={navStyles}>
                <div className="nav-wrapper">
                    <Link to={this.props.auth ? '/surveys' : '/'}
                        className="left brand-logo" href="/"
                        style={titleStyles}>
                        Survey.Me
                    </Link>
                    <ul className="right">
                        {this.renderContent()}
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