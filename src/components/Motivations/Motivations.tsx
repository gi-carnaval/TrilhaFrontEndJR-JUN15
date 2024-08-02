import { motivationStatements } from "../../data/motivations";
import Paragraph from "../Paragraph";
import SectionTitle from "../SectionTitle";
import "./Motivations.scss"

export default function Motivations() {
  return (
    <div className="motivationSection">
      <div className="motivationCard">
        <SectionTitle>Motivações</SectionTitle>
        <div>
          {
            motivationStatements.map(motivation => (
              <Paragraph >
                {motivation}
              </Paragraph>
            ))
          }
        </div>
      </div>
    </div>
  )
}