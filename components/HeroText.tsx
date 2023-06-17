import React from 'react'
import styles from '../styles/Hero.module.css'

type Props = {
    sampleText: string
}

const HeroText = (props: Props) => {
    return (
        <div className={styles.textContainer}>
            <p className={`text-white ${styles.primary}`}>{props.sampleText}</p>
            <p className={styles.secondary}>{props.sampleText}</p>
        </div>
    )
}

export default HeroText