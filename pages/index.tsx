import Head from 'next/head'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Contact from '@/components/Contact'


export default function Home() {
  return (
    <div className='h-screen snap-y snap-mandatory overflow-x-hidden z-0 '>
      <Head>
        <title>Kush Gaikwad Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
      </Head>

      <section id='hero' className='snap-start '>
  
        <Hero />
      </section>

      <section id='about' className='snap-center'>
        <About />
      </section>

      <section id='contact' className='snap-start'>
        <Contact />
      </section>

    </div>
  )
}
