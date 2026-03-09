import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function TvModal({ tv, show, handleClose, saveChanges }) {
  const [formData, setFormData] = useState({ id: '', name: '', modal: '', company: '', image: '', description: '' });

  useEffect(() => {
    if (tv) {
      setFormData(tv);
    }
  }, [tv]);

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSave = () => {
    saveChanges(formData);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Edit TV Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">TV ID</InputGroup.Text>
            <Form.Control
              placeholder="TV ID"
              aria-label="tvid"
              aria-describedby="basic-addon1"
              disabled
              value={formData.id}
              onChange={(e) => handleInputChange('id', e.target.value)}
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">TV Name</InputGroup.Text>
            <Form.Control
              placeholder="TV Name"
              aria-label="tvname"
              aria-describedby="basic-addon1"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">TV Modal</InputGroup.Text>
            <Form.Control
              placeholder="TV Modal"
              aria-label="tvmodal"
              aria-describedby="basic-addon1"
              value={formData.modal}
              onChange={(e) => handleInputChange('modal', e.target.value)}
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">TV Company</InputGroup.Text>
            <Form.Control
              placeholder="TV Company"
              aria-label="tvcompany"
              aria-describedby="basic-addon1"
              value={formData.company}
              onChange={(e) => handleInputChange('company', e.target.value)}
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Image URL</InputGroup.Text>
            <Form.Control
              placeholder="Image URL"
              aria-label="tvimage"
              aria-describedby="basic-addon1"
              value={formData.image}
              onChange={(e) => handleInputChange('image', e.target.value)}
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Description</InputGroup.Text>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Description"
              aria-label="tvdescription"
              aria-describedby="basic-addon1"
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
            />
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default TvModal;