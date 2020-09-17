import { Button } from "@material-ui/core";
import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://lh3.googleusercontent.com/lV1DhBeSuikQy6fLPhgfNHUxDqterNlur4oB1Z_Yr0NOSiWwQOD0g8gWCjVf1mmMuw"
          alt="slack img"
        />
        <h1>Sign in to Clever Programmer HQ</h1>
        <p>cleverprogrammer.slack.com</p>
        <Button>Sign In with Google</Button>
      </div>
    </div>
  );
}

export default Login;
