import { useState } from "react";
import Alert from "react-bootstrap/Alert";

const CustomAlert = ({ variant = "success", message }) => {
  const [show, setShow] = useState(true);

  if (!show) return null;

  return (
    <Alert variant={variant} dismissible onClose={() => setShow(false)}>
      {message}
    </Alert>
  );
};

export default CustomAlert;