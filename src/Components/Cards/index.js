import React from "react";
import { Grid, Button } from "@material-ui/core";
import image1 from "../../Assets/Images/hero1.gif";
import image2 from "../../Assets/Images/hero2.gif";
import image3 from "../../Assets/Images/hero3.gif";
import image4 from "../../Assets/Images/hero4.gif";
import "./style.css";
const Cards = () => {
  return (
    <Grid container className="card">
      <Grid
        id="cards-img"
        className="card-img"
        item
        xs={12}
        md={3}
        justify="center"
      >
        <img src={image1} alt="" />
      </Grid>
      <Grid
        id="cards-img"
        className="card-img"
        item
        xs={12}
        md={3}
        justify="center"
      >
        <img src={image2} alt="" />
      </Grid>
      <Grid
        id="cards-img"
        className="card-img"
        item
        xs={12}
        md={3}
        justify="center"
      >
        <img src={image3} alt="" />
      </Grid>
      <Grid
        id="cards-img"
        className="card-img"
        item
        xs={12}
        md={3}
        justify="center"
      >
        <img src={image4} alt="" />
      </Grid>

      <Grid className="card-img" item container xs={12} justify="center">
        <Button id="card-btn" variant="contained" color="secondary">
          Mint Now!
        </Button>
      </Grid>
    </Grid>
  );
};

export default Cards;
