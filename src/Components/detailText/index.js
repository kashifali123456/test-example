import { Grid } from "@material-ui/core";
import React from "react";

const detailText = () => {
  return (
    <Grid container>
      <Grid item xs={12} md={6}></Grid>
      <hr />
      <Grid item xs={12} md={5}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quas
          temporibus perferendis quae minima possimus ad! Laudantium
          voluptatibus dolor recusandae soluta, laboriosam beatae.
        </p>
      </Grid>
      {/* <hr /> */}
      <Grid item xs={12} md={6}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quas
        temporibus perferendis quae minima possimus ad! Laudantium voluptatibus
        dolor recusandae soluta, laboriosam beatae.
      </Grid>
      <hr />
      <Grid item xs={12} md={5}></Grid>
      {/* <hr /> */}
      <Grid item xs={12} md={6}></Grid>
      <hr />
      <Grid item xs={12} md={5}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quas
        temporibus perferendis quae minima possimus ad! Laudantium voluptatibus
        dolor recusandae soluta, laboriosam beatae.
      </Grid>
      {/* <hr /> */}
      <Grid item xs={12} md={6}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quas
        temporibus perferendis quae minima possimus ad! Laudantium voluptatibus
        dolor recusandae soluta, laboriosam beatae.
      </Grid>
      <hr />
      <Grid item xs={12} md={5}></Grid>
    </Grid>
  );
};

export default detailText;
