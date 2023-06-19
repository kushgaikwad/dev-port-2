import Link from "next/link";
import { BsArrowUpRight, BsGithub } from 'react-icons/bs'
import styles from '../styles/Project.module.css'

type ModalState = {
    active: boolean,
    id: number
}

type Props = {
    id: number,
    title: string,
    description: string,
    imageUrl: string,
    githubLink: string,
    demoLink: string,
    setModal: React.Dispatch<React.SetStateAction<ModalState>>;
}


const Project = (props: Props) => {

    const setModalActiveTrue = () => {
        props.setModal({ active: true, id: props.id - 1 });
    }
    const setModalActiveFalse = () => {
        props.setModal({ active: false, id: props.id - 1 });
    }



    return (

       
        <div className={styles.projectContainer}
            onMouseEnter={setModalActiveTrue}
            onMouseLeave={setModalActiveFalse}
        >
            <div className={styles.titleContainer}>
                <Link href={props.demoLink} target='_blank'>
                <p className="text-[1rem] sm:text-[1.7rem] ">{props.title}</p> 
               
                </Link>
               
            </div>
            <div className={styles.linksContainer}
                onMouseEnter={setModalActiveFalse}
                onMouseLeave={setModalActiveTrue}
            >
                <Link href={props.demoLink} target="_blank" className={`${styles.linkContainer} hover:scale-125 transition-all `} >
                    <BsGithub size={30} className='hover:text-white hover:opacity-100'  />

                </Link>

            </div>
        </div>
        

    );
};

export default Project;