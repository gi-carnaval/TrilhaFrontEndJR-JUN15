import "./Hero.scss"

import giovaniProfileTwo from '../../assets/giovani-2.png'
import { Parallax } from "react-scroll-parallax"
import { Fade, Slide } from "react-awesome-reveal"

export default function Hero() {


  return (
    <div className="hero-section">
      <div className="text-hero">
        <h1>
          <Fade cascade delay={0} damping={0.05}>
            Opa, tudo bem? Sou o
          </ Fade>
          <span>
            <Fade cascade delay={1e3} damping={0.05}>
              Giovani Carnaval 👋
            </Fade>
          </span>
        </h1>

        <Parallax speed={10}>
          <Fade>
            <p>
              Sou um desenvolvedor Frontend de 22 anos com mais de 4 anos de experiência em desenvolvimento de websites e sistemas web.
              Especializo-me em ReactJS e NextJS, criando interfaces de usuário responsivas e intuitivas.
              Tenho um forte foco em segurança, desempenho e otimização contínua das aplicações.
            </p>
            <p>
              Estou sempre buscando novos desafios que me permitam aprender e exercitar minhas habilidades e conhecimentos em tecnologia.
              Minhas áreas de interesse na programação incluem a criação de soluções escaláveis e de alta qualidade, além da colaboração com equipes multidisciplinares.
              Meu objetivo de carreira é crescer continuamente como desenvolvedor, adquirindo novas competências e contribuindo para projetos inovadores.
            </p>
          </Fade>
        </Parallax>
      </div>
      <div className="image-hero">
        <Slide direction="right">
          <Parallax speed={-10}>
            <a href="https://www.instagram.com/giovani_carnaval/" target="blank" title="Acessar meu instagram">
              <img className="profile-1 profileImg" src={giovaniProfileTwo} alt="" />
            </a>
          </Parallax>
        </Slide>
      </div>
    </div >
  )
}