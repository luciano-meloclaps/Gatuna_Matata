import React, { useContext, useEffect, useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import NewDate from "../newDate/NewDate";
import Shift from "../shifts/Shift";

import useFetch from "../custom/useFetch/useFetch";

import { AuthenticationContext } from "../services/authentication/authentication.context";

function shiftsDateMapped(shifts) {
  return shifts?.map((shift) => ({
    ...shift,
    date: new Date(shift.date),
  }));
}

const Dashboard = () => {
  const [shifts, setShifts] = useState([]);
  const [usersInfo, setUsersInfo] = useState([]);

  const { userData } = useContext(AuthenticationContext);

  const { data, loading } = useFetch("http://localhost:8000/shifts");

  const setShiftHandler = (value) => {
    setShifts(value);
  };

  const setUsersInfoHandler = (value) => {
    setUsersInfo(value);
  };

  const addedShiftHandler = async (ShiftData) => {
    console.log(shifts);

    const dates = shifts
      .filter((shift) => shift.email === userData.email)
      .map((shift) => shift.date.toISOString().slice(0, 10)); //AGARRA LOS PRIMEROS 10 DIGITOS DE LA FECHA Y LO PASA A STRING

    const dateString = ShiftData.date.toISOString().slice(0, 10);

    const newShiftId = Math.random(); //Hacer contador tipo +1 agarrando el ultimo id

    if (dates.includes(ShiftData.date.toISOString().slice(0, 10))) {
      alert("ejem, ejem");
    } else {
      await fetch("http://localhost:8000/shifts", {
        //el post más largo que hice en mi vida
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          //en la body de la request se van a encontrar los datos que vamos a enviar
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
        .then(() => {
          //actualizamos el estado, de manera que el cliente no necesito refrescar la página para ver el nuevo turno agregado
          const newShiftsArray = [{ ...ShiftData, id: newShiftId }, ...shifts]; //arreglar esto
          setShifts(newShiftsArray);
        })
        .catch((error) => {
          console.log(error);
        });

      await fetch("http://localhost:8000/shifts", {
        headers: {
          accept: "application/json",
        },
      })
        .then((response) => response.json())
        .then((shiftData) => {
          const shiftMapped = shiftData.map((shift) => ({
            ...shift,
            date: new Date(shift.date),
          }));
          setShiftHandler(shiftMapped); //Esta en el dashboard y cambia el valor a shift
        })
        .catch((error) => console.log(error));
    }
  };

  ////////////////////////////////////////////////////////////////

  useEffect(() => {
    if (!loading && data) {
      const shiftMapped = shiftsDateMapped(data);
      setShifts(shiftMapped);
    }
  }, [data, loading]);

  useEffect(() => {
    fetch("http://localhost:8000/users", {
      headers: {
        accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setUsersInfo(data));
  }, []);

  return (
    <>
      <Navbar /> {/*Stateless*/}
      {userData.userType === "sitter" && (
        <NewDate addedShiftHandler={addedShiftHandler} />
      )}
      {/*agrega un nuevo turno */}
      <Shift
        shifts={shifts}
        setShiftHandler={setShiftHandler}
        usersInfo={usersInfo}
        setUsersInfoHandler={setUsersInfoHandler}
      />{" "}
      {/* Muestra los turnos */}
      <Footer /> {/*Stateless*/}
    </>
  );
};

export default Dashboard;
