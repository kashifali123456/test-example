import React from "react";
import Header from "../../Components/Header";
import { Container } from "@material-ui/core";
import Cards from "../../Components/Cards";
import BidDetail from "../../Components/BidDetail";
import MintItem from "../../Components/MintItem";
import Card2 from "../../Components/Card2";
import Stats from "../../Components/Stats";
import JoinComponent from "../../Components/JoinComponent";
import TeamComponent from "../../Components/TeamComponent";
import Question from "../../Components/Questions";
const Home = () => {
  return (
    <>
      <Header />
      <Cards />
      <BidDetail />
      <MintItem />
      <Card2 />
      <Stats />
      <JoinComponent />
      <TeamComponent />
      <Question />
    </>
  );
};

export default Home;
