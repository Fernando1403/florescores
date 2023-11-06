import "./Login.css"
import ColorSchemesExample from "./ColorSchemesExample"
import Footer from './Footer'

export function Login() {
  return (
    <div>
    <ColorSchemesExample/>
    <div className="containerLogin">
    <header className="headerLogin">
    <img src="/src/assets/flower2.svg" alt="" height='100px'/><br/>
      <h3>Flores & Cores</h3><br/><br/>
      <h3>Entrar</h3>
    </header>

    <form action="">
      <div className="inputContainerLogin">
        <label htmlFor="usuario">EMail:   </label>
        <input 
        placeholder="Insira o seu Usuário"/>
      </div>

      <div className="inputContainerLogin">
        <label htmlFor="senha">Senha:   </label>
        <input 
        placeholder="Insira sua senha"/>
      </div>

    <a className="ButtonLogin" href="/">
      Login
    </a>

    <div className="footerLogin">
      <p>Ainda não tem uma conta ?</p>
      <a href="">Crie uma Conta</a>
    </div>

    </form>
    </div>
    <Footer/>
    </div>
)
}
export default Login