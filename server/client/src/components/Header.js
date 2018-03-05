import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import '../styles/Header.css';


class Header extends Component { 

    renderLoginNav() {
        switch(this.props.auth) {
            case null:
                return;
            case false:
                return (
                    <NavItem eventKey={ 1 } href="/auth/google" id="google">Login</NavItem>
                );
            default: 
                return [
                    <NavItem eventKey={ 2 } key={ 2 } className="nav-item"
                        href="/surveys">Dashboard</NavItem>,
                    <NavItem eventKey={ 3 } key={ 3 } className="nav-item"
                        href="/credits">Credits</NavItem>,
                    <NavItem eventKey={ 4 } key={ 4 } className="nav-item"
                        href="/api/logout">Logout</NavItem>
                ];
        }
    }
    render() {
        return (
                <Navbar collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to={this.props.auth ? '/surveys' : '/'}
                                id="logo">
                                Loop.io
                            </Link>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight>
                            {this.renderLoginNav()}
                        </Nav>
                    </Navbar.Collapse>
            </Navbar>
        );
    }
}
function mapStateToProps(state) {
    return {
        auth: state.auth
    }
}
export default connect(mapStateToProps)(Header);