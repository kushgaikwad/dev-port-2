import Link from 'next/link'
import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Image from 'next/image'

type Props = {}

function Hero({ }: Props) {

    return (
        <div className='h-screen flex flex-col '>
            <div>
                
            </div>
            <div className='flex flex-col sticky text-6xl text-right mr-6 mt-96 z-0 xl:text-7xl xl:mr-11'>
                <h1>Hi.</h1>
                <h1>I am Kush.</h1>
                <h1>A Creative Technologist.</h1>
            </div>

        </div>

    )
}

export default Hero