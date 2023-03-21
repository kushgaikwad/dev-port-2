import Head from 'next/head'
import Header from '@/components/Header'
import Hero3 from '@/components/Hero3'
import About from '@/components/About'
import Contact2 from '@/components/Contact2'
export default function Home() {
  return (
    // <div className='bg-[rgb(36,36,36)] text-white h-screen'>
    <div className='h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 '>
      <Head>
        <title>Kush Gaikwad Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville&display=swap" rel="stylesheet" />

      </Head>

      <section id='hero3' className='snap-start'>
        <Header />
        <Hero3 />
      </section>

      <section id='about' className='snap-center'>
        <About />
      </section>

      <section id='contact' className='snap-start'>
        <Contact2 />
      </section>

    </div>
  )
}
