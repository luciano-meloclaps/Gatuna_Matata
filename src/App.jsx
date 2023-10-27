import "./App.css";


import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";


import "bootstrap/dist/css/bootstrap.min.css";

import Login from "./components/login/Login"
import Dashboard from "./components/dashboard/Dashboard";
import Protected from "./components/protected/Protected";
import { useState } from "react";

function App() {

  const [isSignedIn, setIsSignedIn] = useState(false)

  const setSignedInHandler = (value) => {
    setIsSignedIn(value)
  }

  const router = createBrowserRouter([ //creo el browserRouter que contiene las rutas a los distintos componentes, la ruta general lleva al login(esto despues lo podemos cambiar)
    { path: "/", element: <Navigate to="/login" /> },
    { path: "/login", element: <Login setSignedInHandler={setSignedInHandler}/> }, //le pasamos la funcion asi una vez ingresa los datos correctamente cambia el valor de isSignedIn
    {
      path: "/home", element: (<Protected isSignedIn={isSignedIn}>
        <Dashboard />{/*tambien cree un dashboar que reemplaza a lo que teniamos en app, lo moví al dash*/}
      </Protected>)//cree el componente protected para validar que el usuario este registrado, le paso pro prop "isSignedIn" que tiene un booleano
    }
  ])

  return <RouterProvider router={router} />

}

export default App;
