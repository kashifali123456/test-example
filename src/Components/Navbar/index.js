import React from "react";
import { Grid } from "@material-ui/core";
import logo from "../../Assets/Images/logo.png";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import "./style.css";

// import useStyles from "./style.js";
const Navbar = () => {
  // const classes = useStyles();
  return (
    <Grid container className="navbar">
      <Grid item container className="navbarimg" justify="center" xs={6} md={4}>
        <img className="navimg" src={logo} alt="" />
        <h2>
          SOLTHZ <br /> <span>Aka Datusing</span>{" "}
        </h2>
      </Grid>
      <Grid
        className="navbar-link"
        justifyContent="space-around"
        item
        container
        xs={6}
      >
        <Link id="link" to="home">
          Home
        </Link>
        <Link id="link" to="home">
          Mint
        </Link>
        <Link id="link" to="home">
          Stats
        </Link>
        <Link id="link" to="home">
          Roadmap
        </Link>
        <Link id="link" to="home">
          Team
        </Link>
        <Link id="link" to="home">
          FAQ
        </Link>
      </Grid>
      <Grid item container xs={2}>
        <Link to="home">
          <Button
            id="CtW"
            variant="contained"
            color="secondary"
            textDecoration="none"
          >
            Connect to Wallet
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
};

export default Navbar;
