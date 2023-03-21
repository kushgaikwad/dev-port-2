
import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion"

type Props = {}

function Hero({ }: Props) {

    return (
        <div className='h-screen flex flex-col '>
           
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
                }} className='flex flex-col sticky text-6xl text-right mr-6 mt-96 z-0 xl:text-7xl xl:mr-20 xl:mt-96'>
                <h1>Hi.</h1>
                <h1>I am Kush.</h1>
                <h1>A Creative Technologist.</h1>
            </motion.div>

        </div>

    )
}

export default Hero