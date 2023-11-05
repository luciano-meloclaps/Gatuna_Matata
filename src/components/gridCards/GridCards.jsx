import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function GridCardsUser() {
  return (
    <div className="grid_container py-5 my-5 ">
      <h2 className="my-5 fs-1 color-accent-user font-tile text-center">
        Nuestros Clientes Satisfechos 😍{" "}
      </h2>
      <Row xs={1} md={3} className="g-5  p-5 m-0  row row-cols-md-4">
        {Array.from({ length: 8 }).map((_, idx) => (
          <Col key={idx}>
            <Card
              className="shadow-lg rounded-4  p-4"
              style={{ maxWidth: "24rem" }}
            >
              <Card.Img
                variant="top"
                src="public\pngimg.com - cat_PNG50538.png"
              />
              <Card.Body className="p-4">
                <Card.Title className="color-black-user fs-4 font-title">
                  Loki
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Luciano y Aby
                </Card.Subtitle>
                <Card.Text className="color-gray-user">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default GridCardsUser;
