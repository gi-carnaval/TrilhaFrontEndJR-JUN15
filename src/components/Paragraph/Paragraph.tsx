import "./Paragraph.scss"

interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: string
}

export default function Paragraph({ children, ...rest }: ParagraphProps) {
  return (
    <p className="paragraph" {...rest}>
      {children}
    </p>
  )
}