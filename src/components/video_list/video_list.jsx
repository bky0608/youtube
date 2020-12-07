import React, { memo } from 'react';
import VideoItem from '../video_item/video_item';
import styles from './video_list.module.scss';

const VideoList = memo(({ videos, onVideoClick, display }) => {
  return (
    <ul className={styles.videos}>
      {videos.map((video) => (
        <VideoItem
          key={video.id} //
          video={video}
          onVideoClick={onVideoClick}
          display={display}
        />
      ))}
    </ul>
  );
});

export default VideoList;
