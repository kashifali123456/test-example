import React from "react";
import Header from "../../Components/Header";
import { Container } from "@material-ui/core";
import Cards from "../../Components/Cards";
import BidDetail from "../../Components/BidDetail";
import MintItem from "../../Components/MintItem";
import Card2 from "../../Components/Card2";
const Home = () => {
  return (
    <>
      <Header />
      <Cards />
      <BidDetail />
      <MintItem />
      <Card2 />
    </>
  );
};

export default Home;
