import ColorSchemesExample from "./ColorSchemesExample"
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Footer from "./Footer";

import Carousel from './carousel'

function Contato(){
    return(
        <div>
            <ColorSchemesExample/><br/>
            <h1>Cadastrar Produtos</h1>        
        <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Id do Produto:</InputGroup.Text>
        <Form.Control
          placeholder="Id"
          aria-label="Id"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <InputGroup>
        <InputGroup.Text>Descrição:</InputGroup.Text>
        <Form.Control as="textarea" aria-label="With textarea" />
      </InputGroup><br/>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Tipo:</InputGroup.Text>
        <Form.Control
          placeholder="Tipo"
          aria-label="Tipo"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Data de Entrega:</InputGroup.Text>
        <Form.Control
          placeholder="../../...."
          aria-label="Telefone"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <InputGroup>
        <InputGroup.Text>Assunto:</InputGroup.Text>
        <Form.Control as="textarea" aria-label="With textarea" />
      </InputGroup><br/>
      
      <Button variant="success">Enviar</Button>{' '}<br/><br/>
      <h2>Conte sempre com a Flores & Cores para anunciar seus produtos !</h2>   
            <Footer/>
        </div>
    )
}

export default Contato