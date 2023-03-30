import React from 'react';
import styles from './Avatar.module.css';

const Avatar = () => {
  return (
    <div className={styles.avatar}>
     <img className={styles.avatar_image} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhze-QNnca2liBrhRj4CjswGZSkqbhvSDJsQ&usqp=CAU'/>
   </div>
  );
};

export default Avatar;
