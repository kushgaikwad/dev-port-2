import React from 'react'
import BackgroundVideo from './BackgroundVideo'
import { AnimatePresence, motion } from "framer-motion"
import Header from './Header'
import Wrapper from './Wrapper'
import { headTextAnimation } from '@/config/motion'

type Props = {}

function Hero({ }: Props) {

    return (
        <div className='relative'>
            <BackgroundVideo />
            <Wrapper className="relative h-screen">
                <AnimatePresence>
                    <Header />
                    <motion.div className='flex flex-col justify-end text-right text-white h-3/4 text-[1.6rem] sm:text-[2.7rem] md:text-[3.1rem] lg:text-[4.3rem] lg:leading-[4.8rem] sm:leading-[3.5rem] md:leading-[4.3rem] lg:leading-[2rem] xl:text-[88px] xl:leading-[6rem]' {...headTextAnimation}>
                        <h1>Hi.</h1>
                        <h1>I am Kush.</h1>
                        <h1>A Creative Technologist.</h1>
                    </motion.div>
                </AnimatePresence>
            </Wrapper>
        </div>

    )
}

export default Hero;