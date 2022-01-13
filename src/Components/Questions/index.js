import { Grid } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./style.css";
import HelpOutlineRoundedIcon from "@material-ui/icons/HelpOutlineRounded";
import ListItemIcon from "@material-ui/core/ListItemIcon";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    boxShadow: "0 0 6px rgb(255 255 255 / 33%)",
    backgroundColor: "rgba(30,31,37,.8)",
    transition: "all .35s ease-in-out",
    color: "#ffff",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    color: "#ffff",
  },
  Qicon: {
    color: "orchid",
    padding: "10px",
  },
  listitem: {
    marginLeft: "140px",
    boxShadow: "0 0 6px rgb(255 255 255 / 33%)",
    backgroundColor: "rgba(30,31,37,.8)",
    marginRight: "140px",
    transition: "all .35s ease-in-out",
  },
  rooticon: {
    color: "white",
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
          <Grid item xs={12}>
            <Accordion className={classes.root}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className={classes.rooticon} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <ListItemIcon className={classes.Qicon}>
                  <HelpOutlineRoundedIcon />
                </ListItemIcon>
                <Typography className={classes.heading}>Why Slothz?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Cute, soft and slow VERY slow, sloths are very cool animals
                  but sadly they are endangered by humans, from illegal trade to
                  deforestation, and we want to raise awareness on them.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item xs={12}>
            <Accordion className={classes.root}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className={classes.rooticon} />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <ListItemIcon className={classes.Qicon}>
                  <HelpOutlineRoundedIcon />
                </ListItemIcon>
                <Typography className={classes.heading}>
                  What is Minting Process
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Tokens will be minted through a blind and random mint using
                  our in-house script (open source and proof of hashes). No FOMO
                  ramp & flat pricing. Minters can get up to 20 at a time.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item xs={12}>
            <Accordion className={classes.root}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className={classes.rooticon} />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <ListItemIcon className={classes.Qicon}>
                  <HelpOutlineRoundedIcon />
                </ListItemIcon>
                <Typography className={classes.heading}>
                  Tell us more about the SLOTHz !
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Every Sloth is randomly generated with a different amount of
                  traits specifically designed to look as good as possible with
                  well designed accessories and meeting high standards of
                  quality and randomness.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item xs={12}>
            <Accordion className={classes.root}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className={classes.rooticon} />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <ListItemIcon className={classes.Qicon}>
                  <HelpOutlineRoundedIcon />
                </ListItemIcon>
                <Typography className={classes.heading}>
                  What about the real slothz?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  A portion of minting proceeds will go to supporting the Sloth
                  Conservation Foundation that protects sloths in the wild
                  through research and conservation initiatives. Each donation
                  will be publicly available and unlocked after every milestone
                  we hit on our roadmap.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item xs={12}>
            <Accordion className={classes.root}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className={classes.rooticon} />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <ListItemIcon className={classes.Qicon}>
                  <HelpOutlineRoundedIcon />
                </ListItemIcon>
                <Typography className={classes.heading}>
                  Sir wen SLOTHz?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  We're finishing some things up but watch for updates and keep
                  your wallets loaded, SLOTHz are launching very soon at just
                  0.045 ETH each.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item xs={12}>
            <Accordion className={classes.root}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className={classes.rooticon} />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <ListItemIcon className={classes.Qicon}>
                  <HelpOutlineRoundedIcon />
                </ListItemIcon>
                <Typography className={classes.heading}>
                  Sir wen SLOTHz?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  We're finishing some things up but watch for updates and keep
                  your wallets loaded, SLOTHz are launching very soon at just
                  0.045 ETH each.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item xs={12}>
            <Accordion className={classes.root}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className={classes.rooticon} />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <ListItemIcon className={classes.Qicon}>
                  <HelpOutlineRoundedIcon />
                </ListItemIcon>
                <Typography className={classes.heading}>
                  Treasure hunt?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  The challenge is not active (YET) but we recommend following
                  us on twitter, it's a special challenge for our community
                  members, remember you need to have at least 1 SLOTH on your
                  wallet to claim the treasure.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item xs={12}>
            <Accordion className={classes.root}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className={classes.rooticon} />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <ListItemIcon className={classes.Qicon}>
                  <HelpOutlineRoundedIcon />
                </ListItemIcon>
                <Typography className={classes.heading}>
                  How many Slothz are being kept?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  We're keeping 200 SLOTHz for random giveaways, partnerships
                  and we would love to keep some. Every holding, partnership and
                  giveaway will be publicly disclosed.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item xs={12}>
            <Accordion className={classes.root}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon className={classes.rooticon} />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <ListItemIcon className={classes.Qicon}>
                  <HelpOutlineRoundedIcon />
                </ListItemIcon>
                <Typography className={classes.heading}>
                  Is your contract public ?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Yes, of course! You can inspect our contract here.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Question;
