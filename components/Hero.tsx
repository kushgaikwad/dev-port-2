import React, { useRef } from 'react'
import BackgroundVideo from './BackgroundVideo'
import { AnimatePresence, motion } from "framer-motion"
import Header from './Header'
import Wrapper from './Wrapper'
import { headTextAnimation, slideAnimation } from '@/config/motion'
import HeroText from './HeroText'
import styles from '../styles/Hero.module.css'


type Props = {}

function Hero({ }: Props) {

    const plane = useRef<HTMLDivElement>(null);
    const maxRotate = 40;

    const mouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        const perspective = window.innerWidth * 4;
        const rotateX = maxRotate * x - maxRotate / 2;
        const rotateY = (maxRotate * y - maxRotate / 2) * -1;

        if (plane.current != null) {
            plane.current.style.transform = `perspective(${perspective}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg)`
        }
    }

    return (
        <div className='relative' onMouseMove={(e) => mouseMove(e)}>
            <BackgroundVideo />
            <Wrapper className={`relative h-screen ${styles.container}`} >
                <AnimatePresence>
                    <Header />
                    {/* <motion.div ref={plane} className='flex relative  flex-col justify-end text-right text-white h-3/4 text-[1.6rem] sm:text-[2.7rem] md:text-[3.1rem] lg:text-[4.3rem] lg:leading-[4.8rem] sm:leading-[3.5rem] md:leading-[4.3rem] xl:text-[88px] xl:leading-[6rem]' {...headTextAnimation}> */}

                    <motion.div ref={plane} className={`text-6xl text-[1.5rem] sm:text-[2.7rem] md:text-[3.1rem] lg:text-[4.3rem] xl:leading-[6rem] xl:text-[88px] lg:leading-[4.8rem] sm:leading-[3.5rem] md:leading-[4.3rem] h-full py-80 ${styles.body}`} {...headTextAnimation} >
                        <HeroText sampleText='Hi.' />
                        <HeroText sampleText='I am Kush.' />
                        <HeroText sampleText='A Creative Technologist.' />
                    </motion.div>


                </AnimatePresence>
            </Wrapper>
        </div>

    )
}

export default Hero;