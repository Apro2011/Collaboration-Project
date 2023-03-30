import React from 'react';
import styles from './RecentlyPlayedSongs.module.css';

const RecentlyPlayedSongs= ({children}) => {
  return (
    <div className={styles.container}>
      {children}
   </div>
  );
};

export default RecentlyPlayedSongs;
