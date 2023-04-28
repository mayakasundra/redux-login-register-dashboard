import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import axios from "axios";
import { Stack } from "@mui/system";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
// import {    ErrorMessage } from 'formik';
import Navbar from "./Navbar";
import { register } from "../redux/register/thunk/post";
import { useForm } from "react-hook-form";

const Register = () => {
  const { registerState } = useSelector((state) => state.register.post);
  console.log("registerState", registerState);
  const nav = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();
  const { handleSubmit } = useForm();

  const onFormSubmit = async () => {
    dispatch(
      register({
        firstName,
        lastName,
        email,
        password,
        title,
        confirmPassword,
        acceptTerms: true,
      })
    );
  };
  return (
    <React.Fragment>
      <Navbar />
      <Container>
        <h2>Register Form</h2>
        <form
          onSubmit={handleSubmit(onFormSubmit)}
          action={<Link to="/login" />}
        >
          <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Title</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Title"
                name="title"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              >
                <MenuItem value="Mr">Mr</MenuItem>
                <MenuItem value="Miss">Miss</MenuItem>
                <MenuItem value="Mrs">Mrs</MenuItem>
              </Select>
            </FormControl>

            <TextField
              type="text"
              variant="outlined"
              color="secondary"
              label="First Name"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              fullWidth
              required
            />
            <TextField
              type="text"
              variant="outlined"
              color="secondary"
              label="Last Name"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
              fullWidth
              required
            />
          </Stack>
          <TextField
            type="email"
            variant="outlined"
            color="secondary"
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            fullWidth
            required
            sx={{ mb: 4 }}
          />
          <TextField
            type="password"
            variant="outlined"
            color="secondary"
            label="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
            fullWidth
            sx={{ mb: 4 }}
          />
          <TextField
            type="password"
            variant="outlined"
            color="secondary"
            label="confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
            required
            fullWidth
            sx={{ mb: 4 }}
          />
          <div>
            {/* <input type="checkbox" name="acceptTerms" />
            <label htmlFor="acceptTerms">Accept Terms & Conditions</label> */}
            <FormGroup>
              <FormControlLabel
                required
                control={<Checkbox />}
                label="Accept Terms & Conditions"
              />
            </FormGroup>
            {/* <ErrorMessage name='acceptTerms' /> */}
          </div>

          <Button variant="outlined" color="secondary" type="submit">
            Register
          </Button>
        </form>

        <small>
          Already have an account? <NavLink to="/"> Login Here </NavLink>{" "}
        </small>
      </Container>
    </React.Fragment>
  );
};

export default Register;
