import "./App.css";
import Footer from "./components/footer/Footer";
import GridExample from "./components/gridCards/gridCards";
import Hero from "./components/hero/Hero";
import LoginForm from "./components/login-form/LoginForm";

import Navbar from "./components/navbar/Navbar";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <GridExample />
      {/*<LoginForm />*/}
      <Footer />
    </>
  );
}

export default App;
