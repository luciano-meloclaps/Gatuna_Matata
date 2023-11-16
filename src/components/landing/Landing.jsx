import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import Hero from "../hero/Hero";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import FormComponent from "../fom/Form";
import GridCardsUser from "../gridCards/GridCards";
import BadRequest from "../badRequest/BadRequest";

const Landing = () => {
  /* async function fetchData() {
    // Crear la URL de la solicitud
    const url = "http://localhost:8000";

    try {
      // Realizar la solicitud Fetch
      const response = await fetch(url);

      // Comprobar si la respuesta tiene un estado HTTP exitoso (código 200-299)
      if (!response.ok) {
        throw new Error(`La solicitud falló con estado: ${response.status}`);
      }

      // Parsear la respuesta como JSON (si es una respuesta JSON)
      const data = await response.json();

      // Hacer algo con los datos obtenidos en caso de éxito
      console.log("Datos recibidos:", data);
    } catch (error) {
      // Manejar cualquier error que ocurra durante la solicitud o el procesamiento de la respuesta
      console.error("Ocurrió un error:", error);
    }
  }

  // Llamar a la función para realizar la solicitud
  fetchData(); */

  return (
    <>
      <Navbar />
      <Hero />
      <GridCardsUser/>
      <FormComponent />
      <Footer />
    </>
  );
};

export default Landing;
