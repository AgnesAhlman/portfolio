import React, { useState } from 'react';
import styles from './DownloadButton.module.css';

const DownloadButton: React.FC = () => {
  const [isCircle, setIsCircle] = useState(false);

  const handleClick = (): void => {
    setIsCircle(!isCircle);
  };

  return (
    <>
      {isCircle ? (
        <button className={styles.circle}>+</button>
      ) : (
        <button
          className={`${styles.button} ${isCircle ? styles.circle : styles.rectangle}`}
          onClick={handleClick}
        >
          Download cv{' '}
        </button>
      )}
    </>
  );
};

export default DownloadButton;
