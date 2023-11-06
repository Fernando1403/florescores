import ColorSchemesExample from './ColorSchemesExample';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Footer from './Footer'

function Produto1(){
    return(
        <div>
            <ColorSchemesExample/><br/>

            <div className="container">
                <Card style={{width: '68rem'}}>
                <Card.Img height={'900px'} variant="top" src="https://media.discordapp.net/attachments/808418993446060052/1171092709604331560/annie-spratt-WBpr_yH0Frg-unsplash.jpg?ex=655b6c13&is=6548f713&hm=351cb82b369511545acff0acf88f0d9ded71441ce8ce3c7d9bba855f5c88471e&=&width=370&height=593"/>
                <Card.Body>
                <Card.Title>Flores Atropicais</Card.Title>
                <Card.Text>
                <h2>R$: 399,99</h2>
                </Card.Text>
                <Card.Text>
                Flores coloridas e com vida duradoura
                </Card.Text>
                <Card.Text>
                    Disponivel: 7
                </Card.Text>
                <Button variant="success">Comprar</Button>
                </Card.Body>
                </Card><br/>
            </div>
            <Footer/>
        </div>
    )
}

export default Produto1