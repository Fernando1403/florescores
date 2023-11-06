import Carousel from 'react-bootstrap/Carousel';

function IndividualIntervalsExample() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://media.discordapp.net/attachments/808418993446060052/1171094879036776509/gerome-bruneau-RPmWEtZLh7U-unsplash.jpg?ex=655b6e19&is=6548f919&hm=91d587fe52752acf191cf10fef6d203e629135d32db90c3eea6f9f47dc5d3ce0&=&width=890&height=593" height={500}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Os melhores preços do mercado</h3>
          <p>Qualidade e Segurança na entrega!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://media.discordapp.net/attachments/808418993446060052/1171094868270010398/corina-ardeleanu-sWlxCweDzzs-unsplash.jpg?ex=655b6e16&is=6548f916&hm=4f187545877e95b1cd9550bd3807ce8ffb19ebde46c5305a5101aaf72d8401d8&=&width=960&height=578" height={500}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Brigou ?</h3>
          <p>Apenas Compre.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.discordapp.net/attachments/808418993446060052/1171094825945272360/ioann-mark-kuznietsov-eHlVZcSrjfg-unsplash_1.jpg?ex=655b6e0c&is=6548f90c&hm=2b342e105e18926fa98c4966bb1cb736a0f2bfc1952ec295bda76de5adef23f3&=&width=890&height=593" height={500}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Juntos nos movemos</h3>
          <p>
            Encontre o presente perfeito para todos as ocasiões.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;

