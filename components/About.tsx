import React from 'react'
import { motion } from "framer-motion"

type Props = {}

const About = (props: Props) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='flex flex-col relative max-w-xl gap-3  h-screen justify-evenly mx-auto items-center text-center md:max-w-[55rem]  xl:text-left lg:flex-row 
             xl:max-w-7xl  xl:px-10 '>
            <h3 className='absolute ml-6 top-[3rem] md:top-[5rem]  xl:top-242 uppercase tracking-[20px] text-gray-400 text-2xl sm:text-3xl  md:text-[2.5rem]'>About</h3>
            <div className='flex flex-col items-center justify-content lg:flex-row'>
                <motion.img
                    initial={{
                        x: -200,
                        opacity: 0,
                    }}
                    transition={{
                        duration: 1.2,
                    }}
                    whileInView={{
                        x: 0,
                        opacity: 1
                    }}
                    viewport={{ once: false }}
                    src='/images/musket-headshot.jpg'
                    className='mt-[5rem] w-4/5 h-1/3 rounded- object-cover drop-shadow-2xl xl:mb-0 rounded-lg md:w-3/4 md:h-full lg:w-1/2 lg:h-3/5 xl:ml-5 sm:h-1/2 xl:mt-28  '
                />
                <div className='flex flex-col px-8 mt-16 gap-y-8 lg:gap-y-0 text-[0.8rem] sm:text-[1rem] md:space-y-10 xl:px-10 xl:ml-4 md:text-[1.5rem] md:leading-[2rem] xl:text-[1.2rem] lg:text-[1rem]  lg:leading-[1.6rem] '>
                    <h3>
                        Raised by a loving artistc family, I have been absorbed by the craft of performing and creating music from a very young age. I went on to study Computer Science & Engineering from IIT Kharagpur; with research focused in audio technology.
                        Following this, I worked as a software developer for few years. I moved to London to pursue my second Master&apos;s from Queen Mary University of London; with research focused on blockchain and creative tech.

                    </h3>
                    <h3>
                        I am really passionate about elevating culture and community through emergent technologies. </h3>

                </div>
            </div>
        </motion.div >
    )
}

export default About