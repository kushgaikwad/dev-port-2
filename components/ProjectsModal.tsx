import Image from 'next/image'
import React, { useEffect, useRef } from 'react'

import { motion } from 'framer-motion'
import gsap from 'gsap'
import Link from 'next/link'



type ModalState = {
    active: boolean,
    id: number
}

type ProjectInfo = {
    id: number,
    title: string,
    description: string,
    imageUrl: string,
    githubLink: string,
    demoLink: string,
    backgroundcolor: string
}

type Props = {
    modal: ModalState,
    projects: ProjectInfo[]

}

const ProjectsModal = (props: Props) => {

    const variants = {
        initial: { scale: 0, opacity: 0, x: '-50%', y: '-50%' },
        open: { scale: 1, opacity: 1, x: '-50', y: '-50', transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] } },
        closed: { scale: 0, opacity: 0, x: '-50%', y: '-50%', transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] } },
    }

    const modalContainer = useRef(null);
    const DemoLabel = useRef(null);

    useEffect(() => {

        let xMoveContainer = gsap.quickTo(modalContainer.current, "left", { duration: 0.8, ease: "power3" })
        let yMoveContainer = gsap.quickTo(modalContainer.current, "top", { duration: 0.8, ease: "power3" })
        let xMoveDemoLabel = gsap.quickTo(DemoLabel.current, "left", { duration: 0.5, ease: "power3" })
        let yMoveDemoLabel = gsap.quickTo(DemoLabel.current, "top", { duration: 0.5, ease: "power3" })

        window.addEventListener('mousemove', (e) => {
            const { pageX, pageY } = e;
            xMoveContainer(pageX)
            yMoveContainer(pageY)
            xMoveDemoLabel(pageX)
            yMoveDemoLabel(pageY)

        })

        return () => {
            window.removeEventListener('mousemove', (e) => {

            })
        }
    }, [])




    return (

        <>
           
                <motion.div ref={modalContainer} className='h-[20vh] w-[20vw] overflow-hidden  pointer-events-none absolute' variants={variants} initial={'initial'} animate={props.modal.active ? 'open' : 'closed'}>
                    <div className='absolute w-full h-full transition-all duration-200 ease-in ' style={{ top: props.modal.id * -100 + '%' }}>
                        {props.projects.map((project, index) => (
                            <div key={project.id} className={`flex items-center justify-center h-full w-full`} style={{ backgroundColor: project.backgroundcolor }}>
                                <Image alt={project.title} width={175} height={100} src={project.imageUrl} />
                                {/* <div className='text-white'>{project.backgroundcolor}</div> */}
                            </div>
                        ))}
                    </div>
                </motion.div >

                <motion.div ref={DemoLabel} className='absolute z-50 flex items-center justify-center w-12 h-12 text-xs text-black bg-gray-200 rounded-full cursor-pointer pointer-events-none ' variants={variants} initial={'initial'} animate={props.modal.active ? 'open' : 'closed'}>
                   
                    View
                   

                   


                </motion.div> 
        </>

    )
}

export default ProjectsModal