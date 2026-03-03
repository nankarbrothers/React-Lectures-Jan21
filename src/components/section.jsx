import { Col, Button, Card } from "react-bootstrap";

function Content() {

  return (
    <>
        <Col md={8}>
            <Card className="mb-4 shadow-sm">
                <Card.Body>
                    <Card.Title>Section Content</Card.Title>
                    <Card.Text>
                        This is the main content area using Bootstrap container layout.
                    </Card.Text>
                    <Button variant="primary">Learn More</Button>
                </Card.Body>
            </Card>
        </Col>
    </>
  )
}

export default Content
