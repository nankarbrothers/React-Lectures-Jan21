import Form from "react-bootstrap/Form";

const CustomCheckbox = ({ label, checked, onChange }) => {
  return (
    <Form.Check
      type="checkbox"
      label={label}
      checked={checked}
      onChange={onChange}
    />
  );
};


export default CustomCheckbox;
