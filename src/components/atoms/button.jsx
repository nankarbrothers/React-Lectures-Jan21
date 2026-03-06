import { Button } from 'react-bootstrap';

const CustomButton = ({ label, variant = "primary", onClick, type = "button" }) => {
  return (
    <Button variant={variant} onClick={onClick} type={type}>
      {label}
    </Button>
  );
};

export default CustomButton;