import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import Hero from "../hero/Hero";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import GridExample from "../gridCards/GridCards";
import FormComponent from "../fom/Form";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <GridExample />
      <FormComponent />
      <Footer />
    </>
  );
};

export default Dashboard;
