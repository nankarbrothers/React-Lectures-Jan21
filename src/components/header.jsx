import MainNavbar from './MainNavbar.jsx';
import CustomAlert from './atoms/customAlert.jsx';

function Header() {
  return (
    <>
      <div>
        <CustomAlert variant="success" message="Welcome React Course!" />
        <MainNavbar />
      </div>
    </>
  )
}

export default Header
