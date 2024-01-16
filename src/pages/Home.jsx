import React from "react";
import { Virtual } from "../components/Virtual";
import { Service } from "../components/Service";
import { Advantage } from "../components/Advantage";
import { Advantage2 } from "../components/Advantage2";
import { Team } from "../components/Team";
import { Subscripe } from "../components/Subscripe";
import Footer from "../components/Footer";

export const Home = () => {
  return (
    <>
      <Virtual />
      <Service />
      <Advantage />
      <Advantage2 />
      <Team />
      <Subscripe />
      <Footer />
    </>
  );
};
