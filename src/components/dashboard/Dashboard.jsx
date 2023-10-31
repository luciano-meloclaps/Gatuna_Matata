import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import Hero from "../hero/Hero";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

import FormComponent from "../fom/Form";
import GridCardsUser from "../gridCards/GridCards";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <GridCardsUser />
      <FormComponent />
      <Footer />
    </>
  );
};

export default Dashboard;
