import "./hero.css";
import { useNavigate } from "react-router";

const Hero = () => {
  const navigateLoginHero = useNavigate();
  return (
    <div className="wave-container">
      <div className="hero_container container  my-5">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center">
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 className="display-1 fw-bold">
              Asegura el bienestar de tu mascota
            </h1>
            <p className="lead">
              Quickly design and customize responsive mobile-first sites with
              Bootstrap, the world’s most popular front-end open source toolkit,
              featuring Sass variables and mixins, responsive grid system,
              extensive prebuilt components, and powerful JavaScript plugins.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
              <button
                className="btn bg-blue btn-lg px-5 me-md-2 fw-bold"
                onClick={() => navigateLoginHero("/login")}
              >
                Registrate!
              </button>
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
