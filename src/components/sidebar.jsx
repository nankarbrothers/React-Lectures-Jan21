import { Col, Card } from "react-bootstrap";

function SideBar() {

  return (
    <>
        <Col md={4}>
        <Card className="shadow-sm">
            <Card.Body>
              <Card.Title>Sidebar</Card.Title>
              <Card.Text>
                  This is a sidebar section.
              </Card.Text>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </Card.Body>
        </Card>
        </Col>
    </>
  )
}

export default SideBar
