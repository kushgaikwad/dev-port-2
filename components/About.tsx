import React from 'react'

import Wrapper from './Wrapper'
import { AnimatePresence, motion } from 'framer-motion'
import DotsPattern from './DotsPattern'
import Image from 'next/image'
import { slideAnimation } from '@/config/motion';



type Props = {}

const About = (props: Props) => {
    return (
        <Wrapper className="">
            <section className="overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] bg-black">
                <div className="container mx-auto">
                    <AnimatePresence>
                        <div className="flex flex-wrap items-center justify-between gap-3">
                            <motion.div  {...slideAnimation('left')} className="w-full px-4 lg:w-6/12">
                                <div className="flex items-center ">
                                    <div className="w-full px-3 sm:px-4 xl:w-1/2">
                                        <div className="py-3 sm:py-4 hover:scale-105">
                                            <Image
                                                src="https://res.cloudinary.com/dvszxda1u/image/upload/v1682316565/developer_hdccxy.png"
                                                alt=""
                                                width={500}
                                                height={400}
                                                className="w-full rounded-2xl"
                                            />
                                        </div>
                                        <div className="py-3 sm:py-4 hover:scale-105">
                                            <Image
                                                src="https://res.cloudinary.com/dvszxda1u/image/upload/v1682316565/futurist_tasxy5.png"
                                                alt=""
                                                width={500}
                                                height={400}
                                                className="w-full rounded-2xl"
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full px-3 sm:px-4 xl:w-1/2">
                                        <div className="relative z-10 my-4 hover:scale-105">
                                            <Image
                                                src="https://res.cloudinary.com/dvszxda1u/image/upload/v1682316565/designer_ejgqq8.png"
                                                alt=""
                                                width={500}
                                                height={400}
                                                className="w-full rounded-2xl"
                                            />
                                            <span className="absolute -right-7 -bottom-7 z-[-1]">
                                                <DotsPattern color="#ffffff" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div  {...slideAnimation('right')} className="w-full px-4 mr-3 lg:w-1/2 xl:w-5/12">
                                <div className="mt-10 text-white lg:mt-0">

                                    {/* <h2 className="mb-8 text-3xl font-bold text-dark sm:text-4xl">
                                   About
                                </h2> */}
                                    <p className="mb-12 text-base text-body-color">
                                        As a tech virtuoso with a background in Computer Science & Engineering, I've honed my skills as a full-stack developer, serving big-time corporations and small fry startups alike.
                                    </p>
                                    <p className="mb-12 text-base text-body-color">
                                        With a sense of adventure and an insatiable thirst for knowledge, I journeyed to London to pursue my second Master's degree. My research delved deep into the dynamic worlds of blockchain and creative tech, where I explored the frontiers of innovation and creativity.
                                    </p>
                                    <p className="mb-8 text-base text-body-color">
                                        I'm fueled by a passion for harnessing the power of emergent technologies to uplift culture and strengthen communities.
                                    </p>


                                </div>
                            </motion.div>
                        </div>
                    </AnimatePresence>
                </div>
            </section>
        </Wrapper>

    )
}

export default About