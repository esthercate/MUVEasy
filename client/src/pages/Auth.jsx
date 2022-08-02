import React from "react";
import Login from "../components/UI/Login";
import Register from "../components/UI/Register";

const Auth = ({ user, onLogin }) => {

  return (
    <div>
      {user ? <Login onLogin={onLogin} /> : <Register onLogin={onLogin} />}
    </div>
  );
};

export default Auth;
