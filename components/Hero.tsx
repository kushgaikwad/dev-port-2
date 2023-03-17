import Link from 'next/link'
import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'

type Props = {}

function Hero({ }: Props) {
    const [text, count] = useTypewriter({
        words: ["A Creative Technologist", "A Designer", "An Artist"],
        loop: true,
        // onLoopDone: () => console.log(`loop completed after 3 runs.`)
        delaySpeed: 1500
    })
    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            <BackgroundCircles />
            {/* TODO: Use NExt Image */}
            <img className='relative rounded-full h-32 w-32 mx-auto object-cover'
                src="/images/musket-headshot.jpg" />
            <div className='z-20'>
                <h2 className='text-sm uppercase text-gray-400 pb-2s tracking-[15px]'>Software Engineer</h2>
                <h1 className='text-5xl lg:text-6xl font-semibold px-10 py-10'>
                    <span className='mr-3'>{text}</span>
                    <Cursor cursorColor='olive' />
                </h1>
                <div className='pt-5'>
                    <Link href="#about">
                        <button className='heroButtonClass
                    '>About</button>
                    </Link>
                    <Link href="#experience"><button className='heroButtonClass
                    '>Experience</button></Link>
                    <Link href="#projects"><button className='heroButtonClass
                    '>Projects</button></Link>
                    <Link href="#skills"><button className='heroButtonClass
                    '>Skills</button></Link>



                </div>
            </div>

        </div>
    )
}

export default Hero