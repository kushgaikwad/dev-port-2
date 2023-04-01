import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion"
import Link from 'next/link'
import { FaBeer } from "react-icons/fa";

type Props = {}

const Header = (props: Props) => {
    return (
        <header className='top-0 z-20 flex justify-between p-5 mx-auto xl:items-center xl:m-5'>
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
                    target="_blank" />

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
                className='flex flex-row items-center cursor-pointer'>
                <SocialIcon
                    className='cursor-pointer'
                    network='email'
                    fgColor='white'
                    bgColor='transparent' />
                {/* <div className='z-50 text-white'>LINK UP</div> */}
                <Link href="#contact" className='z-50'>
                    <h1 className='hidden mr-5 text-sm text-white uppercase sm:inline-flex'>Lets Link Up</h1>
                   
                </Link>
            </motion.div>
        </header >
    )
}

export default Header