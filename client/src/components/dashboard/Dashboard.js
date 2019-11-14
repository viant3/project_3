import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";


class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
render() {
    const { user } = this.props.auth;
return (
      <div style={{ height: "10vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
              <b>HELLO,</b> {user.name.split(" ")[0]}
              
               <button
              style={{
                width: "100px",
                borderRadius: ".5px",
                letterSpacing: ".5px",
                marginTop: "1rem"
              }}
              onClick={this.onLogoutClick}
              className="btn  waves-effect waves-light hoverable gray accent-3"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    );
  }
}
Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);