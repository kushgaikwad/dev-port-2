import React from 'react'
import { motion } from "framer-motion"
type Props = {}

const Projects = (props: Props) => {
    const projects = [1, 2, 3, 4, 5]
    return (
        <div className='h-screen relative flex overflow-hiddens flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                Projects
            </h3>
            <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>
                {projects.map((projects, i) => (
                    <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
                        <img src="" alt="" />
                        <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                            <h4 className='text-4xl font-semibold text-center'>
                                <span className='underline decoration-slate-100'>Study {i + 1} of 4</span> NFTTs </h4>
                                <p className='text-lg text-centers md:text-left '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt saepe quibusdam nisi placeat earum neque, quasi aliquam libero nemo voluptatibus, voluptate sed iure?</p>
                                </div>
                    </div>
                ))}
            </div>
            <div className='w-full absolute top-[30%] bg-gray-500 left-0 h-[500px] -skew-y-12' />
        </div>
    )
}

export default Projects