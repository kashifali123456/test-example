import { Grid } from "@material-ui/core";
import React from "react";
import "./style.css";
const BidDetail = () => {
  return (
    <Grid container className="biddetail" justify="center">
      <Grid className="biditem" item xs={12} md={3}>
        <h1>9999</h1>
        <h5>SLOTHz</h5>
      </Grid>
      <Grid className="biditem" item xs={12} md={3}>
        <h1>156</h1>
        <h5>TRAITS</h5>
      </Grid>
      <Grid className="biditem" item xs={12} md={3}>
        <h1>10</h1>
        <h5>COMMUNITY PRIZES</h5>
      </Grid>
      <Grid className="biditem" item xs={12} md={3}>
        <h1>20</h1>
        <h5>EXCLUSIVE SLOTHz</h5>
      </Grid>
    </Grid>
  );
};

export default BidDetail;
