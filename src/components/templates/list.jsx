import { useEffect, useState } from 'react'; 
import { Container, Row, Col, Table, Tab } from "react-bootstrap";
import SideBar from "../sidebar.jsx";
import { getProducts } from '../../services/product.jsx'; 
import CustomButton from '../atoms/button.jsx';
import CustomCheckbox from '../atoms/checkbox.jsx';
import TvModal from '../organisms/tvmodal.jsx';
import Dropdown from 'react-bootstrap/Dropdown';

function List() {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(null);
  const [selectedRows, setSelectedRows] = useState([]);
  const [show, setShow] = useState(false);
  const [currentOperation, setCurrentOperation] = useState('add');


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
  
  const editRecord = (id) => {
    setShow(true);
    setCurrentOperation('edit');
    const productToEdit = products.find((product) => product.id === id);
    setProduct(productToEdit);
  }

  const addRecord = () => {
    setShow(true);
    setCurrentOperation('add');
    setProduct(null);
  }

  const saveChanges = (updatedTv, currentOperation) => {
    if(currentOperation === 'add') {
      updatedTv.id = products.length > 0 ? products[products.length-1].id + 1 : 101;
      setProducts([...products, updatedTv]);
    }
    else {
      setProducts(products.map(p => p.id === updatedTv.id ? updatedTv : p));
    }
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

  const deleteMultiRecord = () => {
    console.log('Selected Rows for deletion:', selectedRows);
    setProducts(products.filter(p => !selectedRows.includes(p.id)));
    setSelectedRows([]);
  };

  const handleDropdownAction = (eventKey) => {
    if (eventKey === "1") {
      deleteMultiRecord();
    } else if (eventKey === "2") {
      // Handle edit for selected rows
      console.log('Edit selected rows:', selectedRows);
    }
  };

  return (
    <>
      <TvModal
        tv={product}
        currentOperation={currentOperation}
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
                <div style={{ float: 'left' }}>
                  <CustomButton label="Download JSON" variant="success" onClick={downloadJson} />
                </div>

                <div style={{ float: 'right' }}>
                  <CustomButton label="Add Record" variant="primary" onClick={() => addRecord()} />
                </div>
                <br /><br />
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>
                        <CustomCheckbox label="Select All" checked={selectedRows.length === products.length && products.length > 0} onChange={handleSelectAll} />
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
                
                <Dropdown onSelect={handleDropdownAction}>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Actions
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item eventKey="1">Delete</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default List;
