import React from 'react'

type Props = {}

const BackgroundVideo = (props: Props) => {
    return (
        //  <div className={styles.videoBackground}>
        <div className='absolute top-0 left-0 w-full h-screen -z-10 object-covers brightness-50'>
            <video autoPlay loop muted playsInline className='object-cover w-full h-full'>
                <source src='https://res.cloudinary.com/dvszxda1u/video/upload/v1680879415/Kush-hero-video_xhocq2.mp4' type="video/mp4" />
            </video>
        </div>
    );
}

export default BackgroundVideo;