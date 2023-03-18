import React from 'react'
import { motion } from "framer-motion"

type Props = {
    expNumber: number
}

const expierences = [
    {
    
        jobTitle: "Web3 Entrepreneur in Residence",
        imageLocation: "/images/EF square logo.jpeg",
        company: "Entrepreneur First London",
        date: "Oct 2022 - Jan 2023",
        content: ["Selected from 1500+ applicants to join EF’s first web3 focused cohort to test co-founding relationships and build a tech company", "Built an MVP for a web3 focused review platform and protocol. In just 5 weeks, we built a userbase of 350+ who created one of the biggest web3 project knowledge repositories", "Established launch partnerships with brands like Proof, Zeneca and 10 others" ]

    },
    {
        jobTitle: "Member of Technical staff 2",
        imageLocation: "/images/vmware square 1.webp",
        company: "VMware Inc.",
        date: "Aug 2018 - May 2021",
        content: ["Worked in multi-cloud applications team responsible for providing desktops to on-prem and cloud customers over AWS and Azure", "Collaborated with team to design solutions, implement major workflows, and apply best practices.", "Utilized React, Kubernetes, MongoDB, REST APIs, Java frameworks. etc " ]

    },
    {
        jobTitle: "R&D Intern",
        imageLocation: "/images/Akamai-Logo.jpeg",
        company: "Akamai Technologies",
        date: "May 2017 - Jul 2017",
        content: ["Designed and built a large-scale Discrete Event Simulation (DES) model to enable efficient parallel processing", "Utilized Python libraries such as Pandas, SimPy and NetworkX to facilitate modeling and analysis", "Outstanding performance rewarded with pre-placement offer upon successful completion of internship" ]

    },

]

const Experience = (props: Props) => {
    return (
        <article className='flex flex-col rounded-l items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-gray-100 p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
            {/* TODO: Use next js image */}
            <motion.img
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
                className='w-32 h-32 rounded-full  xl:w-[200px] xl:h-[200px] object-cover object-center'
                src={expierences[props.expNumber].imageLocation} />

            <div className='px-0 md:px-10'>
                <h4 className='text-4xl font-light'> {expierences[props.expNumber].jobTitle} </h4>
                <p className='font-bold text-2xl py-2
                mt-1'>{expierences[props.expNumber].company}</p>
                {/* <div className='flex space-x-2 my-2'>Tech</div> */}
                <p className='uppercase py-5 text-gray-600'>{expierences[props.expNumber].date}</p>
                <ul className='list-disc space-y-4 ml-5 text-xs'>
                    <li>{expierences[props.expNumber].content[0]}</li>
                    <li>{expierences[props.expNumber].content[1]}</li>
                    <li>{expierences[props.expNumber].content[2]}</li>
                </ul>
            </div>

        </article>
    )
}

export default Experience