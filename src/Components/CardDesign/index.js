import { Grid } from "@material-ui/core";
import React from "react";
import "./style.css";
const CardDesgin = (props) => {
  const { id, img, title } = props.items;
  return (
    <>
      {/* <Grid item xs={12}> */}
      <div className="carddesign">
        <img src={img} alt="" />
        <h3 className="cH">{title}</h3>
      </div>
      {/* </Grid> */}
    </>
  );
};

export default CardDesgin;
