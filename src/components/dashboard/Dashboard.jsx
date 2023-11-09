import React, { useEffect, useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import NewDate from "../newDate/NewDate";
import Shift from "../shifts/Shift";
import useFetch from "../custom/useFetch/useFetch";

function shiftsDateMapped(shifts) {
  return shifts.map((shift) => ({
    ...shift,
    date: new Date(shift.date),
  }));
}

const Dashboard = () => {
  const [shifts, setShifts] = useState([]);

  const { data, loading} = useFetch("http://localhost:8000/books")

  const setShiftHandler = (value) => {
    setShifts(value)
  }

  const addedShiftHandler = (ShiftData) => {
    const dateString = ShiftData.date.toISOString().slice(0, 10);
    const newShiftId = Math.random();//arreglar esto

    fetch("http://localhost:8000/books", { //el post más largo que hice en mi vida
      method: "POST", 
      headers: {
        "content-type": "application/json", 
      },
      body: JSON.stringify({ //en la body de la request se van a encontrar los datos que vamos a enviar
        id: newShiftId,
        date: dateString,
        name: ShiftData.name,
        email: ShiftData.email,
        status: false,
      }),
    })
      .then((response) => { 
        if (response.ok) return response.json();
        else {
          throw new Error("The response has some errors!");
        }
      })
      .then(() => { //actualizamos el estado, de manera que el cliente no necesito refrescar la página para ver el nuevo turno agregado
        const newShiftsArray = [{ ...ShiftData, id: newShiftId }, ...shifts]; //arreglar esto
        setShifts(newShiftsArray);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  ////////////////////////////////////////////////////////////////

  useEffect(() => {
    if (!loading && data) {
      const shiftMapped = shiftsDateMapped(data)
      setShifts(shiftMapped)
    }  }, [data, loading]);


  return (
    <>
      <Navbar /> {/*Stateless*/}
      <NewDate addedShiftHandler={addedShiftHandler} /> {/*agrega un nuevo turno */}
      <Shift shifts={shifts} setShiftHandler={setShiftHandler}/> {/*Muestra los turnos*/}
      <Footer /> {/*Stateless*/}
    </>
  );
};

export default Dashboard;