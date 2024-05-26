// 图标见 https://ant.design/components/icon-cn
import { 
  CalculatorFilled,
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
    title: '小鸦抢课', description: '科技的力量',
    link: 'https://github.com/LeafYeeXYZ/BNUCourseGetter', icon: <CalculatorFilled />,
    cover: { src: '/covers/1.png', author: '小叶子', link: '#' }
  },
  { 
    title: '我的博客', description: '里面有我的笔记!',
    link: 'https://blog.leafyee.xyz', icon: <BookFilled />,
    cover: { src: '/covers/2.png', author: '小叶子', link: '#' }
  },
  {
    title: '赛博画师小叶子', description: 'AI 绘画',
    link: 'https://paint.leafyee.xyz', icon: <SlidersFilled />,
    cover: { src: '/covers/3.png', author: '小叶子', link: '#' }
  },
  {
    title: '见习咨询师小叶子', description: 'AI 小叶子陪伴你~',
    link: 'https://chat.leafyee.xyz', icon: <HeartFilled />,
    cover: { src: '/covers/4.png', author: '小叶子', link: '#' }
  },
  {
    title: 'MarkdownPaper', description: '用 Markdown 写论文!',
    link: 'https://github.com/LeafYeeXYZ/MarkdownPaper', icon: <ApiFilled />,
    cover: { src: '/covers/5.png', author: '小叶子', link: '#' }
  },
]