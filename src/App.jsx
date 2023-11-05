import "./App.css";

import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";
import Protected from "./components/protected/Protected";
import Landing from "./components/landing/Landing";

import { useState } from "react";

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  const setSignedInHandler = (value) => {
    setIsSignedIn(value);
  };

  const setUserInfoHandler = (value) => {
    setUserInfo(value)
  }

  const router = createBrowserRouter([
    //creo el browserRouter que contiene las rutas a los distintos componentes, la ruta general lleva al login(esto despues lo podemos cambiar)
    { path: "/", element: <Landing /> },
    {
      path: "/login",
      element: <Login setSignedInHandler={setSignedInHandler} setUserInfoHandler={setUserInfoHandler}/>,
    }, //le pasamos la funcion asi una vez ingresa los datos correctamente cambia el valor de isSignedIn
    {
      path: "/dashboard",
      element: (
        <Protected isSignedIn={isSignedIn}>
          <Dashboard userInfo={userInfo}/>
          {/*tambien cree un dashboar que reemplaza a lo que teniamos en app, lo moví al dash*/}
        </Protected>
      ), //cree el componente protected para validar que el usuario este registrado, le paso pro prop "isSignedIn" que tiene un booleano
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
