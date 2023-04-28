import React from "react";
// import '../auth/Login.css'
import { Link } from "react-router-dom";
import { login } from "../redux/auth/thunk/post";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { TextField, Button, Container } from "@mui/material";
import Navbar from "./Navbar";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const dispatch = useDispatch();
  const { handleSubmit } = useForm();
  // const { loginState } = useSelector((state) => state.auth.post)
  // console.log("loginState---->", loginState);

  const onFormSubmit = async () => {
    dispatch(login({ email, password }));
    console.log("login---------------->", login);
  };

  return (
    <React.Fragment>
      <Navbar />
      <Container>
        <form autoComplete="off" onSubmit={handleSubmit(onFormSubmit)}>
          <h2>Login Form</h2>
          <TextField
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
            variant="outlined"
            color="secondary"
            type="email"
            sx={{ mb: 3 }}
            fullWidth
            value={email}
            error={emailError}
          />
          <TextField
            label="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
            variant="outlined"
            color="secondary"
            type="password"
            value={password}
            error={passwordError}
            fullWidth
            sx={{ mb: 3 }}
          />
          <Button variant="outlined" color="secondary" type="submit">
            Login
          </Button>
        </form>
        <small>
          Need an account? <Link to="/register">Register here</Link>
        </small>
      </Container>
    </React.Fragment>
  );
};

export default Login;
