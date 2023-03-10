import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import AuthButton from "./AuthButton";

const Header = ({ auth }) => (
  <nav>
    <div className="nav-wrapper">
      <Link to="/" className="brand-logo">
        React SSR
      </Link>
      <ul className="right">
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/admins">Admins</Link>
        </li>
        <li>
          <AuthButton auth={auth} />
        </li>
      </ul>
    </div>
  </nav>
);

function mapStateToProps({ auth }) {
  return {
    auth,
  };
}

export default connect(mapStateToProps)(Header);
