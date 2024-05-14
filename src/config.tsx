import cover1 from './images/cover_1.jpg'
import cover2 from './images/cover_2.jpg'
import cover3 from './images/cover_3.jpg'
import cover4 from './images/cover_4.jpg'
import cover5 from './images/cover_5.jpg'
// 图标见 https://ant.design/components/icon-cn
import { 
  GithubFilled,
  BookFilled,
  SlidersFilled,
  ApiFilled,
  HeartFilled,
} from '@ant-design/icons'

// 几个 Section 组件的信息
export const sectionsInfo: {
  title: string,
  subtitle: string,
  direction: 'row' | 'row-reverse',
}[] = [
  { title: '我的项目( ╯▽╰)', subtitle: '这里是小叶子的个人小站~', direction: 'row' },
  { title: '关于我|ω・）', subtitle: '小叶子的自我介绍!', direction: 'row-reverse' },
  { title: '留言板(๑￫ܫ￩)', subtitle: '可以匿名留言哦~', direction: 'row' },
]
// 在 Project 组件中展示的项目信息
export const itemsInfo = [
  { 
    title: 'GitHub', description: '我的一些小程序~',
    link: 'https://github.com/LeafYeeXYZ', icon: <GithubFilled />,
    cover: { src: cover1, author: 'NOEYEBROWY', link: 'https://x.com/noeyebrow313' } 
  },
  { 
    title: '我的博客', description: '里面有我的笔记!',
    link: 'https://blog.leafyee.xyz', icon: <BookFilled />,
    cover: { src: cover2, author: 'NOEYEBROWY', link: 'https://x.com/noeyebrow313' } 
  },
  {
    title: '赛博画师小叶子', description: 'AI 绘画',
    link: 'https://paint.leafyee.xyz', icon: <SlidersFilled />,
    cover: { src: cover3, author: 'NOEYEBROWY', link: 'https://x.com/noeyebrow313' } 
  },
  {
    title: '见习咨询师小叶子', description: 'AI 小叶子陪伴你~',
    link: 'https://chat.leafyee.xyz', icon: <HeartFilled />,
    cover: { src: cover5, author: 'NOEYEBROWY', link: 'https://x.com/noeyebrow313' } 
  },
  {
    title: '本站源码', description: '开源在 GitHub 了~',
    link: 'https://github.com/LeafYeeXYZ/MyWebsite', icon: <ApiFilled />,
    cover: { src: cover4, author: 'NOEYEBROWY', link: 'https://x.com/noeyebrow313' } 
  },
]