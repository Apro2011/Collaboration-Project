import React, { useState } from 'react';
import styles from './MenuItem.module.css';

const MenuItem = ({ title, iconPath, pathName, className }) => {
  return (
    <>
      {/* <a href={pathName}> */}
      <div
        className={className}
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          padding: '34px 0 34px 32px',
          gap: '10px',
          position: 'relative',
          width: '243px',
          height: '20px',
          background: `#161616`,
          cursor: 'pointer',
        }}
      >
        <img src={iconPath} alt={title} />
        <span
          style={{
            fontWeight: 700,
            fontSize: '20px',
            lineHeight: '24px',
            color: '#FFFFFF',
          }}
        >
          {title}
        </span>
      </div>
      {/* </a> */}
    </>
  );
};

export default MenuItem;
