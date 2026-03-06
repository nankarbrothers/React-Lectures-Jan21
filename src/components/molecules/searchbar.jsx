import { useState } from "react";
import { Form } from "react-bootstrap";
import CustomButton from '../atoms/button.jsx';

const CustomSearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <Form className="d-flex">
        <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
        />
        <CustomButton label="Search" variant="outline-success" onClick={handleSearch} />
    </Form>
  );
};

export default CustomSearchBar;


