import '../styles/Section.css'

interface SectionProps {
  children: React.ReactNode
  direction: 'row' | 'row-reverse'
  title: string
  subtitle: string
  overwriteHeight?: string
}

export function Section({ children, direction, title, subtitle, overwriteHeight }: SectionProps) {
  return (
    <section style={{ flexDirection: direction, height: overwriteHeight || '' }}>
      <div className='section-title'>
        <p className='section-title-main'>{title}</p>
        <p className='section-title-sub'>{subtitle}</p>
      </div>
      <div className='section-content'>{children}</div>
    </section>
  )
}