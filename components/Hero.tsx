import React from 'react'
import BackgroundVideo from './BackgroundVideo'
import { motion } from "framer-motion"
import Header from './Header'


type Props = {}

function Hero({ }: Props) {

    return (
        <div className='relative h-screen'>
            <BackgroundVideo />
            <Header />
            <motion.div initial={{
                x: -500,
                opacity: 0,
                scale: 0.2
            }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1

                }}
                transition={{
                    duration: 1,
                }}
                //  className='flex flex-col  border-white text-white  sticky text-[2.1rem] leading-[2.4rem] text-right mr-6 mt-[30rem] z-0 sm:text-[2.7rem] md:text-[3.5rem] lg:text-[4.3rem] lg:leading-[4.8rem] sm:mt-[43rem] sm:leading-[3.5rem] md:mt-[50rem] md:leading-[4.3rem] lg:leading-[2rem] lg:mt-[20rem]   xl:text-[88px] xl:leading-[6rem] md:mr-8 lg:mr-9 xl:mr-16 xl:mt-[25rem]'
                className="z-50 flex flex-col content-end w-full pr-8 text-[1.75rem] text-right text-white place-content-end h-3/4 text-[2.1rem] leading-[2.4rem] sm:text-[2.7rem] md:text-[3.5rem] lg:text-[4.3rem] lg:leading-[4.8rem] sm:leading-[3.5rem] md:leading-[4.3rem] lg:leading-[2rem] xl:text-[88px] xl:leading-[6rem] "

            >
                <h1>Hi.</h1>
                <h1>I am Kush.</h1>
                <h1>A Creative Technologist.</h1>
            </motion.div>
        </div >

    )
}

export default Hero;