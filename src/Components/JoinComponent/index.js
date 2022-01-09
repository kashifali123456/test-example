import { Grid, Button, Link } from "@material-ui/core";
import React from "react";
import "./style.css";
const JoinComponent = () => {
  return (
    <Grid container className="join">
      <Grid
        container
        item
        xs={12}
        className="join-header"
        justifyContent="center"
        alignItems="center"
        direction="column"
      >
        <h1>Join our Discord Community</h1>
        <p>
          The best community in this space with +2,000 members, with games,
          contests, giveaways, scholarships and more to come!
        </p>
        <Link className="join-link">
          <Button id="join-btn" variant="contained">
            <i class="fab fa-discord"></i> join Now !
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
};

export default JoinComponent;
