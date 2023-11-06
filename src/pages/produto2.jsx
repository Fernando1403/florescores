import ColorSchemesExample from './ColorSchemesExample';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Footer from './Footer'

function Produto2(){
    return(
        <div>
            <ColorSchemesExample/><br/>

            <div className="container">
                <Card style={{width: '68rem'}}>
                <Card.Img height={'900px'} variant="top" src="https://cdn.discordapp.com/attachments/808418993446060052/1171093568992059492/tavin-dotson-WC4IWN3-fSo-unsplash.jpg?ex=655b6ce0&is=6548f7e0&hm=1eb59db9167f1a83ed31c864f704284f4b4c3bfafb0ea0426297c38a123d36ba&"/>
                <Card.Body>
                <Card.Title>Chuteira Nike Superfly 8 Elite Campo</Card.Title>
                <Card.Text>
                <h2>R$ 1529,99</h2>
                </Card.Text>
                <Card.Text>
                A Nike Mercurial Dream Speed Superfly 8 Elite incorpora a maior força autoproclamada de Cristiano Ronaldo: o poder da mente e da meditação. Tons suaves de verde funcionam em conjunto com tons energizantes de roxo e amarelo, que criam uma chuteira que irradia positividade.
                </Card.Text>
                <Card.Text>
                    Disponivel: 22
                </Card.Text>
                <Button variant="success">Comprar</Button>
                </Card.Body>
                </Card><br/>
            </div>
            <Footer/>
        </div>
    )
}

export default Produto2