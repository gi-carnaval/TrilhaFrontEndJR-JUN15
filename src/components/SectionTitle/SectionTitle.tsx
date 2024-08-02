import "./SectionTitle.scss"

export default function SectionTitle({children}: {children: string}) {
  return (
    <h2 className="sectionTitle">
      {children}
    </h2>
  )
}