import "./Hero.scss"

import giovaniProfileTwo from '../../assets/giovani-2.png'
import { Parallax } from "react-scroll-parallax"
import { Fade, Slide } from "react-awesome-reveal"
import HeroTitle from "../HeroTitle"
import Paragraph from "../Paragraph"

export default function Hero() {


  return (
    <div className="hero-section">
      <div className="text-hero">

        <HeroTitle />
        <Parallax speed={10}>
          <Fade duration={1000}>
            <Slide direction="up" fraction={0.01} triggerOnce>
              <Paragraph>
                Sou um desenvolvedor Frontend de 22 anos com mais de 4 anos de experiência em desenvolvimento de websites e sistemas web.
                Focado em ReactJS e NextJS, criando interfaces de usuário responsivas e intuitivas.
                Tenho um forte foco em desempenho e otimização contínua das aplicações.
              </Paragraph>
              <Paragraph>
                Estou sempre buscando novos desafios que me permitam aprender e exercitar minhas habilidades e conhecimentos em tecnologia.
                Minhas áreas de interesse na programação incluem a criação de soluções escaláveis e de alta qualidade, além da colaboração com equipes multidisciplinares.
                Meu objetivo de carreira é crescer continuamente como desenvolvedor, adquirindo novas competências e contribuindo para projetos inovadores.
              </Paragraph>
            </Slide>
          </Fade>
        </Parallax>
      </div>
      <div className="image-hero">
        <Fade duration={1000} delay={250}>
          <Slide direction="right" >
            <Parallax speed={-10}>
              <a href="https://www.instagram.com/giovani_carnaval/" target="blank" title="Acessar meu instagram">
                <img className="profile-1 profileImg" src={giovaniProfileTwo} alt="" />
              </a>
            </Parallax>
          </Slide>
        </Fade>
      </div>
    </div >
  )
}