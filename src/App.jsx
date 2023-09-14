import "./App.css";
import GridExample from "./components/gridCards/gridCards";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <GridExample />
    </>
  );
}

export default App;
