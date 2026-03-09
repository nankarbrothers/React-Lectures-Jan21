import { useEffect, useState } from 'react'; 
import { Container, Row, Col, Table, Tab } from "react-bootstrap";
import SideBar from "../sidebar.jsx";
import { getProducts } from '../../services/product.jsx'; 
import CustomButton from '../atoms/button.jsx';
import CustomCheckbox from '../atoms/checkbox.jsx';
import TvModal from '../organisms/tvmodal.jsx';

function List() {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(null);
  const [selectedRows, setSelectedRows] = useState([]);
  const [show, setShow] = useState(false);


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
    setShow(true);
    const productToEdit = products.find((product) => product.id === id);
    console.log("Edit record with ID:", productToEdit);
    setProduct(productToEdit);
    // Implement edit functionality here
  }

  const saveChanges = (updatedTv) => {
    setProducts(products.map(p => p.id === updatedTv.id ? updatedTv : p));
    setShow(false);
  }

  const downloadJson = () => {
    const dataStr = JSON.stringify(products, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = 'tv.json';
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  }

  const deleteRecord = (id) => {
    setProducts(products.filter(p => p.id !== id));
  }

  return (
    <>
    <TvModal
      tv={product}
      show={show}
      handleClose={() => setShow(false)}
      saveChanges={saveChanges}
    />
       <Container className="mt-4">
        <Row>
          <SideBar />
          <Col md={8}>
            <Container className="mt-8">
                <h1>CRUD Operations</h1>
                <p>This is the CRUD operations page. Here you can manage your data with Create, Read, Update, and Delete functionalities.</p>
                <CustomButton label="Download JSON" variant="success" onClick={downloadJson} />
                <br /><br />
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
                          <CustomButton label="Edit" variant="primary" onClick={() => editRecord(product.id)} />
                          &nbsp;
                          <CustomButton label="Delete" variant="danger" onClick={() => deleteRecord(product.id) } />
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
