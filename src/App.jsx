import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import Home from './pages/Home';
import Crud from './pages/crud';
import Redux from './pages/Redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Container fluid>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/crud" element={<Crud />} />
          <Route path="/redux" element={<Redux />} />
        </Routes>
        <Footer />
      </Container>
    </BrowserRouter>
  )
}

export default App
