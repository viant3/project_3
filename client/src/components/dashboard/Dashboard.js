import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import NSA from "../../pages/nsa.png"


class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
render() {
    const { user } = this.props.auth;
return (
      <div className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
           <h6>HELLO, {user.name.split(" ")[0]}</h6>
           <button
              style={{
                width: "60px",
                borderRadius: "1px",
                marginBottom: "10px"
              }}
              onClick={this.onLogoutClick, this.props.history.push("/")}
              
              className="waves-effect waves-light hoverable gray accent-3"
            >
              Logout
            </button><br />
          
              <img src={NSA} className="img-fluid"  />
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