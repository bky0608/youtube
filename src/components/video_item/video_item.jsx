import React from 'react';
import styles from './video_item.module.scss';

const VideoItem = ({ video: { snippet } }) => {
  return (
    <li className={styles.container}>
      <div className={styles.vidoe}>
        <img
          className={styles.thumbnails}
          src={snippet.thumbnails.medium.url} //
          alt="video thubnail"
        />

        <div className={styles.metadata}>
          <p className={styles.title}>{snippet.title}</p>
          <p className={styles.channel}>{snippet.channelTitle}</p>
        </div>
      </div>
    </li>
  );
};

export default VideoItem;
