import React, { useState } from "react";
import {
  Paper,
  Typography,
  Box,
  TextField,
  InputAdornment,
  FormControl,
  IconButton,
  InputLabel,
  Input,
  Button,
  Stack,
  Alert,
} from "@mui/material";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LoginIcon from "@mui/icons-material/Login";
import {
  isEmail,
  isPassWord,
  MyFormPassWordHelperText,
} from "../helper/helper";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  //Input states
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  //Password Visibility
  const [showPassword, setShowPassword] = useState(false);

  //Form Error Styling
  const [emailInputError, setEmailInputError] = useState(false);
  const [passwordInputError, setPasswordInputError] = useState(false);

  //Form Validity
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  //PassWord Visibility Functions
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  //Validation for onBlur for email
  const handleEmailError = () => {
    if (!isEmail(emailInput)) {
      setEmailInputError(true);
      return;
    }
    setEmailInputError(false);
  };

  //Validation for onBlur for password
  const handlePassWordError = () => {
    if (!isPassWord(passwordInput)) {
      setPasswordInputError(true);
      return;
    }
    setPasswordInputError(false);
  };

  const handleSubmit = () => {
    if (!emailInput || emailInputError) {
      setSuccessMessage("");
      setErrorMessage("Email is Invalid. Please Re-Enter");
      return;
    }

    if (passwordInputError || !passwordInput) {
      setSuccessMessage("");
      setErrorMessage(
        "Password is Min 6 char. Max 20 char. Must contain at least 1 capital letter, 1 small letter and 1 number"
      );
      return;
    }

    setErrorMessage("");
    setSuccessMessage("Form Submitted Successfully");
  };

  return (
    <div>
      <Box
        sx={{
          textAlign: "center",
          my: 10,
          mx: "auto",
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          width: "450px",
          "@media (max-width:600px)": {
            width: "350px",
            "& h4 ": {
              my: 1,
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Paper elevation={3} style={{ padding: "10px", paddingBottom: "50px" }}>
          <Typography variant="h4"> Login </Typography>

          <Box sx={{ my: 2 }}>
            <TextField
              id="standard-basic"
              label="Email Address"
              onBlur={handleEmailError}
              variant="standard"
              error={emailInputError}
              fullWidth
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
            />
          </Box>

          <Box sx={{ my: 2 }}>
            <FormControl sx={{ width: "100%" }} variant="standard">
              <InputLabel
                error={passwordInputError}
                htmlFor="standard-adornment-password-login"
              >
                Password
              </InputLabel>
              <Input
                id="standard-adornment-password-login"
                type={showPassword ? "text" : "password"}
                error={passwordInputError}
                onBlur={handlePassWordError}
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
              <MyFormPassWordHelperText />
            </FormControl>
          </Box>

          <div style={{ marginTop: "15px" }}>
            <Button
              variant="contained"
              fullWidth
              startIcon={<LoginIcon />}
              onClick={handleSubmit}
            >
              LOGIN
            </Button>
          </div>

          {/* Show Form Error if any */}
          {errorMessage && (
            <Stack sx={{ width: "100%", paddingTop: "10px" }} spacing={2}>
              <Alert severity="error" size="small">
                {errorMessage}
              </Alert>
            </Stack>
          )}

          {/* Show Success if no issues */}
          {successMessage && (
            <Stack sx={{ width: "100%", paddingTop: "10px" }} spacing={2}>
              <Alert severity="success" size="small">
                {successMessage}
              </Alert>
            </Stack>
          )}
          <br />
          <Box sx={{ marginTop: "7px", fontSize: "15px" }}>
            Don't have an account ?{" "}
            <small
              onClick={() => navigate("/register")}
              style={{
                textDecoration: "underline",
                color: "blue",
                cursor: "pointer",
              }}
            >
              Sign Up
            </small>
          </Box>
        </Paper>
      </Box>
    </div>
  );
};

export default LoginForm;
