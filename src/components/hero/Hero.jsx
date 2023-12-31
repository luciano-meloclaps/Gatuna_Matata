import "./hero.css";
import { useNavigate } from "react-router";
import Button from "react-bootstrap/Button";

const Hero = () => {
  const navigateLoginHero = useNavigate();
  return (
    <div className="wave-container">
      <div className="hero_container container p-5">
        <div className="row  pb-0 pe-lg-0 pt-lg-5 align-items-center">
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 className="display-1 fw-bold color-black-user">
              Asegura el bienestar de tu Gato! 💜
            </h1>
            <p className="lead secondary color-gray-user">
              ¿Adoras a los peludos y bigotones? Entonces, te va a interesar
              esta propuesta. En Gatuna Mata, nos apasiona garantizar que cada
              mascota y criatura reciba el amor y la atención que merece. 🐱
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3 ">
              <Button
                className="btn bg-info text-white btn-lg px-5 me-md-2 fw-bold bx-2 border-0"
                onClick={() => navigateLoginHero("/login")}
              >
                Registrate!
              </Button>
            </div>
          </div>
          <div className="col-lg-4 offset-lg-1 p-0">
            <img src="/pngimg.com - cat_PNG50538.png" alt="Hero" width="560" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
