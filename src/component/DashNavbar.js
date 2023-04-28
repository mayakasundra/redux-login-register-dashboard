// import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";
import "../App.css";
// import { Link } from "react-router-dom";

import { toast } from "react-toastify";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(10),
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(5),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));

function DashNavbar() {
  // const [dropdownOpen, setOpen] = useState(false);
  const logout = () => {
    toast.success("Logout Successfully !", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    localStorage.removeItem("token");
  };
  const classes = useStyles();

  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          Welcome
        </Typography>
        <div className={classes.navlinks}>
          <a href={`/`} onClick={logout} className="logout">
            <span>Sign Out</span>
          </a>
        </div>
      </Toolbar>
    </AppBar>
  );
}
export default DashNavbar;
