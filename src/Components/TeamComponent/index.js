import { Grid } from "@material-ui/core";
import React, { useState } from "react";
import Data from "../../Data";
import CardDesgin from "../CardDesign";
import "./style.css";
const TeamComponent = () => {
  // const [person, setPerson] = useState(null);
  return (
    <Grid container className="team">
      <Grid
        item
        container
        xs={12}
        className="team-header"
        justify="center"
        alignItems="center"
        direction="column"
      >
        <h1>TEAM</h1>
        <p>
          This is the group of crazy nerds that made SLOTHz a reality! Each of
          us is a key component in order to give you guys the NFT art you
          deserve. Each of us is here for the long run, we’re aiming to bring
          SLOTHz to the next level.
        </p>
      </Grid>
      <Grid item container direction="row" justifyContent="center">
        {Data.map((items) => {
          return (
            <Grid item md={2}>
              <CardDesgin items={items} />
            </Grid>
          );
        })}
      </Grid>
      <Grid item xs={12} className="team-lower">
        <p>
          We need you! If you feel you can bring something to the table please
          send us a DM.
        </p>
      </Grid>
    </Grid>
  );
};

export default TeamComponent;
