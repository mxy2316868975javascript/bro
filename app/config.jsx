// 图标见 https://ant.design/components/icon-cn
import { 
  GithubFilled,
  BookFilled,
  SlidersFilled,
  ApiFilled,
  MailFilled,
} from '@ant-design/icons'

// 几个 Section 组件的信息
export const sectionsInfo = [
  { title: '我的项目( ╯▽╰)', subtitle: '这里是小叶子的个人小站~', direction: 'row' },
  { title: '关于我|ω・）', subtitle: '小叶子的自我介绍!', direction: 'row-reverse' },
  { title: '留言板(๑￫ܫ￩)', subtitle: '可以匿名留言哦~', direction: 'row' },
]
// 在 Project 组件中展示的项目信息
export const itemsInfo = [
  { 
    title: 'GitHub', description: '我的一些小程序~',
    link: 'https://github.com/LeafYeeXYZ', icon: <GithubFilled />,
    cover: { src: '/covers/cover_1.jpg', author: 'NOEYEBROWY', link: 'https://x.com/noeyebrow313' } 
  },
  { 
    title: '我的博客', description: '里面有我的笔记!',
    link: 'https://blog.leafyee.xyz', icon: <BookFilled />,
    cover: { src: '/covers/cover_2.jpg', author: 'NOEYEBROWY', link: 'https://x.com/noeyebrow313' } 
  },
  {
    title: '赛博画师小叶子', description: 'AI 绘画',
    link: 'https://paint.leafyee.xyz', icon: <SlidersFilled />,
    cover: { src: '/covers/cover_3.jpg', author: 'NOEYEBROWY', link: 'https://x.com/noeyebrow313' } 
  },
  {
    title: '本站源码', description: '开源在 GitHub 了~',
    link: 'https://github.com/LeafYeeXYZ/MyWebsite', icon: <ApiFilled />,
    cover: { src: '/covers/cover_4.jpg', author: 'NOEYEBROWY', link: 'https://x.com/noeyebrow313' } 
  },
  {
    title: '我的邮箱', description: '欢迎联系我~',
    link: 'mailto:xiaoyezi@leafyee.xyz', icon: <MailFilled />,
    cover: { src: '/covers/cover_5.jpg', author: 'NOEYEBROWY', link: 'https://x.com/noeyebrow313' } 
  },
]