/**
 * @fileoverview 集中设置一些内容
 */

// 图标见 https://ant.design/components/icon-cn
import { GithubFilled, BookFilled, SlidersFilled, ApiFilled, MailFilled } from '@ant-design/icons'

// 各节的标题和副标题
const sectionsInfo = [
  { title: '我的项目( ╯▽╰)', subtitle: '这里是小叶子的个人小站~', direction: 'row' },
  { title: '关于我|ω・）', subtitle: '小叶子的自我介绍!', direction: 'row-reverse' },
  { title: '留言板(๑￫ܫ￩)', subtitle: '可以匿名留言哦~', direction: 'row' },
]
// Items
const itemsInfo = [
  { title: 'GitHub', description: '我的一些小程序~', link: 'https://github.com/LeafYeeXYZ',
    cover: '/assets/cover_1.jpg', icon: <GithubFilled /> },
  { title: '我的博客', description: '里面有我的笔记!', link: 'https://blog.leafyee.xyz',
    cover: '/assets/cover_2.jpg', icon: <BookFilled /> },
  { title: '赛博画师小叶子', description: 'AI 绘画', link: 'https://paint.leafyee.xyz',
    cover: '/assets/cover_3.jpg', icon: <SlidersFilled /> },
  { title: '本站源码', description: '开源在 GitHub 了~', link: 'https://github.com/LeafYeeXYZ/MyWebsite',
    cover: '/assets/cover_4.jpg', icon: <ApiFilled /> },
  { title: '我的邮箱', description: '欢迎联系我~', link: 'mailto:xiaoyezi@leafyee.xyz',
    cover: '/assets/cover_5.jpg', icon: <MailFilled /> },
]
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
// Waline 配置
const walineConfig = {
  el: '#waline',
  path: '/',
  lang: 'zh-CN',
  serverURL: 'https://comment.leafyee.xyz',
  turnstileKey: '0x4AAAAAAAOZ5cnsddyB2fQW',
  emoji: [
    'https://unpkg.com/@waline/emojis@1.2.0/bilibili',
    'https://unpkg.com/@waline/emojis@1.2.0/bmoji',
  ]
}

export { 
  introTypedConfig,
  titleTypedConfig,
  sectionsInfo,
  itemsInfo,
  walineConfig,
}