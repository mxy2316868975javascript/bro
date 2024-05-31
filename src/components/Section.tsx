interface SectionProps {
  children: React.ReactElement
  direction: 'row' | 'row-reverse'
  title: string
  subtitle: string
  overwriteHeight?: string
}

export function Section({ children, title, subtitle, overwriteHeight, direction }: SectionProps) {

  return (
    <section 
      style={{ flexDirection: direction, height: overwriteHeight || '26rem' }}
      className='flex w-full section-container'
    >
      <div // 标题和副标题
        className='
          section-title
          flex overflow-hidden flex-col justify-center items-center
          bg-rose-50 dark:bg-zinc-950
          w-full sm:w-2/5
        '
      >
        <p // 标题
          className='
            font-bold text-rose-950 dark:text-rose-50
            text-lg sm:text-3xl
            leading-5 sm:leading-[4rem]
            mb-0 sm:mb-1
          '
        >{title}</p>
        <p // 副标题
          className='
            hidden sm:block
            font-bold text-base text-rose-950 dark:text-rose-50
          '
        >{subtitle}</p>
      </div>
      <div // 内容
        className='
          section-content
          overflow-hidden text-center
          bg-rose-100 dark:bg-zinc-900
          w-full sm:w-3/5 
        '
      >{children}</div>
    </section>
  )
}