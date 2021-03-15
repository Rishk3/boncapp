import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

function Login() {
  useEffect(() => {
    document.title = "Login to Bonc";
  }, []);

  return (
    <div className="login">
      <div className="inner">
        <div className="main">
          <div className="inner_main">
            <img
              className="logo_img"
              src="https://boncapp.com/images/logo-dark.png"
              alt="boncapp logo"
            />
            <div className="bold_h2">bonc</div>
            <p>New User? go to SignUp Page</p>
            <form action="">
              <TextField
                className="normal_input"
                id="outlined-basic"
                label="Username Or Email"
                variant="outlined"
              />
              <TextField
                className="normal_input"
                id="outlined-basic"
                label="Password"
                variant="outlined"
              />
              <div className="forget_section">
                <p>Forgot Password?</p>
              </div>
              <Button
                className="log_btn"
                variant="contained"
                color="primary"
                type="submit"
              >
                LOG IN
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
