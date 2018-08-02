import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import PropTypes from "prop-types";

class VerifyAuth extends Component {
  static propTypes = {
    auth: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
    children: PropTypes.any
  };

  static defaultProps = {
    auth: {},
    children: {}
  };

  componentDidMount() {
    const { auth } = this.props;
    if (!auth) {
      return <Redirect to="/" />;
    }
  }

  render() {
    if (this.props.auth) {
      return this.props.children;
    } else {
      return (
        <h3 className="text-center mt-5">
          You must <a href="/">login</a> to complete this action
        </h3>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps)(VerifyAuth);
