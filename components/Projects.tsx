import { AnimatePresence } from 'framer-motion'
import React, { useState } from 'react'
import Project from './Project'
import ProjectsModal from './ProjectsModal'
import Wrapper from './Wrapper'

type Props = {

}

const projects = [{
    id: 1,
    title: 'AI enabled 3D fashion customization tool',
    description: 'Highly interactive real-time app that lets you design Tshirt with the help of AI',
    imageUrl: "https://res.cloudinary.com/dvszxda1u/image/upload/v1682325006/Screenshot_2023-04-24_at_1.59.56_PM_gfsdwh.png",
    githubLink: 'https://github.com/kushgaikwad/3d-ai-tshirt-customize-frontend',
    demoLink: 'https://3d-ai-tshirt-customize-frontend.vercel.app/',
    backgroundcolor: '#ffdede'
}, {
    id: 2,
    title: 'AI Powered Note Summarization Chrome Extension',
    description: 'a chrome extension that enables users to extract key insights from articles or web pages using AI; Extension popup shows the saved insights',
    imageUrl: 'https://res.cloudinary.com/dvszxda1u/image/upload/v1687154621/Screenshot_2023-06-19_at_11.32.15_AM_dwfloj.png',
    githubLink: 'https://github.com/KUSHGAIKWAD/REACTJS-CHROME-EXTENSION',
    demoLink: 'https://github.com/KUSHGAIKWAD/REACTJS-CHROME-EXTENSION',
    backgroundcolor: '#FF8551'
},
{
    id: 3,
    title: 'Play-2-earn Web3 Game With Custom Token',
    description: 'Developed a p2e idle staking game with custom ERC20 tokens on mumbai polygon testnet with EIP-4337 smart wallet functionality',
    imageUrl: 'https://res.cloudinary.com/dvszxda1u/image/upload/v1687161396/Screenshot_2023-06-19_at_1.26.28_PM_qrlkfx.png',
    githubLink: 'https://github.com/kushgaikwad/chad-p2e-1',
    demoLink: 'https://chad-p2e-1.vercel.app/',
    backgroundcolor: '#9BCDD2'
},
{
    id: 4,
    title: 'Ecommerce Website ',
    description: 'Fully functional ecommerce website that sells Nike trainers.',
    imageUrl: 'https://res.cloudinary.com/dvszxda1u/image/upload/v1682329708/Screenshot_2023-04-24_at_3.18.22_PM_gnphiz.png',
    githubLink: 'https://github.com/kushgaikwad/ecom1-frontend',
    demoLink: 'https://ecom1-frontend.vercel.app/',
    backgroundcolor: '#FAF0E4'
},
{
    id: 5,
    title: 'Custom NFT minting page',
    description: 'Connect your crypto wallet and mint a polygon based NFT ',
    imageUrl: 'https://res.cloudinary.com/dvszxda1u/image/upload/v1682329565/Screenshot_2023-04-24_at_3.15.59_PM_lrp4x0.png',
    githubLink: 'https://github.com/kushgaikwad/xoxo-summer-1',
    demoLink: 'https://xoxo-summer-1.vercel.app/',
    backgroundcolor: '#FF78C4'
},
    // {
    //     id: 6,
    //     title: 'Generative Audio For Non-fungible Tokens (NFTs)',
    //     description: 'Conducted an in-depth study on the effects of generative audio on generative audio-visual NFTs; in the context of the mood state of human participants',
    //     imageUrl: 'https://res.cloudinary.com/dvszxda1u/image/upload/v1682329850/Screenshot_2023-04-24_at_3.20.43_PM_hfqbkp.png',
    //     githubLink: 'https://github.com/kushgaikwad',
    //     demoLink: 'https://drive.google.com/file/d/1jaHTtb4u12EihmJicpKxA6RSR1nAd4E7/view?usp=sharing',
    //     backgroundcolor: '#E1AEFF'
    // },
]

const Projects = (props: Props) => {

    const [modal, setmodal] = useState({ active: false, id: 0 })

    return (
        <Wrapper className="">
            <p className='uppercase tracking-[20px] flex  items-center justify-center  mb-16 py-10 text-gray-400 text-xl sm:text-[2rem] md:text-[2rem]'>PROJECTS</p>
            <AnimatePresence>
                <div>
                    {
                        projects.map((project, index) => (
                            <Project {...project} setModal={setmodal} key={index} />
                        ))
                    }

                </div>
            </AnimatePresence>
            <ProjectsModal modal={modal} projects={projects} />
        </Wrapper>
    )
}

export default Projects