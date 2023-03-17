import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion"
import Link from 'next/link'


type Props = {}

const Header = (props: Props) => {
    return (
        <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
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
                className='flex flex-row items-center'>
                <SocialIcon url="https://twitter.com/honey_musket"
                    fgColor='gray'
                    bgColor='transparent' />
                <SocialIcon url="https://linkedin.com/in/kushal-gaikwad"
                    fgColor='gray'
                    bgColor='transparent' />
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
                className='flex flex-row items-center text-gray-400 cursor-pointer'>
                <Link href="#contact">
                    <SocialIcon
                        className='cursor-pointer'
                        network='email'
                        fgColor='gray'
                        bgColor='transparent' />
                    <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Lets Link Up</p>
                </Link>
            </motion.div>


        </header >
    )
}

export default Header