import React from 'react'

type Props = {}

const BackgroundVideo = (props: Props) => {
    return (
        //  <div className={styles.videoBackground}>
        <div className='absolute top-0 left-0 w-full h-screen -z-10 object-covers brightness-50'>
            <video autoPlay loop muted className='object-cover w-full h-full'>
                {/* <source src='https://drive.google.com/file/d/1A_fl7rHVldytH-lPJMp9qkciEtOmjD2f/view?usp=share_link4' type="video/mp4" /> */}
                {/* <source src='https://www.youtube.com/watch?v=po02mFUhRTk' type="video/mp4" /> */}
                <source src='/images/Kush-hero-video.mp4' type="video/mp4" />
            </video>
        </div>
    );
}

export default BackgroundVideo;