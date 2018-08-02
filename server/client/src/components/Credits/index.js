import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Payments from "../Payments/";
import "./credits.css";

class Credits extends Component {
  static propTypes = {
    auth: PropTypes.object
  };

  static defaultProps = {
    auth: {}
  };
  render() {
    console.log(this.props.auth);
    const { auth } = this.props;
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container-fluid">
          <h1 className="display-4 text-center">
            <u>CREDITS</u>
          </h1>
          <div className="credit-counts">
            <h2>
              Available Credits:{" "}
              <span
                className={
                  auth && auth.credits <= 5 ? "low-credits" : "credits"
                }
              >
                {auth && auth.credits}
              </span>{" "}
            </h2>
            <h2>
              Total Credits Used:{" "}
              <span className="credits"> {auth && auth.usedCredits} </span>
            </h2>
          </div>
          <Payments />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}
export default connect(mapStateToProps)(Credits);
