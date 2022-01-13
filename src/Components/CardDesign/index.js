import { Grid } from "@material-ui/core";
import React from "react";

import "./style.css";
const CardDesgin = (props) => {
  const { id, img, title } = props.items;
  return (
    <>
      <Grid item container xs={12} justify="center" alignItems="center">
        <Grid item xs={12} className="carddesign">
          <img src={img} alt="" />
          <h3 className="cH">{title}</h3>
        </Grid>
      </Grid>
    </>
  );
};

export default CardDesgin;
