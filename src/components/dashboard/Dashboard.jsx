import React, { useEffect, useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import NewDate from "../newDate/NewDate";
import Shift from "../shifts/Shift";
import { Button } from "react-bootstrap";

const SitterShifts = [
  {
    id: 1,
    date: new Date(2021, 8, 12),
    name: "Ezequiel",
    email: "ezequiel2001@gmail.com",
    status: false
  }
]

const Dashboard = ({ userInfo }) => {
  const [shifts, setShifts] = useState(SitterShifts);

  const addedShiftHandler = (ShiftData) => {
    const dateString = ShiftData.date.toISOString().slice(0, 10); //la date se espera que sea una cadena de caracteres y no un objeto Date, la transformamos a ISO string y luego solo tomamos los primeros 10 caracteres (año-mes-dia)
    const newShiftId = Math.random();//shifts[shifts.length - 1].id + 1; //tambien fakeApi nos pide una ID, entonces hacemos ultimo ID + 1

    fetch("http://localhost:8000/books", { //la URL es la misma que la de GET en los headers tenemos que aclarara que
      method: "POST", //El metodo a usar es POST
      headers: {
        "content-type": "application/json", //el tipo de contenido que se envia es application/json
      },
      body: JSON.stringify({ //en la body de la request se van a encontrar los datos que vamos a enviar
        id: newShiftId,
        date: dateString,
        name: ShiftData.name,
        email: ShiftData.email,
        status: false,
      }),
    })
      .then((response) => { //chequeamos si la respuesta estuvo okay
        if (response.ok) return response.json();
        else {
          throw new Error("The response has some errors!");
        }
      })
      .then(() => { //actualizamos el estado, de manera que el cliente no necesito refrescar la página para ver el nuevo turno agregado
        const newShiftsArray = [{ ...ShiftData, id: newShiftId }, ...shifts];
        setShifts(newShiftsArray);
      })
      .catch((error) => { //y el catch para ver errores y blablabla
        console.log(error);
      })

    ////////////////////////////////////////////////////Este fetch para mí no esta bien, pero arregla que no se actualice el estado cuando se tiene que actualizar el maldito *!¨"#@, sangre de pollo habría que darle a javascript

    fetch("http://localhost:8000/books", {
      headers: {
        accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((shiftData) => {
        const shiftMapped = shiftData.map((shift) => ({
          ...shift,
          date: new Date(shift.date),
        })) //antes de poder setear el nuevo arreglo de turnos debemos mapearlo de manera que la date, se transforme en un objeto Date y no nos genere un error
        setShifts(shiftMapped);
      })
      .catch((error) => console.log(error))
  }

  useEffect(() => {
    fetch("http://localhost:8000/books", {
      headers: {
        accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((shiftData) => {
        const shiftMapped = shiftData.map((shift) => ({
          ...shift,
          date: new Date(shift.date),
        })) //antes de poder setear el nuevo arreglo de turnos debemos mapearlo de manera que la date, se transforme en un objeto Date y no nos genere un error
        setShifts(shiftMapped);
      })
      .catch((error) => console.log(error))
  }, []);

  const onClickHaceEsto = () => {
    
  }

  return (
    <>
      <Navbar />
      <NewDate userInformation={userInfo} addedShiftHandler={addedShiftHandler} />
      <Shift shifts={shifts} />
      <Button onClick={onClickHaceEsto}>hola</Button>
      <Footer />
    </>
  );
};

export default Dashboard;
