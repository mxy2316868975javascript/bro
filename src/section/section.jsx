/**
 * @fileoverview Section component
 */

import './section.css'

class Section {
  static render({ children, direction }) {
    return (
      <section style={{ flexDirection: direction }}>
        <div className='section-title'>这是一个标题</div>
        <div className='section-content'>{children}</div>
      </section>
    )
  }
}

export default Section.render