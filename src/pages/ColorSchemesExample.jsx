import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';

function ColorSchemesExample() {
  return (
    <>
    <div>
    <Navbar bg="dark" variant="dark">
          <div className='Nav1'>
          <img alt='' src='/src/assets/flower1.svg' height="100" width='120' className="img1"/>{''}
          </div>       
    </Navbar>    

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Text>Flores & Cores</Navbar.Text>
          <Nav className="me-auto">
            <Nav.Link href="/" className='item1'>Home</Nav.Link>
            <Nav.Link href="/produtos" className='item2'>Produtos</Nav.Link>
            <Nav.Link href="/login" className='item3'>Entrar</Nav.Link>
            <Nav.Link href="/cadastrar" className='item4'>Cadastrar Produtos</Nav.Link>
          </Nav>
        </Container>  
      </Navbar>
      </div>
    </>
  );
}

export default ColorSchemesExample;