import React from "react";

const Footer = () => {
  return (
    <div className="bg-primary-user">
      <div className="container">
        <footer className="row p-5 border-top fixed-bot ">
          <div className="col-4">
            <h1 className="font-marca text-white">Gatuna Matata</h1>
            <ul class="list-unstyled d-flex">
              <li class="ms-3">
                <a
                  class="link-body-emphasis"
                  href="
                gatuna_matata\src\images\instagram-svgrepo-com.svg"
                >
                  <svg class="bi" width="24" height="24"></svg>
                </a>
              </li>
              <li class="ms-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5"
                  />
                </svg>
              </li>
              <li class="ms-3">
                <a class="link-body-emphasis" href="#">
                  <svg class="bi" width="24" height="24">
                    <use xlink:href="#facebook"></use>
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          <div className="col-2 mx-4">
            <h5 className="text-white">Legales</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Licencia
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Política de devoluciones
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Política de envío
                </a>
              </li>
            </ul>
          </div>

          <div className="col-2 mx-4">
            <h5 className="text-white">Terminos y condiciones</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Términos de servicio
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Política de privacidad
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Política de cookies
                </a>
              </li>
            </ul>
          </div>

          <div className="col-2 mx-4">
            <h5 className="text-white">Acerca de nosotros</h5>
            <ul className="nav flex-column mb-5">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Quiénes somos
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Nuestro equipo
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Carreras
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Prensa
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div class="d-flex flex-column flex-sm-row justify-content-center py-3  border-top">
            <p className="text-muted">
              © 2023 Gatuna Matata. Todos los derechos reservados
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
