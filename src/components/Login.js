import React from "react";
import PropTypes from "prop-types";

const Login = props => (
  <div className="login">
    <h2>Login</h2>
    <p>
      Entre para contar suas faltas (e o que mais você achar que da pra contar
      aqui)
    </p>
    <button onClick={() => props.authenticate("Google")}>
      Entrar com Google
    </button>
    <button onClick={() => props.authenticate("Facebook")}>
      Entrar com Facebook
    </button>
  </div>
);

Login.propTypes = {
  authenticate: PropTypes.func.isRequired
};

export default Login;
