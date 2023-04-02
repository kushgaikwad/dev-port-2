import React from 'react'
import Image from 'next/image'

type Props = {}

const About = (props: Props) => {
    return (
        <div className='flex flex-col items-center h-screen'>
            <h1 className='uppercase h-1/6 tracking-[20px] flex jusify-center items-center text-gray-400 text-xl sm:text-[2rem] md:text-[3rem]'>ABOUT</h1>
            <div className='flex flex-col items-center mx-3 lg:mx-6 lg:flex-row h-5/6 gap-y-8'>
                <div className='relative w-3/4 h-1/2 rounded-xl lg:h-3/4 lg:w-1/2'>
                    < Image src='/images/musket-headshot.jpg' alt="test" layout="fill" objectFit="cover" className='rounded-xls' />
                </div>
                <div className='flex flex-col items-center justify-center text-center sm:text-[1.1rem] sm:mx-6 sm:gap-7 md:text-[1.5rem] md:mx-8 lg:w-1/2 lg:text-[1rem] xl:text-[1.5rem]'>
                    <h2 > Raised by a loving artistc family, I have been absorbed by the craft of performing and creating music from a very young age. I went on to study Computer Science & Engineering from IIT Kharagpur; with research focused in audio technology. Following this, I worked as a software developer for few years.</h2>
                    <h2> I moved to London to pursue my second Master&apos;s from Queen Mary University of London; with research focused on blockchain and creative tech.</h2>
                    <h2> I am really passionate about elevating culture and community through emergent technologies.</h2>
                </div>



            </div>

        </div >
    )
}

export default About