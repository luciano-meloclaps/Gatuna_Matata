import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";
import Protected from "./components/protected/Protected";
import Landing from "./components/landing/Landing";



function App() {

  const router = createBrowserRouter([
    { path: "/", element: <Landing /> },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/dashboard",
      element: (
        <Protected>
          <Dashboard/>
        </Protected>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
