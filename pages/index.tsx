import Head from 'next/head'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Projects from '@/components/Projects'
import Project from '@/components/Project'
import Socials from '@/components/Socials'


export default function Home() {
  return (
  
         <div className='z-0 overflow-x-hidden overflow-y-hidden '>
        <Head>
          <title>Kush Gaikwad Portfolio</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>

        <section id='hero' className='snap-start'>
          <Hero />
        </section>

        <section id='about' className='bg-black'>
          <About />
        </section>

        <section id='projects' className='bg-black'>
          <Projects />
        </section>
        

        <section id='contact' className='bg-black'>
          <Contact />
        </section>
        
        <section id='socials' className='bg-black'>
          <Socials />
        </section>


      </div>
   
  )
}
