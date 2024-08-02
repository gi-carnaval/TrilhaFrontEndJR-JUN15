import {  Slide } from "react-awesome-reveal"
import "./PersonalTastesSectionCard.scss"

interface PersonalTastesSectionCardProps {
  cardTitle: string
  cardText: string
}

export default function PersonalTastesSectionCard({ cardTitle, cardText }: PersonalTastesSectionCardProps) {
  return (
    <Slide direction="up" triggerOnce style={{ height: "100%"}}>
      <div className="card">
        <h3 className="cardTitle">{cardTitle}</h3>
        <p className="cardText">
          {cardText}
        </p>
      </div>
    </Slide>
  )
}