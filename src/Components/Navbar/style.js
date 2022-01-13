import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  navbarimg: {
    direction: "row",
    alignItems: "center",
    color: "#fff",
    textAlign: "center",
  },

  navbar: {
    background:
      "linear-gradient( 111.31deg, #090a0b 7.84%, rgba(31, 7, 82, 0) 94.81% ), #41153f",
    width: "100%",
    opacity: "0.9",
    padding: "5px 0 5px",
    height: " 70px",
    alignItems: "center",
    position: "fixed",
    top: "0",
    left: "0",
    right: "0",
    boxShadow: "0 2px 15px #891f85",
    transition: "all 0.5s",
    zIndex: "997",
  },
  navimg: {
    width: "50px",
    padding: "2px",
    margin: "2px",
    height: "40px",
  },
  navbarimgh2: {
    fontSize: "24px",
    fontWeight: "800",
    textShadow: "0 0 7px orchid",
  },
  span: {
    display: "block",
    lineHeight: "1",
    fontWeight: "300",
    letterSpacing: "4px",
    fontSize: "12px",
  },

  link: {
    color: "#fff",
    textShadow: "0 0 7px rgb(218 112 214 / 50%)",
    textDecoration: "none",
    fontSize: "16px",
    padding: "10px",
    transition: "all 0.5s ease-in-out",
    marginLeft: "5px",
  },

  CtW: {
    borderRadius: "20px",
    backgroundColor: "transparent !important",
    border: "1px solid orchid",
    color: "orchid",
    fontSize: "12px",
    textTransform: "capitalize",
    textShadow: "0 0 7px rgb(218 112 214 / 50%) !important",
    boxShadow: "0 0 15px rgb(218 112 214 / 30%) !important",
    marginLeft: "30px",
    letterSpacing: "1px",
    marginTop: "3px",
    height: " 40px",
    paddingLeft: "12px",
    paddingRight: "12px",
    cursor: "pointer",
    fontWeight: "500",
  },
}));
export default useStyles;
