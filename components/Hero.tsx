import React from 'react'
import BackgroundVideo from './BackgroundVideo'
import { motion } from "framer-motion"
import Header from './Header'


type Props = {}

function Hero({ }: Props) {

    return (
        <div className='h-screen relative'>
            <BackgroundVideo />
            <Header/>
            <motion.div initial={
                {
                    x: -500,
                    opacity: 0,
                    scale: 0.2
                }
            }
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1

                }}
                transition={{
                    duration: 1,
                }} className='flex flex-col  border-white text-white  sticky text-[1.7rem] leading-[2.4rem] text-right mr-6 mt-[23rem] z-0 md:text-[3.4rem] md:mt-[40rem] md:leading-[3.5rem]  xl:text-[88px] xl:leading-[6rem] xl:mr-20 xl:mt-96'>
                <h1>Hi.</h1>
                <h1>I am Kush.</h1>
                <h1>A Creative Technologist.</h1>
            </motion.div>
        </div >

    )
}

export default Hero;