import Head from 'next/head'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import WorkExperience from '@/components/WorkExperience'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    // <div className='bg-[rgb(36,36,36)] text-white h-screen'>
    <div className='h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 '>
      <Head>
        <title>Kush Gaikwad Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville&display=swap" rel="stylesheet"/>

      </Head>

      <Header/>

      {/* Hero */}
      <section id='hero' className='snap-start'>
      <Header/>
        <Hero/>
      </section>

      {/* About */}
      <section id='about' className='snap-center'>
        <About/>
      </section>

      {/* Experience */}
      <section id='experience' className='snap-center'>
        <WorkExperience/>
      </section>
      
     
      <section id='projects' className='snap-start'>
        <Projects/>
      </section>

      <section id='contact' className='snap-start'>
        <Contact/>
      </section>
      
    </div>
  )
}
