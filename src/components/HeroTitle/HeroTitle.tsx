import { Fade } from "react-awesome-reveal";
import "./HeroTitle.scss"

export default function HeroTitle() {
  return (
    <h1 className="heroTitle">
      <Fade cascade delay={0} damping={0.05}>
        Opa, tudo bem? Sou o
      </ Fade>
      <span className="titleName">
        <Fade cascade delay={1e3} damping={0.05}>
          Giovani Carnaval 👋
        </Fade>
      </span>
    </h1>
  )
}