import { Grid } from "@material-ui/core";
import React from "react";
import "./style.css";
const Stats = () => {
  return (
    <Grid container className="stats">
      <Grid
        item
        container
        xs={12}
        justify="center"
        alignItems="center"
        direction="column"
        className="stats-header"
      >
        <h1>STATS</h1>
        <p>
          Each SLOTHz is randomly generated with a combination of more than 157
          traits, but not only that, there are different types with different
          rarities.
        </p>
      </Grid>
    </Grid>
  );
};

export default Stats;
