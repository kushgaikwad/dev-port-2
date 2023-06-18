import Link from "next/link";
import { BsArrowUpRight, BsGithub } from 'react-icons/bs'

type Props = {
    id: number,
    title: string,
    description: string,
    imageUrl: string,
    githubLink: string,
    demoLink: string,
}


const Project = (props: Props) => {
    return (
        <div className='flex flex-col gap-6 text-white'>
            <span className='text-7xl text-white/20'>
                {String(props.id).padStart(2, '0')}
            </span>
            <h3 className='sm:text-3xl md:text-4xl lg:text-5xl  leading-tight uppercase text-[#9389ce]'>
                {props.title}
            </h3>
            <p className='text-lg sm:text-md text-slate-300'>{props.description}</p>
            <div className='flex flex-wrap gap-10'>
                <Link target="_blank" href={props.demoLink} ><button className="px-4 w-[7rem] py-2 flex justify-center gap-2 items-center font-bold text-black rounded   bg-[#d89078] hover:bg-[#d6957f] hover:scale-105 transition-all ">
                    Demo
                    <BsArrowUpRight />
                </button>
                </Link>
                <Link target="_blank" href={props.githubLink} ><button className="px-4 flex items-center justify-center gap-2 w-[7rem] py-2 font-bold text-black rounded   bg-[#d89078] hover:bg-[#d6957f]  hover:scale-105 transition-all ">
                    Code
                    <BsGithub/>
                </button>

                </Link>
            </div>
        </div>
    );
};

export default Project;