import Head from 'next/head'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    // <div className='bg-[rgb(36,36,36)] text-white h-screen'>
    <div className='h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 '>
      <Head>
        <title>Kush Gaikwad Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
      </Head>

      <section id='hero' className='snap-start'>
        <Header />
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
