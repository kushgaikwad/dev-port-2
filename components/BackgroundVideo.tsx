import React from 'react'
import { useEffect } from 'react';
import styles from "../styles/BackgroundVideo.module.css";

type Props = {}

const BackgroundVideo = (props: Props) => {
    return (
        <div className={styles.videoBackground}>
          <video autoPlay loop muted>
            <source src="/images/Kush-hero-video.mp4" type="video/mp4" />
          </video>
        </div>
      );
}

export default BackgroundVideo;