import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Libre_Baskerville } from 'next/font/google'

const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-libre',
  style: ['normal', 'italic'],
})

export default function App({ Component, pageProps }: AppProps) {
  return  (<main className={`${libreBaskerville.variable} font-sans`}> <Component {...pageProps} /></main>)
  
    
  
}
