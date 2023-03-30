import React from 'react';
import styles from './RecentlyPlayedSongsCard.module.css';
import Avatar from '../../atoms/Avatar/Avatar'
import Icon from '../../atoms/Icon/Icon'

const RecentlyPlayedSongsCard = ({title,subTitle}) => {
  return (
    <div className={styles.container}>
      <Avatar/>
      <div className={styles.text_box}>
        <p className={styles.title}>{title}</p>
        <p>{subTitle}</p>
      </div>
      <Icon/>
   </div>
  );
};

export default RecentlyPlayedSongsCard;
