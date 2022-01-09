import React from "react";
import { Button } from "@material-ui/core";
import "./style.css";
import Drawer from "@material-ui/core/Drawer";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { ListItem, ListItemText } from "@material-ui/core";
const DrawersButton = ({ open, handleDrawerClose, setOpen }) => {
  return (
    <>
      <Drawer open={open} anchor="right">
        <ListItem button onClick={handleDrawerClose}>
          <ArrowForwardIosIcon />
        </ListItem>
        <ListItem button>
          <ListItemText primary={"Home"} />
        </ListItem>
        <ListItem button>
          <ListItemText primary={"Mint"} />
        </ListItem>
        <ListItem button>
          <ListItemText primary={"Stats"} />
        </ListItem>
        <ListItem button>
          <ListItemText primary={"Roadmap"} />
        </ListItem>
        <ListItem button>
          <ListItemText primary={"Team"} />
        </ListItem>
        <ListItem button>
          <ListItemText primary={"FAQ"} />
        </ListItem>
        <ListItem button>
          <Button id="CtW" variant="contained" color="secondary">
            Connect to Wallet
          </Button>
        </ListItem>
      </Drawer>
    </>
  );
};

export default DrawersButton;
