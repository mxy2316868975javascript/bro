/**
 * @fileoverview 集中设置一些内容
 */

// 各节的标题和副标题
const sectionsInfo = [
  { title: '我的项目( ╯▽╰)', subtitle: '这里是小叶子的个人小站~', direction: 'row' },
  { title: '关于我|ω・）', subtitle: '小叶子的自我介绍!', direction: 'row-reverse' },
  { title: '留言板(๑￫ܫ￩)', subtitle: '可以匿名留言哦~', direction: 'row' },
]
// Items
const itemsInfo = [
  { title: 'GitHub', description: '我的一些小程序~', link: 'https://github.com/LeafYeeXYZ', cover: '' },
  { title: '旧版网站', description: '功成身退~', link: 'https://legacy.leafyee.xyz', cover: '' },
]
// DenoCount 的 URL
const denoCountURL = 'https://denocount.deno.dev'
// 个人简介的 Typed.js 配置
const introTypedConfig = {
  strings: ['一个心理学专业的大学生<br>一个社会自由主义者<br>喜欢漫画 / 动漫 / BJD<br>喜欢水彩 / 板绘 / 设计<br>喜欢草莓 / 鱿鱼 / 抹茶 / 无骨鸡爪<br>对网络技术 / 编程感兴趣<br>主要使用 JavaScript, 自学 Rust 中<br>喜欢可爱的人事物<br>致力于成为优秀的心理咨询师'],
  typeSpeed: 70,
  backSpeed: 35,
  smartBackspace: true,
  loop: false,
  contentType: 'html',
  showCursor: false,
  startDelay: 2000,
}
// 标题的 Typed.js 配置
const titleTypedConfig = {
  strings: ['莫听穿林打叶声，何妨吟啸且徐行', '知善知恶是良知，为善去恶是格物'],
  typeSpeed: 70,
  backSpeed: 35,
  smartBackspace: true,
  loop: true,
  loopCount: Infinity,
  backDelay: 5000, 
  contentType: 'html',
  showCursor: false,
}

export { 
  introTypedConfig,
  titleTypedConfig,
  denoCountURL,
  sectionsInfo,
  itemsInfo,
}