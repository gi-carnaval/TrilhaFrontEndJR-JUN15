import "./Paragraph.scss"

export default function Paragraph({children}: {children: string}) {
  return (
    <p className="paragraph">
      {children}
    </p>
  )
}