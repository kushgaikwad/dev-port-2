import React from 'react'
import { motion } from "framer-motion"


type Props = {}

const About = (props: Props) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-400 text-2xl'>About</h3>
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
                className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px] xl:ml-5 xl:mt-8'
            />
            <div className='space-y-10  px-0 md:px-10 md:ml-4'>
                {/* <h4 className='text-4xl font-semibold'>Here is a
                    <span className='underline'> little</span>  background</h4> */}

                
                <h3 className='text-base'>Hailing from India, I grew up around creative industries. I have a Bachelors&apos;s and Master&apos;s degree in Computer Science Engineering from the Indian Institute of Technology (IIT) Kharagpur, one of the premier institutes in India. My second master&apos;s degree is from Queen Mary University of London; with research focused on blockchain and generative creative tech. </h3>
                <h3 className='text-base'>
                Currently, I am based in London, freelancing as a full stack/frontend developer for some of the most innovative teams in the scene. I am really passionate about elevating culture and community through emergent technologies.</h3>
            </div>
        </motion.div>
    )
}

export default About