import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion"
import Link from 'next/link'
import { slideAnimation } from '@/config/motion';

type Props = {}

const Header = (props: Props) => {
    return (
     
            <header className='top-0 z-20 flex justify-between py-5 mx-auto xl:items-center xl:my-5'>
                <motion.div className='flex flex-row items-center' {...slideAnimation('left')}>
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

                <motion.div className='flex flex-row items-center cursor-pointer' {...slideAnimation('right')}>
                    <SocialIcon
                        className='cursor-pointer'
                        network='email'
                        fgColor='white'
                        bgColor='transparent' />
                    <Link href="#contact" className='z-50'>
                        <h1 className='hidden text-sm text-white uppercase sm:inline-flex'>Lets Link Up</h1>

                    </Link>
                </motion.div>
            </header >
            // </Wrapper>
    
    )
}

export default Header