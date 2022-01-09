import { Grid } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import HelpOutlineRoundedIcon from "@material-ui/icons/HelpOutlineRounded";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import "./style.css";
const useStyles = makeStyles((theme) => ({
  nested: {
    paddingLeft: theme.spacing(4),
  },
  Qicon: {
    color: "orchid",
    padding: "10px",
  },

  listitem: {
    padding: "10px",
    marginLeft: "140px",
    webkitBoxshadow: "0 0 6px rgb(255 255 255 / 33%)",
    boxShadow: " 0 0 6px rgb(255 255 255 / 33%)",
    backgroundColor: "rgba(30,31,37,.8)",
    marginRight: "140px",
    transition: ".4s",
    webkitTransition: " all .35s ease-in-out",
    oTransition: "all .35s ease-in-out",
    transition: " all .35s ease-in-out",
  },
}));

const Question = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Grid container className="question">
      <Grid
        container
        item
        xs={12}
        justify="center"
        alignItems="center"
        direction="column"
        className="question-header"
      >
        <h1>FREQUENTLY ASKED QUESTIONS</h1>
        <p>
          You have questions, and we have answers. Couldn't find an anwser? Hop
          in our Discord Community!
        </p>
      </Grid>
      <Grid container item xs={12} justify="center" className="question-list">
        <Grid item xs={12} className={classes.listitem}>
          <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            className={classes.root}
          >
            <ListItem button onClick={handleClick}>
              <ListItemIcon className={classes.Qicon}>
                <HelpOutlineRoundedIcon />
              </ListItemIcon>
              <ListItemText className={classes.heading} primary="Why Slothz?" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button className={classes.nested}>
                  <ListItemText primary="Cute, soft and slow VERY slow, sloths are very cool animals but sadly they are endangered by humans, from illegal trade to deforestation, and we want to raise awareness on them." />
                </ListItem>
              </List>
            </Collapse>
          </List>
        </Grid>
        <Grid item xs={12} className={classes.listitem}>
          <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            className={classes.root}
          >
            <ListItem button onClick={handleClick}>
              <ListItemIcon className={classes.Qicon}>
                <HelpOutlineRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="What is Minting Process" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button className={classes.nested}>
                  <ListItemText primary="Tokens will be minted through a blind and random mint using our in-house script (open source and proof of hashes). No FOMO ramp & flat pricing. Minters can get up to 20 at a time." />
                </ListItem>
              </List>
            </Collapse>
          </List>
        </Grid>
        <Grid item xs={12} className={classes.listitem}>
          <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            className={classes.root}
          >
            <ListItem button onClick={handleClick}>
              <ListItemIcon className={classes.Qicon}>
                <HelpOutlineRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Tell us more about the SLOTHz !" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button className={classes.nested}>
                  <ListItemText primary="Every Sloth is randomly generated with a different amount of traits specifically designed to look as good as possible with well designed accessories and meeting high standards of quality and randomness." />
                </ListItem>
              </List>
            </Collapse>
          </List>
        </Grid>
        <Grid item xs={12} className={classes.listitem}>
          <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            className={classes.root}
          >
            <ListItem button onClick={handleClick}>
              <ListItemIcon className={classes.Qicon}>
                <HelpOutlineRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="What about the real slothz?" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button className={classes.nested}>
                  <ListItemText primary="A portion of minting proceeds will go to supporting the Sloth Conservation Foundation that protects sloths in the wild through research and conservation initiatives. Each donation will be publicly available and unlocked after every milestone we hit on our roadmap." />
                </ListItem>
              </List>
            </Collapse>
          </List>
        </Grid>
        <Grid item xs={12} className={classes.listitem}>
          <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            className={classes.root}
          >
            <ListItem button onClick={handleClick}>
              <ListItemIcon className={classes.Qicon}>
                <HelpOutlineRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Sir wen SLOTHz?" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button className={classes.nested}>
                  <ListItemText primary="We're finishing some things up but watch for updates and keep your wallets loaded, SLOTHz are launching very soon at just 0.045 ETH each." />
                </ListItem>
              </List>
            </Collapse>
          </List>
        </Grid>
        <Grid item xs={12} className={classes.listitem}>
          <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            className={classes.root}
          >
            <ListItem button onClick={handleClick}>
              <ListItemIcon className={classes.Qicon}>
                <HelpOutlineRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Sir wen SLOTHz?" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button className={classes.nested}>
                  <ListItemText primary="We're finishing some things up but watch for updates and keep your wallets loaded, SLOTHz are launching very soon at just 0.045 ETH each." />
                </ListItem>
              </List>
            </Collapse>
          </List>
        </Grid>
        <Grid item xs={12} className={classes.listitem}>
          <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            className={classes.root}
          >
            <ListItem button onClick={handleClick}>
              <ListItemIcon className={classes.Qicon}>
                <HelpOutlineRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Treasure hunt?" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button className={classes.nested}>
                  <ListItemText primary="The challenge is not active (YET) but we recommend following us on twitter, it's a special challenge for our community members, remember you need to have at least 1 SLOTH on your wallet to claim the treasure." />
                </ListItem>
              </List>
            </Collapse>
          </List>
        </Grid>
        <Grid item xs={12} className={classes.listitem}>
          <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            className={classes.root}
          >
            <ListItem button onClick={handleClick}>
              <ListItemIcon className={classes.Qicon}>
                <HelpOutlineRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="How many Slothz are being kept?" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button className={classes.nested}>
                  <ListItemText primary="We're keeping 200 SLOTHz for random giveaways, partnerships and we would love to keep some. Every holding, partnership and giveaway will be publicly disclosed" />
                </ListItem>
              </List>
            </Collapse>
          </List>
        </Grid>
        <Grid item xs={12} className={classes.listitem}>
          <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            className={classes.root}
          >
            <ListItem button onClick={handleClick}>
              <ListItemIcon className={classes.Qicon}>
                <HelpOutlineRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Is your contract public ?" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button className={classes.nested}>
                  <ListItemText primary="Yes, of course! You can inspect our contract here." />
                </ListItem>
              </List>
            </Collapse>
          </List>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Question;
