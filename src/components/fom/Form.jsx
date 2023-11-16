import React, { useState } from "react";
import { Button } from "react-bootstrap";
const Form = () => {
  //Estados
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [textarea, setTextarea] = useState("");
  const [checked, setChecked] = useState(false);

  //Validacion para los estados del FORM
  const handleSubmit = (event) => {
    event.preventDefault();
    if (email && city && textarea && checked) {
      alert("Formulario enviado con éxito!");
    } else {
      alert("Por favor, completa todos los campos antes de enviar. 👍");
    }
  };

  return (
    <div className="d-flex justify-content-center  flex-column my-5" id='form'>
      <h1 className="d-flex fs-1 color-accent-user justify-content-center">
        Tienes algo para comentarnos? 🫡
      </h1>
      <div className="w-100 d-flex justify-content-center">
        <form
          onSubmit={handleSubmit}
          className="p-5 m-5 justify-content-center bg-secondary-user rounded-4"
          style={{ width: "40rem" }}
        >
          {/*EMAIl*/}
          <div className="mt-4">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control form-control-lg"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div id="emailHelp" className="form-text">
              No compartiremos tus datos con nadie 😊
            </div>
          </div>
          {/*CIUDAD*/}
          <div className=" mt-2">
            <label htmlFor="validationCustom03" className="form-label">
              Ciudad
            </label>
            <input
              type="text"
              className="form-control form-control-lg"
              id="validationCustom03"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          {/*TEXTAREA*/}
          <div className=" my-4">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Escribenos un mensaje contandonos tu opinion
            </label>
            <textarea
              className="form-control form-control-lg"
              id="exampleFormControlTextarea1"
              rows="8"
              value={textarea}
              onChange={(e) => setTextarea(e.target.value)}
            />
          </div>
          {/*CHECKBOX*/}
          <div className="my-4 lg form-check ">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Acepto los terminos y condiciones
            </label>
          </div>
          {/*BUTTON*/}
          <Button
            type="submit"
            className="btn bg-accent-user text-white btn-lg px-5 me-md-2 fw-bold bx-2 border-0"
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Form;
