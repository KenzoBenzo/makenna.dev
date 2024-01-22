import { JetBrains_Mono } from 'next/font/google'
import { Footer } from './footer'
import { Navbar } from './navbar'


const jetBrains_mono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jet-brains-mono'
})

export const Layout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <div className={`${jetBrains_mono.variable} font-mono px-8 pb-8`}>
      <Navbar />
      <main className='max-w-screen-lg mx-auto'>{children}</main>
      <Footer />
    </div>
  )
}