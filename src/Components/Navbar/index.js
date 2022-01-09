import React from "react";
import { Grid } from "@material-ui/core";
import logo from "../../Assets/Images/logo.png";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import "./style.css";
import { useMediaQuery } from "@material-ui/core";
import Menu from "@material-ui/icons/Menu";
import { IconButton } from "@material-ui/core";
import DrawersButton from "../../Drawers";
import EcoIcon from "@material-ui/icons/Eco";
const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const hanleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const match = useMediaQuery("(max-width: 960px)");
  return (
    <Grid container className="navbar">
      <Grid item container className="navbarimg" justify="center" xs={6} md={3}>
        <img className="navimg" src={logo} alt="" />
        <h2>
          SOLTHZ <br /> <span>Aka Datusing</span>{" "}
        </h2>
      </Grid>
      <Grid item container xs={1} md={2}></Grid>
      <Grid
        className="navbar-link"
        justifyContent="center"
        alignItems="center"
        item
        container
        xs={5}
        md={7}
      >
        {match ? (
          <IconButton
            color="inherit"
            aria-label="opendrawer"
            onClick={hanleDrawerOpen}
            edge="start"
            style={{ color: "white" }}
          >
            <Menu />
          </IconButton>
        ) : (
          <>
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

            <div className="ctw">
              <Button id="CtW" variant="contained" color="secondary">
                Connect to Wallet
              </Button>
            </div>
          </>
        )}
        <Grid className="Menu-button">
          <DrawersButton open={open} handleDrawerClose={handleDrawerClose} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Navbar;
