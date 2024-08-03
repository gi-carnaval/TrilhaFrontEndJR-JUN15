import './Header.scss'
import codigoCertoLogo from '../../assets/codigo_certo_logo.png'

export default function Header() {
  return (
    <header className="header">
      <a href="https://www.codigocertocoders.com.br/">
        <img src={codigoCertoLogo} alt="Logo da Comunidade Código Certo" title="Código Certo" />
      </a>
      <nav>
        <a href="#sobre">Sobre mim</a>
        <a href="#gostos">Gostos Pessoais</a>
        <a href="#motivacoes">Motivações</a>
      </nav>
    </header>
  )
}