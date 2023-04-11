import React from 'react'
import Image from 'next/image'
import Wrapper from './Wrapper'
import { AnimatePresence, motion } from 'framer-motion'
import { headTextAnimation, slideAnimation } from '@/config/motion'

type Props = {}

const About = (props: Props) => {
    return (
        <Wrapper className="">
            <AnimatePresence>
                <motion.div className='flex flex-col items-center h-screen' {...slideAnimation('top')}>
                    <h1 className='uppercase h-1/6 tracking-[20px] flex jusify-center items-center text-gray-400 text-xl sm:text-[2rem] md:text-[2rem]' >ABOUT</h1>
                    <div className='flex flex-col items-center gap-20 mx-3 lg:mx-6 lg:flex-row h-5/6 gap-y-8'>
                        <motion.div className='relative w-3/4 h-1/2 rounded-xls lg:h-3/4 lg:w-1/2' {...headTextAnimation}>
                            <Image src='https://res.cloudinary.com/dvszxda1u/image/upload/v1680879131/musket-headshot_pmw0w4.jpg' alt="test" layout="fill" objectFit="cover" className='rounded-3xl' />
                        </motion.div>
                        <motion.div className='flex flex-col items-center mb-8 sm:mt-9 gap-y-6 justify-center text-center text-[0.7rem] sm:text-[1rem] sm:mx-6 sm:gap-7 md:text-[1.2rem] md:mx-8 lg:w-1/2 lg:text-[1rem] xl:text-[1rem]' {...slideAnimation('right')}>
                            <h2 > Raised by a loving artistc family, I have been absorbed by the craft of performing and creating art from a very young age. I went on to study Computer Science & Engineering from IIT Kharagpur; with research focused in audio technology. Following this, I worked as a software developer at VMware for few years.</h2>
                            <h2> I moved to London to pursue my second Master&apos;s from Queen Mary University of London; with research focused on blockchain and creative tech.</h2>
                            <h2> I am really passionate about elevating culture and community through emergent technologies.</h2>
                        </motion.div>
                    </div>
                </motion.div >
            </AnimatePresence>
        </Wrapper>
    )
}

export default About