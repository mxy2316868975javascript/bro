import './components/normalize.css'

export const metadata = {
  title: '小叶子的个人小站',
  description: '小叶子的个人小站',
}

// eslint-disable-next-line react/prop-types
export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  )
}
