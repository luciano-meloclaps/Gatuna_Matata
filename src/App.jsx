import "./App.css";
import GridExample from "./components/gridCards/gridCards";
import Hero from "./components/hero/Hero";
import Login from "./components/login/Login";
import Navbar from "./components/navbar/Navbar";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <GridExample />
      <Login />
    </>
  );
}

export default App;
