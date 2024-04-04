/**
 * @fileoverview Status component
 */

class Status {
  static render() {
    return (
      <div className='project-item status'>
        <p>本站使用React+Vite构建(尚未完成)</p>
        <p>本站总访问量:<span id='SV'></span>(自2024.1.1)</p>
      </div>
    )
  }
}

export default Status.render