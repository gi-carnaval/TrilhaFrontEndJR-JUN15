import { personalInterests } from "../../data/personalInterests"
import PersonalTastesSectionCard from "../PersonalTastesSectionCard/PersonalTastesSectionCard"
import SectionTitle from "../SectionTitle"
import "./PersonalTastesSection.scss"

export default function PersonalTastesSection() {
  return (
    <div className="personalTastes">
      <SectionTitle>Gostos Pessoais</SectionTitle>
      <div className="cardsContainer">
        {
          personalInterests.map((personalInterest) => (

            <PersonalTastesSectionCard
              cardText={personalInterest.text}
              cardTitle={personalInterest.title}
            />

          ))
        }
      </div>
    </div >
  )
}