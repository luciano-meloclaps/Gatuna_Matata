import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import CardUser from "../cardUser/CardUser";

// Array de objetos, cada objeto representa una CARD (similamos un JSON)
const cards = [
  {
    img: "src/images/imgProfileCats/imgCardLoki.jpg",
    title: "Loki",
    subtitle: "Luciano y Aby",
    text: "Excelente servicio por parte de Gatuna Matata. Loki es muy feliz cada vez que viene su niñera 😍. ¡Super recomendable este servicio!",
  },
  {
    img: "src/images/imgProfileCats/imgCardMimi.jpg",
    title: "Mini",
    subtitle: "Camilo y Brenda",
    text: "Mini es una cliente fiel de Gatuna Matata 🤣, por eso se alegra y salta cada vez que se encuentra con su niñera.",
  },
  {
    img: "src/images/imgProfileCats/imgCardAkira.jpg",
    title: "Akira",
    subtitle: "Juan y Mari",
    text: "Akira, también conocida como el peligro mismo 😵‍💫, solo puede ser controlada por niñeras expertas.",
  },
  {
    img: "src/images/imgProfileCats/imgCardTom.jpg",
    title: "Tom",
    subtitle: "Aby y Eliezer",
    text: "Tom, el gatito más bueno y mimoso de todo el país 😘, siempre está tranquilo y feliz. Disfruta de una buena compañía.",
  },
  {
    img: "src/images/imgProfileCats/imgCardTiti.jpg",
    title: "Titi",
    subtitle: "Mari",
    text: "También conocido como furia nocturna 😈, el verdadero contenedor de alimento pero ¡OJO! de buena calidad.",
  },
  {
    img: "src/images/imgProfileCats/imgCardMisa.jpg",
    title: "Misa",
    subtitle: "Ezequiel y Palo",
    text: "Misa es una cliente recurrente y de las más buenas y bonitas 😇, le encanta jugar con sus niñeras.",
  },
  {
    img: "src/images/imgProfileCats/imgCardOnur.jpg",
    title: "Onur",
    subtitle: "Jose",
    text: "Onur, uno de los más bonitos, se destaca porque le encanta trepar por todos lados y de ahí saltar a sus dueños 😱.",
  },
];

function GridCardsUser() {
  return (
    /* Mapeamios las CARDS */
    <div class="container">
      <div id="gridcards">
        <h2 className="my-5 fs-1 color-accent-user font-tile text-center">
          Nuestros Clientes Satisfechos 😍{" "}
        </h2>
        <Row xs={1} md={3} lg={3} className="g-5 p-5 m-0  row row-cols-md-4">
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
    </div>
  );
}

export default GridCardsUser;
