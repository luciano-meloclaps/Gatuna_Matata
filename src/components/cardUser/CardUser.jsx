import Card from "react-bootstrap/Card";

function CardUser({ img, title, subtitle, text }) {
  return (
    <Card
      className="shadow-lg rounded-4 mb-5  p-4 d-flex flex-column"
      style={{ maxWidth: "24rem", height: "95%" }}
    >
      <Card.Img
        variant="top"
        className="object-fit-cover"
        height={350}
        src={img}
      />
      <Card.Body className="p-4 d-flex flex-column justify-content-between">
        <div>
          <Card.Title className="color-black-user fs-4 font-title mb-0">
            {title}
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted mt-0">
            {subtitle}
          </Card.Subtitle>
        </div>
        <Card.Text className="color-gray-user">{text}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardUser;
