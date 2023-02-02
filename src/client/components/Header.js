import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import AuthButton from "./AuthButton";

const Header = ({ auth }) => (
  <div>
    <Link to="/">React SSR</Link>
    <div>
      <Link to="/users">Users</Link>
      <Link to="/admins">Admins</Link>
      <AuthButton auth={auth} />
    </div>
  </div>
);

function mapStateToProps({ auth }) {
  return {
    auth,
  };
}

export default connect(mapStateToProps)(Header);
