import React from 'react';
import styles from './Logo.module.css';

const Logo = ({ title, iconPath, className }) => {
  return (
    <>
      <div
        className={className}
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '32px 10px',
          gap: '16px',
          width: '255px',
          height: '90px',
          background: '#161616',
        }}
      >
        <img
          src={iconPath}
          alt={title}
          style={{ flex: 'none', order: 0, flexGrow: 0 }}
        />
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
    </>
  );
};

export default Logo;
