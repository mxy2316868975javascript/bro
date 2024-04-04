/**
 * @fileoverview Item component
 */

class Item {
  /**
   * Render a project item
   * @param {object} props
   * @param {string} props.title 标题
   * @param {string} props.description 描述
   * @param {string} props.link 链接
   * @param {string} props.image 图片链接
   * @returns 
   */
  static render({ title, description, link, cover }) {
    return (
      <div className='project-item'>
        <a href={link} style={{ backgroundImage: `url(${cover})` }}>
          <p className="title">{title}</p>
          <p className="description">{description}</p>
        </a>
      </div>
    )
  }
}

export default Item.render