import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import NSA from "../../pages/nsa.png";

class Landing extends Component {
  render() {
    return (
      <div style={{ height: "100vh", width: "100vw"}} className="container valign-wrapper matrix" >
        <div className="row">
        <div className="col-sm-12 cenDisplay center-align"><img src={NSA} alt="NSA" /></div><br />
          <div className="col-sm-12 center-align">
            <br />
            <div className="col s6">
              <Link
                to="/register"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable black accent-3 white-text"
              >
                Register
              </Link>
            </div>
            <div className="col s6">
              <Link
                to="/login"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large btn-flat waves-effect black white-text"
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Landing;