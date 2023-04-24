import React from 'react'
import BackgroundVideo from './BackgroundVideo'
import { AnimatePresence, motion } from "framer-motion"
import Header from './Header'
import Wrapper from './Wrapper'
import { headTextAnimation, slideAnimation } from '@/config/motion'
import { Player } from '@lottiefiles/react-lottie-player';


type Props = {}

function Hero({ }: Props) {

    return (
        <div className='relative'>
            <BackgroundVideo />
            <Wrapper className="relative h-screen">
                <AnimatePresence>
                    <Header />
                    <motion.div className='flex  flex-col justify-end text-right text-white h-3/4 text-[1.6rem] sm:text-[2.7rem] md:text-[3.1rem] lg:text-[4.3rem] lg:leading-[4.8rem] sm:leading-[3.5rem] md:leading-[4.3rem] lg:leading-[2rem] xl:text-[88px] xl:leading-[6rem]' {...headTextAnimation}>
                        <h1>Hi.</h1>
                        <h1>I am Kush.</h1>
                        <h1>A Creative Technologist.</h1>
                    </motion.div>

                    <motion.div className='mt-6 md:mt-24 lg:mt-10' {...slideAnimation('up')}>
                    <Player
                        src='https://assets6.lottiefiles.com/packages/lf20_dgvlk8pz.json'
                        className="player" speed={1} loop autoplay style={{ height: '35px', width: '35px'}}
                    />
                    </motion.div>
                </AnimatePresence>
            </Wrapper>
        </div>

    )
}

export default Hero;