import gsap from 'gsap'
import Link from 'next/link'
import React from 'react'

type Props = {}

const socialLinks = [

    {
        title: "Github",
        color: "#E4A5FF",
        url: 'https://github.com/kushgaikwad'
    },


    {
        title: "LinkedIn",
        color: "#FFAAC9",
        url: 'https://linkedin.com/in/kushal-gaikwad'
    },
    {
        title: "Instagram",
        color: "#FFCDA8",
        url: 'https://www.instagram.com/honey_musket/'
    },

    {
        title: "Twitter",
        color: "#FFE7CE",
        url: 'https://twitter.com/honey_musket'
    },

]

const Socials = (props: Props) => {

    const manageMouseEnter = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number) => {
        gsap.to(e.target, { top: "-3vw", backgroundColor: socialLinks[index].color, duration: 0.3, })
    }

    const manageMouseLeave = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number) => {
        gsap.to(e.target, { top: "0", backgroundColor: "black", duration: 0.3, delay: 0.1 })
    }

    return (
        <div className='relative flex-col justify-center hidden text-white bg-black lg:flex pb-28'>
            {socialLinks.map((socialLink, index) => (
                <Link href={socialLink.url} rel="noopener noreferrer" target="_blank">
                    <div className='pt-8 pl-8 uppercase relative flex max-w-[1280px] w-full mx-auto -mb-[3vw] bg-black border-t-[1px] border-gray-700 pb-3 lg:text-5xl xl:text-7xl' onMouseEnter={(e) => { manageMouseEnter(e, index) }} onMouseLeave={(e) => { manageMouseLeave(e, index) }} key={index}>
                        {socialLink.title}
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default Socials