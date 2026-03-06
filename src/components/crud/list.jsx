import { useEffect, useState } from 'react'; 
import { Container, Row, Col, Table, Tab } from "react-bootstrap";
import SideBar from "../sidebar.jsx";
import { getProducts } from '../../services/product.jsx'; 
import CustomButton from '../atoms/button.jsx';
import CustomCheckbox from '../atoms/checkbox.jsx';

function List() {
  const [products, setProducts] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);


   // Select All
  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedRows(products.map((product) => product.id));
    } else {
      setSelectedRows([]);
    }
  };

    // Individual row checkbox
  const handleRowSelect = (id) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  };

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
  }, []);
  
  useEffect(() => {
    console.log("Selected Rows:", selectedRows);
  }, [selectedRows]);

  const editRecord = (id) => {
    console.log("Edit record with ID:", id);
    // Implement edit functionality here
  }

  const deleteRecord = (id) => {
    console.log("Delete record with ID:", id);
    // Implement delete functionality here
  }

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
                      <th>
                        <CustomCheckbox label="Select All" checked={selectedRows.length === products.length} onChange={handleSelectAll} />
                      </th>
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
                        <td>
                          <CustomCheckbox label="" checked={selectedRows.includes(product.id)} onChange={() => handleRowSelect(product.id)} />
                        </td>
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td>{product.modal}</td>
                        <td>{product.company}</td>
                        <td>
                          <CustomButton label="Edit" variant="primary" onClick={editRecord} />
                          &nbsp;
                          <CustomButton label="Delete" variant="danger" onClick={deleteRecord} />
                        </td>
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
