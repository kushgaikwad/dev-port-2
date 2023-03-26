import React from 'react'
import { useEffect } from 'react';
import styles from "../styles/BackgroundVideo.module.css";

type Props = {}

const BackgroundVideo = (props: Props) => {
    return (
        <div className={styles.videoBackground}>
          <video autoPlay loop muted>
            <source src="/images/smoothies low quality 1.mp4" type="video/mp4" />
          </video>
        </div>
      );
}

export default BackgroundVideo;