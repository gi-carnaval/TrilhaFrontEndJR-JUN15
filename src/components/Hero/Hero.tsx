import "./Hero.scss"

import giovaniProfileTwo from '../../assets/giovani-2.png'
import { Parallax } from "react-scroll-parallax"
import { Fade, Slide } from "react-awesome-reveal"
import HeroTitle from "../HeroTitle"
import Paragraph from "../Paragraph"

export default function Hero() {

  function calcAge() {
    const birthday = +new Date('01/04/2002');
    return ~~((Date.now() - birthday) / (31557600000));
  }

  function getExperienceYears() {
    return (new Date().getFullYear() - 2020)
  }

  return (
    <div className="hero-section" id="sobre">
      <div className="text-hero">

        <HeroTitle />
        <Parallax speed={0} >
          <Slide direction="up" triggerOnce>
            <Paragraph>
              {`
                  Sou um desenvolvedor Frontend de ${calcAge()} anos com mais de ${getExperienceYears()} anos de experiência em desenvolvimento de websites e sistemas web.
                  Focado em ReactJS e NextJS, criando interfaces de usuário responsivas e intuitivas.
                  Tenho um forte foco em desempenho e otimização contínua das aplicações.
                `
              }
            </Paragraph>
            <Paragraph>
              Estou sempre buscando novos desafios que me permitam aprender e exercitar minhas habilidades e conhecimentos em tecnologia.
              Minhas áreas de interesse na programação incluem a criação de soluções escaláveis e de alta qualidade, além da colaboração com equipes multidisciplinares.
              Meu objetivo de carreira é crescer continuamente como desenvolvedor, adquirindo novas competências e contribuindo para projetos inovadores.
            </Paragraph>
          </Slide>
        </Parallax>
      </div>
      <div className="image-hero">
        <Fade direction="up" triggerOnce>
          <Parallax speed={-10}>
            <a href="https://www.instagram.com/giovani_carnaval/" target="blank" title="Acessar meu instagram">
              <img className="profile-1 profileImg" src={giovaniProfileTwo} alt="" />
            </a>
          </Parallax>
        </Fade>
      </div>
    </div >
  )
}