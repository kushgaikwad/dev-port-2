import Head from 'next/head'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Contact from '@/components/Contact'
import { AnimatePresence } from 'framer-motion'

export default function Home() {
  return (
  
      <div className='z-0 h-screen overflow-x-hidden snap-y snap-mandatory '>
        <Head>
          <title>Kush Gaikwad Portfolio</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>

        <section id='hero' className='snap-start '>
          <Hero />
        </section>

        <section id='about' className='snap-center '>
          <About />
        </section>

        <section id='contact' className='snap-end'>
          <Contact />
        </section>

      </div>
   
  )
}
