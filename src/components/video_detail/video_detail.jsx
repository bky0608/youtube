import React, { memo } from 'react';
import styles from './video_detail.module.scss';

const VideoDetail = memo(({ videos, videos: { snippet } }) => {
  return (
    <section className={styles.detail}>
      <iframe //
        className={styles.video}
        type="text/html"
        title="tyotube video player"
        width="100%"
        height="500px"
        src={`https://www.youtube.com/embed/${videos.id}`}
        frameBorder="0"
        allowFullScreen
      />
      <h2>{snippet.title}</h2>
      <h3>{snippet.channelTitle}</h3>
      <pre className={styles.description}>{snippet.description}</pre>
    </section>
  );
});

export default VideoDetail;
