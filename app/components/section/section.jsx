/**
 * @fileoverview Section component
 */

import './section.css'

class Section {
  static render({ children, direction, title, subtitle, overwriteHeight }) {
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
}

export default Section.render