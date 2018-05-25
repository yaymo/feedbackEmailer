import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contacts extends Component {

  static propTypes = {
    children: PropTypes.array
  }

  render() {
    return (
      React.Children.map(this.props.children, (child) => {
        return React.cloneElement(child, {
          email: child.props.email,
          ...child.props
        });
      })
    );
  }
}

export default Contacts;