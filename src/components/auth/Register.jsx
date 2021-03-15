import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";

import IconButton from "@material-ui/core/IconButton";

import OutlinedInput from "@material-ui/core/OutlinedInput";

import InputAdornment from "@material-ui/core/InputAdornment";

import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import MenuItem from "@material-ui/core/MenuItem";

function Register() {
  useEffect(() => {
    document.title = "Register to Bonc";
  });
  const languages = [
    {
      value: "Preferred language: English",
    },
    {
      value: "Preferred language: Dutch",
    },
  ];
  const trailVersions = [
    {
      value: "Free trial Just me",
    },
    {
      value: "Free trial Together",
    },
    {
      value: "Free trial Teamwork",
    },
  ];

  const [lang, setLang] = useState("Preferred language: English");
  const [trial, setTrail] = useState("Free trial Just me");

  const handleLanguage = (event) => {
    setLang(event.target.value);
  };
  const handleTrials = (event) => {
    setTrail(event.target.value);
  };
  const [values, setValues] = useState({
    password: "",

    showPassword: false,
  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className="register">
      <div className="inner">
        <div className="top_signin">
          <Button variant="contained" color="primary">
            Sign In
          </Button>
        </div>
        <div className="top_section">
          <div className="">
            <img
              className="logo_img"
              src="https://boncapp.com/images/logo-dark.png"
              alt="boncapp logo"
            />
          </div>
          <div>
            <div className="h1">Try Bonc for free</div>
            <div className="h2">
              Free trial for 14 days. No credit card required.
            </div>
          </div>
          {/* form starts */}

          <div className="form">
            <form action="">
              <div className="name">
                <TextField
                  className="f_name"
                  id="outlined-basic"
                  label="First Name"
                  variant="outlined"
                />
                <TextField
                  className="l_name"
                  id="outlined-basic"
                  label="Last Name"
                  variant="outlined"
                />
              </div>
              <TextField
                className="normal_input"
                id="outlined-basic"
                label="Email Address"
                variant="outlined"
              />
              <FormControl className="normal_input">
                <OutlinedInput
                  id="standard-adornment-password"
                  type={values.showPassword ? "text" : "password"}
                  value={values.password}
                  className="pt"
                  placeholder="Password"
                  onChange={handleChange("password")}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {values.showPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
              <TextField
                className="normal_input"
                id="outlined-basic"
                label="Re-enter Password"
                variant="outlined"
              />

              <TextField
                className="normal_input"
                id="outlined-basic"
                label="Type your brand name"
                variant="outlined"
              />

              <TextField
                style={{ textAlign: "left" }}
                className="normal_input"
                id="outlined-select-language"
                select
                value={lang}
                onChange={handleLanguage}
                variant="outlined"
              >
                {languages.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.value}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                style={{ textAlign: "left" }}
                className="normal_input"
                id="outlined-select-language"
                select
                value={trial}
                onChange={handleTrials}
                variant="outlined"
              >
                {trailVersions.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.value}
                  </MenuItem>
                ))}
              </TextField>

              <div className="bottom_section">
                <div className="already">
                  <p>Already have an account? Sign in.</p>
                </div>
                <Button
                  className="subs_btn"
                  variant="contained"
                  color="primary"
                  type="submit"
                >
                  Subscribe
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
