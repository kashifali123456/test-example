import { Grid } from "@material-ui/core";
import React from "react";
import "./style.css";
import { Data } from "../../Data";
import CardDesgin from "../CardDesign";
import Carousel from "react-elastic-carousel";
import "./style.css";
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 600, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 900, itemsToShow: 4 },
  { width: 1200, itemsToShow: 5 },
];
const Card2 = () => {
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Carousel breakPoints={breakPoints}>
          {Data.map((items) => {
            return (
              <Grid item xs={12} className="card2">
                <CardDesgin items={items} />
              </Grid>
            );
          })}
        </Carousel>
      </Grid>
    </Grid>
  );
};

export default Card2;
