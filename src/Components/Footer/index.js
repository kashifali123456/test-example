import { Grid } from "@material-ui/core";
import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import "./style.css";
const Footer = () => {
  return (
    <Grid container className="footer">
      <Grid container className="footer-container">
        <Grid
          item
          container
          justify="start"
          direction="column"
          xs={6}
          md={6}
          className="footer-header"
        >
          <p id="ftrh">© 2021 SLOTHz</p>
          <h4>Made with love by the SLOTHz team!</h4>
        </Grid>
        <Grid
          item
          container
          justifyContent="flex-end"
          xs={6}
          md={6}
          className="footer-icon"
        >
          <TwitterIcon id="twitter" />
          <i id="twitter" class="fab fa-discord"></i>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
