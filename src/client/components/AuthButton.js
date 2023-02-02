import React from "react";

const AuthButton = ({ auth }) =>
  auth ? (
    <a href="/api/logout">Logout</a>
  ) : (
    <a href="/api/auth/google">Login</a>
  );

export default AuthButton;
