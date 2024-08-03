import { personalInterests } from "../../data/personalInterests"
import PersonalTastesSectionCard from "../PersonalTastesSectionCard"
import SectionTitle from "../SectionTitle"
import "./PersonalTastesSection.scss"

export default function PersonalTastesSection() {
  return (
    <div className="personalTastes" id="gostos">
      <SectionTitle>Gostos Pessoais</SectionTitle>
      <div className="cardsContainer">
        {
          personalInterests.map((personalInterest, index) => (
            <PersonalTastesSectionCard
              key={index}
              cardText={personalInterest.text}
              cardTitle={personalInterest.title}
            />
          ))
        }
      </div>
    </div >
  )
}