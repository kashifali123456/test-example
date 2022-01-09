import React from "react";
import { Grid } from "@material-ui/core";
import "./style.css";

const Header = () => {
  return (
    <Grid container>
      <Grid
        item
        container
        xs={12}
        justifyContent="center"
        direction="column"
        className="header"
        alignItems="center"
      >
        <h1 className="slothheading">
          Who let the SLOTHz <br />
          out!?
        </h1>
        <h4>Join the SLOTHz Gang!</h4>
      </Grid>
    </Grid>
  );
};

export default Header;
