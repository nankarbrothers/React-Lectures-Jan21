import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import Content from './components/content'; 
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <>
      <Container fluid>
        <Header />
        <Content/>
        <Footer />
      </Container>
    </>
  )
}

export default App
