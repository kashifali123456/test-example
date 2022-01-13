import { Grid, Button, Link } from "@material-ui/core";
import React, { useState } from "react";
import image5 from "../../Assets/Images/astro.png";
import "./style.css";
const MintItem = () => {
  const [count, setCount] = useState(0);
  const onDec = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setCount(0);
    }
  };
  const onInc = () => {
    setCount(count + 1);
  };
  return (
    <Grid container justify="center" className="mintdetail">
      <Grid
        item
        container
        xs={12}
        className="mintheader"
        justifyContent="center"
        direction="column"
        alignItems="center"
      >
        <h1> MINT</h1>
        <p>YOU'RE JUST ONE TRANSACTION AWAY FROM JOINING THE SLOTHZ ARMY!</p>
      </Grid>

      <Grid
        item
        container
        xs={12}
        md={5}
        direction="column"
        alignItems="center"
        className="sloth"
      >
        <h2>Mint your SLOTHz!</h2>
        <p>
          You can mint up to 20 SLOTHz at once. The price per SLOTHz is 0.045
          ETH. <br />
          4289 / 9999 SLOTHz minted
        </p>
        <div className="counter">
          <Button
            id="btn1"
            variant="contained"
            color="none"
            textDecoration="none"
            onClick={onDec}
          >
            -
          </Button>
          <input className="inputitem" type="text" value={count} />

          <Button
            id="btn2"
            variant="contained"
            color="none"
            textDecoration="none"
            onClick={onInc}
          >
            +
          </Button>
        </div>

        {/* <Link to="home"> */}
        <Button
          id="CtW"
          variant="contained"
          color="secondary"
          textDecoration="none"
        >
          Connect to Wallet
        </Button>
        {/* </Link> */}
        <p>
          Make sure you are using the Metamask/Coinbase in-app browser or have{" "}
          <br /> Metamask installed on your browse
        </p>
      </Grid>
      <Grid item container xs={12} md={6} justify="center" className="mintimg">
        <img src={image5} alt="" />
      </Grid>
    </Grid>
  );
};

export default MintItem;
