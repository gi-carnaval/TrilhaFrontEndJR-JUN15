import { motivationStatements } from "../../data/motivations";
import Paragraph from "../Paragraph";
import SectionTitle from "../SectionTitle";
import "./Motivations.scss"
import imgProfile2 from '../../assets/giovani-1.png'
import { Fade, Slide } from "react-awesome-reveal";

export default function Motivations() {
  return (
    <div className="motivationSection" id="motivacoes">
      <div className="motivationCard">
        <div className="motivationCardTexts">
          <SectionTitle>Motivações</SectionTitle>
          <div className="motivationCardTextsParagraphs">
            {
              motivationStatements.map((motivation, index) => (
                <Fade key={index}>
                  <Slide direction="up" fraction={0}>
                    <Paragraph >
                      {motivation}
                    </Paragraph>
                  </Slide>
                </Fade>
              ))
            }
          </div>
        </div>
        <Fade>
          <img className="imgProfile2" src={imgProfile2} alt="Giovani Carnaval" />
        </Fade>
      </div>
    </div>
  )
}