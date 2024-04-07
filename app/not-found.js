'use client'

export default function NotFound() {
  return (
    <main style={{
      textAlign: 'center',
      overflow: 'hidden',
      width: '100%',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    }}>
      <h1 style={{
        color: '#300000',
      }}>这里什么都没有...</h1>
      <button style={{
        display: 'block',
        padding: '0.5rem 1rem',
        margin: '1rem',
        backgroundColor: '#fff0f0',
        color: '#fa255e',
        border: 'none',
        fontWeight: 'bold',
        borderRadius: '2rem',
        cursor: 'pointer',
        transition: 'transform 0.3s ease',
      }}
      onClick={() => {
        window.location.href = '/'
      
      }}>返回首页</button>
      <style>
        {`
          button:hover {
            transform: scale(1.02);
          }
          button:active {
            transform: scale(0.98);
          }
        `}
      </style>
    </main>
  )
}