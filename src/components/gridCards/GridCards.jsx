import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./gridCard.css";

function GridExample() {
  return (
    <div className="grid_container p-4 my-5">
      <Row xs={1} md={3} className="g-5 p-1">
        {Array.from({ length: 7 }).map((_, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Img variant="top" src="" />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
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
