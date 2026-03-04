import { useEffect, useState } from 'react'; 
import { Container, Row, Col, Table, Tab } from "react-bootstrap";
import SideBar from "../sidebar.jsx";
import { getProducts } from '../../services/product.jsx'; 

function List() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log("List component mounted");
    getProducts()
      .then((data) => {
        console.log("Products data:", data);
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  });
  
  return (
    <>
       <Container className="mt-4">
        <Row>
          <SideBar />
          <Col md={8}>
            <Container className="mt-8">
                <h1>CRUD Operations</h1>
                <p>This is the CRUD operations page. Here you can manage your data with Create, Read, Update, and Delete functionalities.</p>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th><input type="checkbox" name="selectAll"/></th>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Modal</th>
                      <th>Company</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product) => (
                      <tr key={product.id}>
                        <td><input type="checkbox" name="selectAll"/></td>
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td>{product.modal}</td>
                        <td>{product.company}</td>
                        <td><button type="button" name="Edit">Edit</button></td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default List;
