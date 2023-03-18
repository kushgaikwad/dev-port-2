import React from 'react'
import { motion } from "framer-motion"
import Experience from './Experience'

type Props = {}

const WorkExperience = (props: Props) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='h-screen flex relative overflow-hidden flex-col text-lft md:flex-row max-w-full px-10 justify-evenly mx-auto items-center '>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-400 text-2xl'>Experience</h3>
            <div className='w-full flex space-x-3 overflow-x-scroll p-5 snap-x snap-mandatory'>
                <Experience expNumber={0}/>
                <Experience expNumber={1}/>
                <Experience expNumber={2}/>   
            </div>
        </motion.div>

    )
}

export default WorkExperience