import React from 'react'
import { motion } from "framer-motion"

type Props = {}

const About = (props: Props) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='flex flex-col relative max-w-xl  px-5  h-screen justify-evenly mx-auto items-center text-center md:max-w-[55rem]  xl:text-left xl:flex-row 
             xl:max-w-7xl  xl:px-10 '>
            <h3 className='absolute ml-6 top-[3rem] md:top-[5rem]  xl:top-24 uppercase tracking-[20px] text-gray-400 text-2xl md:text-[2.5rem]'>About</h3>
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
                className='mt-[5rem] flex-shrink-0 w-56 h-56 rounded-full object-cover drop-shadow-2xl xl:mb-0 xl:rounded-lg md:w-[500px] md:h-[500px] xl:w-[500px] xl:h-[600px] xl:ml-5 xl:mt-28 '
            />
            {/* <div className='space-y-2 mt-12 px-0 md:space-y-10  md:px-10 md:ml-4'> */}
            <div className='mt-2 px-0 md:space-y-10   xl:px-10 xl:ml-4 '>



                <h3 className='text-[0.8rem] mb-3 md:text-[1.5rem] md:leading-[2rem] xl:text-[1.2rem]  lg:leading-[1.7rem]'>
                    Raised by a loving artistc family, I have been absorbed by the craft of performing and creating music from a very young age. I went on to study Computer Science & Engineering from IIT Kharagpur; with research focused in audio technology.
                    Following this, I worked as a software developer for few years. I moved to London to pursue my second Master&apos;s from Queen Mary University of London; with research focused on blockchain and creative tech.

                </h3>
                <h3 className='text-[0.8rem] md:text-[1.5rem] xl:text-[1.2rem] lg:leading-[1.7rem]'>
                    I am really passionate about elevating culture and community through emergent technologies. </h3>

            </div>
        </motion.div>
    )
}

export default About