/**
 * @fileoverview Project component
 */

import './project.css'
import Item from './item.jsx'
import Status from './status.jsx'
import { itemsInfo } from '../config.js'

class Project {
  static render() {
    const items = itemsInfo.map((item, index) => <Item key={index} {...item} />)
    return ( // 后续用列表渲染
      <div className='project'>
        {items}
        <Status />
      </div>
    )
  }
}

export default Project.render