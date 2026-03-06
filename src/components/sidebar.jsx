import { Col, Card } from "react-bootstrap";
import CustomSearchBar from './molecules/searchbar.jsx';

function SideBar() {

  return (
    <>
        <Col md={4}>
          <Card className="shadow-sm">
              <Card.Body>
                <Card.Title>React Course</Card.Title>
                <Card.Text>
                    This is a full stack React course using Bootstrap for styling and layout.
                </Card.Text>
                <ul>
                  <li className="">React Introduction</li>
                  <li>React Folder Structure</li>
                  <li>React project on Github</li>
                  <li>React Bootstrap</li>
                  <li>React Router</li>
                  <li>React Forms</li>
                  <li>React State Management</li>
                </ul>
                <CustomSearchBar onSearch={(value) => console.log("Search clicked: " + value)} />        
              </Card.Body>
          </Card>
        </Col>
    </>
  )
}

export default SideBar
