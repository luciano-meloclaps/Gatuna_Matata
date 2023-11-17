import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import CardUser from "../cardUser/CardUser";

// Array de objetos, cada objeto representa una CARD (similamos un JSON)
const cards = [
  {
    img: "https://drive.google.com/file/d/14OUfsf7alMuysWcIGq8ZUj7JvDNvinFr/view?usp=drive_link",
    title: "Loki",
    subtitle: "Luciano y Aby",
    text: "Excelente servicio por parte de Gatuna Matata. Loki es muy feliz cada vez que viene su niñera 😍. ¡Super recomendable este servicio!",
  },
  {
    img: "https://drive.google.com/file/d/1PGT3Mx6e4CMeK4-Ybzmv07oFXbv4Y6ad/view?usp=drive_link",
    title: "Mini",
    subtitle: "Camilo y Brenda",
    text: "Mini es una cliente fiel de Gatuna Matata 🤣, por eso se alegra y salta cada vez que se encuentra con su niñera.",
  },
  {
    img: "https://drive.google.com/file/d/1ekA4d-LAOI-pN_xPrIdwlVzSLE-qETab/view?usp=drive_link",
    title: "Akira",
    subtitle: "Juan y Mari",
    text: "Akira, también conocida como el peligro mismo 😵‍💫, solo puede ser controlada por niñeras expertas.",
  },
  {
    img: "https://drive.google.com/file/d/1dDHlTLtntgA6osbjOF6WoLYhuV2I7uvo/view?usp=drive_link",
    title: "Tom",
    subtitle: "Aby y Eliezer",
    text: "Tom, el gatito más bueno y mimoso de todo el país 😘, siempre está tranquilo y feliz. Disfruta de una buena compañía.",
  },
  {
    img: "https://drive.google.com/file/d/1XCBKlCR9zA6uY5O9YJUsueoD-v3VKWrg/view?usp=drive_link",
    title: "Titi",
    subtitle: "Mari",
    text: "También conocido como furia nocturna 😈, el verdadero contenedor de alimento pero ¡OJO! de buena calidad.",
  },
  {
    img: "https://drive.google.com/file/d/1vwkneakYmasDt21hSjKTnuMYf7ZzEXx8/view?usp=drive_link",
    title: "Misa",
    subtitle: "Ezequiel y Palo",
    text: "Misa es una cliente recurrente y de las más buenas y bonitas 😇, le encanta jugar con sus niñeras.",
  },
  {
    img: "https://drive.google.com/file/d/15APUnseFDS0y1BIZulo5QBfoLLARZgAJ/view?usp=drive_link",
    title: "Onur",
    subtitle: "Jose",
    text: "Onur, uno de los más bonitos, se destaca porque le encanta trepar por todos lados y de ahí saltar a sus dueños 😱.",
  },
  {
    img: "https://images.pexels.com/photos/3777622/pexels-photo-3777622.jpeg",
    title: "Ramon",
    subtitle: "Jose",
    text: "Ramon, uno de los mas bonitos se destaca porque le encanta trepar por todos lados y de ahi saltar a sus dueños 😱",
  },
  {
    img: "https://images.pexels.com/photos/1317844/pexels-photo-1317844.jpeg",
    title: "Coria",
    subtitle: "Jose",
    text: "Coria, uno de los mas bonitos se destaca porque le encanta trepar por todos lados y de ahi saltar a sus dueños 😱",
  },
];

function GridCardsUser() {
  return (
    /* Mapeamios las CARDS */
    <div className="grid_container py-5 my-5 " id="gridcards">
      <h2 className="my-5 fs-1 color-accent-user font-tile text-center">
        Nuestros Clientes Satisfechos 😍{" "}
      </h2>
      <Row xs={1} md={3} className="g-5  p-5 m-0  row row-cols-md-4">
        {cards.map((card, idx) => (
          <Col key={idx}>
            <CardUser
              img={card.img}
              title={card.title}
              subtitle={card.subtitle}
              text={card.text}
            />
          </Col>
        ))}
      </Row>

    </div>
  );
}

export default GridCardsUser;
