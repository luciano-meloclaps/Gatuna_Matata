import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function GridExample() {
  return (
    <div class="grid_container p-4 ">
      <h2 class="my-5 fs-1 color-blue text-center">
        Nuestros Clientes Satisfechos 😍{" "}
      </h2>
      <Row xs={1} md={3} className="g-5 p-1">
        {Array.from({ length: 7 }).map((_, idx) => (
          <Col key={idx}>
            <Card class="shadow rounded-4 mx-5" style={{ maxWidth: "24rem" }}>
              <Card.Img
                variant="top"
                src="public\pngimg.com - cat_PNG50538.png"
              />
              <Card.Body class="p-4">
                <Card.Title>Loki</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Luciano y Aby
                </Card.Subtitle>
                <Card.Text>
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

export default GridExample;
