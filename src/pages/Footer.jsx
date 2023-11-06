import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section about">
            <img src="/src/assets/flower1.svg" height="100" width='120' alt=""/>
            <p>
              Somos uma loja dedicada a oferecer as melhores flores para você.
              Encontre os modelos mais lindos e exclusivos em nosso catálogo.
            </p>
          </div>
          <div className="footer-section links">
            <h3>Links</h3>
            <ul>
              <li><a href="/">Início</a></li>
              <li><a href="/produtos">Produtos</a></li>
              <li><a href="/cadastrar">Cadastrar</a></li>
              <li><a href="/login">Entrar</a></li>
            </ul>
          </div>
          <div className="footer-section contact">
            <h3>Contato</h3>
            <p>
              <i className="fa fa-phone"></i> (99) 9999-9999
            </p>
            <p>
              <i className="fa fa-envelope"></i> suporte@floresecores.com
            </p>
            <p>
              <i className="fa fa-map-marker"></i> Rua FIAP SCHOOL, 123 - São Paulo - SP
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Flores&Cores. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;