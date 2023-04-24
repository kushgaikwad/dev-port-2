import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { SocialIcon } from 'react-social-icons'


type ProjectInfo = {
    title: string,
    description: string,
    imageUrl: string,
    githubLink: string,
    demoLink: string
}

type Props = {
    info: ProjectInfo
}

const ProjectCard = ({ info }: Props) => {
    return (
        <article
            className="flex mx-2 transition bg-white hover:shadow-xl dark:bg-[#2f3033] dark:shadow-gray-800/25 hover:scale-105 rounded-xl"
        >
            <div className=" p-2 [writing-mode:_vertical-lr]">
                <time
                    dateTime="2022-10-10"
                    className="flex items-center justify-between gap-4 text-xs font-bold text-gray-900 uppercase dark:text-white"
                >
                    <SocialIcon url={info.githubLink}
                        fgColor='white'
                        bgColor='transparent'
                        target="_blank" />
                    {/* <span>2022</span> */}
                    <span className="flex-1 w-px bg-gray-900/10 dark:bg-white/10"></span>
                    {/* <span>Oct 10</span> */}

                </time>
            </div>

        
            <div className="relative hidden overflow-hidden rounded-md sm:block sm:basis-56">
                <Image
                    alt="Guitar" fill
                    src={info.imageUrl}
                    className="object-cover w-full h-full aspect-square"
                />
            </div>

            <div className="flex flex-col justify-between flex-1">
                <div
                    className="border-l border-gray-900/10 p-4 dark:border-white/10 sm:!border-l-transparent sm:p-6"
                >
                    <Link href={info.demoLink} target="_blank">
                        <h3 className="font-bold text-gray-900 uppercase dark:text-white">
                            {info.title}
                        </h3>
                    </Link>

                    <p
                        className="mt-2 text-sm line-clamp-3 dark:text-[#ac9e9e]"
                    >
                        {info.description}
                    </p>
                </div>

                <div className="sm:flex sm:items-end sm:justify-end ">
                    <Link
                        href={info.demoLink} target="_blank"
                        className="block px-5 py-3 text-xs font-bold text-center text-[#423f3f] uppercase transition bg-gray-400 hover:bg-[#ffffff] rounded-md"
                    >
                        DEMO
                    </Link>
                </div>
            </div>
        </article>
    )
}

export default ProjectCard