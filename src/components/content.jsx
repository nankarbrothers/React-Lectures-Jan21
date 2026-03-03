import { Container, Row, Col, Navbar, Nav, Button, Card } from "react-bootstrap";
import SideBar from "./sidebar.jsx";
import Section from "./section.jsx";

function Content() {

  return (
    <>
       <Container className="mt-4">
        <Row>
          <SideBar />
          <Section />
        </Row>
      </Container>
    </>
  )
}

export default Content
