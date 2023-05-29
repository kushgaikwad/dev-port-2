import { AnimatePresence } from 'framer-motion'
import React from 'react'
import Project from './Project'
import ProjectCard from './ProjectCard'
import Wrapper from './Wrapper'

type Props = {}

const projects = [{
    id: 1,
    title: 'AI-enabled 3D fashion customization tool',
    description: 'Highly interactive real-time app that lets you design Tshirt with the help of AI',
    imageUrl: "https://res.cloudinary.com/dvszxda1u/image/upload/v1682325006/Screenshot_2023-04-24_at_1.59.56_PM_gfsdwh.png",
    githubLink: 'https://github.com/kushgaikwad/3d-ai-tshirt-customize-frontend',
    demoLink: 'https://3d-ai-tshirt-customize-frontend.vercel.app/'
}, {
    id: 2,
    title: 'Custom NFT minting page',
    description: 'Connect your crypto wallet and mint a polygon based NFT ',
    imageUrl: 'https://res.cloudinary.com/dvszxda1u/image/upload/v1682329565/Screenshot_2023-04-24_at_3.15.59_PM_lrp4x0.png',
    githubLink: 'https://github.com/kushgaikwad/xoxo-summer-1',
    demoLink: 'https://xoxo-summer-1.vercel.app/'
}, {
    id: 3,
    title: 'Ecommerce Website ',
    description: 'Fully functional ecommerce website that sells Nike trainers.',
    imageUrl: 'https://res.cloudinary.com/dvszxda1u/image/upload/v1682329708/Screenshot_2023-04-24_at_3.18.22_PM_gnphiz.png',
    githubLink: 'https://github.com/kushgaikwad/ecom1-frontend',
    demoLink: 'https://ecom1-frontend.vercel.app/'
}, {
    id: 4,
    title: 'GENERATIVE AUDIO FOR NON-FUNGIBLE TOKENS (NFTs)',
    description: 'Conducted an in-depth study on the effects of generative audio on generative audio-visual NFTs; in the context of the mood state of human participants',
    imageUrl: 'https://res.cloudinary.com/dvszxda1u/image/upload/v1682329850/Screenshot_2023-04-24_at_3.20.43_PM_hfqbkp.png',
    githubLink: 'https://github.com/kushgaikwad',
    demoLink: 'https://drive.google.com/file/d/1jaHTtb4u12EihmJicpKxA6RSR1nAd4E7/view?usp=sharing'
},]

const Projects = (props: Props) => {
    return (
        <Wrapper className="">
            <AnimatePresence>
                <div className='flex flex-col items-center'>
                    <h1 className='uppercase tracking-[20px] flex jusify-center items-center text-gray-400 text-xl sm:text-[2rem] md:text-[2rem] mb-24'>PROJECTS</h1>

                    <div className='flex flex-col mb-8 gap-28'>
                       
{/* 
                        {projects.map((project) => (
                            <ProjectCard info={project} key={project.title} />)
                        )} */}
                         {projects.map((project) => (
                            <Project {...project} key={project.title} />)
                        )}

                    </div>

                </div>
            </AnimatePresence>

        </Wrapper>
    )
}

export default Projects