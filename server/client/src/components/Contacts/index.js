import React, { Component } from 'react';

class Contacts extends Component {
    render() {
        return (
                React.Children.map(this.props.children, child => {
                    return React.cloneElement(child, {
                        email: child.props.email,
                        ...child.props
                    });
                })
        )
    }
}

export default Contacts;