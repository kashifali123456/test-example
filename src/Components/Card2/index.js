import { Grid } from "@material-ui/core";
import React from "react";
import "./style.css";
import Data from "../../Data";
import CardDesgin from "../CardDesign";
const Card2 = () => {
  return (
    <Grid container direction="row" justifyContent="center" className="card2">
      {/* <Grid item xs={12} md={2} container direction="row" justifyContent="center"> */}
      {Data.map((items) => {
        return (
          <Grid item xs={12} md={2}>
            <CardDesgin items={items} />
          </Grid>
        );
      })}
    </Grid>
    // </Grid>
  );
};

export default Card2;
