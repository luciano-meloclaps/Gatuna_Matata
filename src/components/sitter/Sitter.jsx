import React from "react";

const Sitter = () => {
  return (
    <div id="sitter" className="vh-100">
      <div class="container my-5 px-4 py-5 rounded">
        <h2 class="pb-2 border-bottom color-accent-user  ">
          Las mejores niñeras de gatos 😺
        </h2>

        <div class="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5  ">
          <div class="col d-flex flex-column align-items-start gap-2 p-5 ">
            <h2 class="fw-bold text-body-emphasis ">
              Cuidado excepcional para tus amigos felinos
            </h2>
            <p class="text-body-secondary">
              Ofrecemos un servicio de cuidado de gatos de alta calidad,
              personalizado y confiable. Nuestro equipo de niñeras de gatos
              profesionales se dedica a proporcionar el mejor cuidado para vos y
              tus amigos felinos.
            </p>
            <a href="#" class="btn btn-info text-white btn-lg">
              Reserva ahora
            </a>
          </div>

          <div class="col">
            <div class="row row-cols-1 row-cols-sm-2 g-5">
              <div class="col d-flex flex-column gap-2">
                <div class="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-info fs-4 rounded-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="80"
                    fill="currentColor"
                    class="bi bi-brush"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15.825.12a.5.5 0 0 1 .132.584c-1.53 3.43-4.743 8.17-7.095 10.64a6.067 6.067 0 0 1-2.373 1.534c-.018.227-.06.538-.16.868-.201.659-.667 1.479-1.708 1.74a8.118 8.118 0 0 1-3.078.132 3.659 3.659 0 0 1-.562-.135 1.382 1.382 0 0 1-.466-.247.714.714 0 0 1-.204-.288.622.622 0 0 1 .004-.443c.095-.245.316-.38.461-.452.394-.197.625-.453.867-.826.095-.144.184-.297.287-.472l.117-.198c.151-.255.326-.54.546-.848.528-.739 1.201-.925 1.746-.896.126.007.243.025.348.048.062-.172.142-.38.238-.608.261-.619.658-1.419 1.187-2.069 2.176-2.67 6.18-6.206 9.117-8.104a.5.5 0 0 1 .596.04zM4.705 11.912a1.23 1.23 0 0 0-.419-.1c-.246-.013-.573.05-.879.479-.197.275-.355.532-.5.777l-.105.177c-.106.181-.213.362-.32.528a3.39 3.39 0 0 1-.76.861c.69.112 1.736.111 2.657-.12.559-.139.843-.569.993-1.06a3.122 3.122 0 0 0 .126-.75l-.793-.792zm1.44.026c.12-.04.277-.1.458-.183a5.068 5.068 0 0 0 1.535-1.1c1.9-1.996 4.412-5.57 6.052-8.631-2.59 1.927-5.566 4.66-7.302 6.792-.442.543-.795 1.243-1.042 1.826-.121.288-.214.54-.275.72v.001l.575.575zm-4.973 3.04.007-.005a.031.031 0 0 1-.007.004zm3.582-3.043.002.001h-.002z" />

                    <use xlink:href="#collection"></use>
                  </svg>
                </div>
                <h4 class="fw-semibold mb-0 text-body-emphasis">
                  Servicio personalizado
                </h4>
                <p class="text-body-secondary">
                  Nos esforzamos por conocer a cada gato y sus necesidades
                  únicas para proporcionar el mejor cuidado posible, por eso nos
                  diferenciamos de la competencia.
                </p>
              </div>

              <div class="col d-flex flex-column gap-2">
                <div class="feature-icon-small d-inline-flex align-items-center justify-content-center  text-bg-primary bg-info  fs-4 rounded-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="80"
                    fill="currentColor"
                    class="bi bi-person-square"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z" />
                  </svg>
                </div>
                <h4 class="fw-semibold mb-0 text-body-emphasis">
                  Niñeras experimentadas
                </h4>
                <p class="text-body-secondary">
                  Nuestras niñeras de gatos son seleccionadas de manera
                  exhaustiva y obvio aman a los animales, cuentan con mucha
                  experiencia.
                </p>
              </div>

              <div class="col d-flex flex-column gap-2">
                <div class="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-info  fs-4 rounded-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="80"
                    fill="currentColor"
                    class="bi bi-calendar-check"
                    viewBox="0 0 16 16"
                  >
                    <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                  </svg>
                </div>
                <h4 class="fw-semibold mb-0 text-body-emphasis">
                  Reservas fáciles
                </h4>
                <p class="text-body-secondary">
                  Nuestro objetivo es crear un proceso de reserva es simple y
                  fácil de usar, lo que facilita la programación de servicios de
                  cuidado de gatos, asi solo te preocupas en lo mas importante.
                </p>
              </div>

              <div class="col d-flex flex-column gap-2">
                <div class="feature-icon-small d-inline-flex align-items-center justify-content-center  text-bg-primary bg-info  fs-4 rounded-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="80"
                    fill="currentColor"
                    class="bi bi-bandaid"
                    viewBox="0 0 16 16"
                  >
                    <path d="M14.121 1.879a3 3 0 0 0-4.242 0L8.733 3.026l4.261 4.26 1.127-1.165a3 3 0 0 0 0-4.242ZM12.293 8 8.027 3.734 3.738 8.031 8 12.293 12.293 8Zm-5.006 4.994L3.03 8.737 1.879 9.88a3 3 0 0 0 4.241 4.24l.006-.006 1.16-1.121ZM2.679 7.676l6.492-6.504a4 4 0 0 1 5.66 5.653l-1.477 1.529-5.006 5.006-1.523 1.472a4 4 0 0 1-5.653-5.66l.001-.002 1.505-1.492.001-.002Z" />
                    <path d="M5.56 7.646a.5.5 0 1 1-.706.708.5.5 0 0 1 .707-.708Zm1.415-1.414a.5.5 0 1 1-.707.707.5.5 0 0 1 .707-.707ZM8.39 4.818a.5.5 0 1 1-.708.707.5.5 0 0 1 .707-.707Zm0 5.657a.5.5 0 1 1-.708.707.5.5 0 0 1 .707-.707ZM9.803 9.06a.5.5 0 1 1-.707.708.5.5 0 0 1 .707-.707Zm1.414-1.414a.5.5 0 1 1-.706.708.5.5 0 0 1 .707-.708ZM6.975 9.06a.5.5 0 1 1-.707.708.5.5 0 0 1 .707-.707ZM8.39 7.646a.5.5 0 1 1-.708.708.5.5 0 0 1 .707-.708Zm1.413-1.414a.5.5 0 1 1-.707.707.5.5 0 0 1 .707-.707Z" />
                  </svg>
                </div>
                <h4 class="fw-semibold mb-0 text-body-emphasis">
                  Cuidados sobresalientea
                </h4>
                <p class="text-body-secondary">
                  Ofrecemos los mejores cuidados para nuestros amigos gatunos,
                  asegurando que obtienes el mejor servicio y cuidado, para que
                  todos estemos felices. tu dinero.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sitter;
