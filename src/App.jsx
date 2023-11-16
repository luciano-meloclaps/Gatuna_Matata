import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";
import Protected from "./components/protected/Protected";
import Landing from "./components/landing/Landing";
import BadRequest from "./components/badRequest/BadRequest";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Landing /> },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/dashboard",
      element: (
        <Protected>
          <Dashboard />
        </Protected>
      ),
    },
    {
      path: "/404",
      element: <BadRequest />,
    },
    {
      path: "*",
      element: <Navigate to="/404" />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
