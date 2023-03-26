import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion"
import Link from 'next/link'

type Props = {}

const Header = (props: Props) => {
    return (
        <header className=' top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center xl:m-10'>
            <motion.div
                initial={
                    {
                        x: -500,
                        opacity: 0,
                        scale: 0.5
                    }
                }
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1

                }}
                transition={{
                    duration: 1.5,
                }}
                className='flex flex-row items-center '>
                <SocialIcon url="https://twitter.com/honey_musket"
                    fgColor='white'
                    bgColor='transparent' 
                    target="_blank"/>
                    
                <SocialIcon url="https://www.instagram.com/honey_musket/"
                    fgColor='white'
                    bgColor='transparent'
                    target="_blank" />
                <SocialIcon url="https://linkedin.com/in/kushal-gaikwad"
                    fgColor='white'
                    bgColor='transparent'
                    target="_blank" />
                <SocialIcon url="https://github.com/kushgaikwad"
                    fgColor='white'
                    bgColor='transparent'
                    target="_blank" />

            </motion.div>

            <motion.div
                initial={{
                    x: 500,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1.5,
                }}
                className='flex flex-row items-center text-white cursor-pointer'>
                <SocialIcon
                    className='cursor-pointer'
                    network='email'
                    fgColor='white'
                    bgColor='transparent' />
                <Link href="#contact">
                    <p className='uppercase hidden md:inline-flex text-sm text-white'>Lets Link Up</p>
                </Link>
            </motion.div>
        </header >
    )
}

export default Header