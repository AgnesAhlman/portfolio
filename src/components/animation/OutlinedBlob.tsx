import React, { useEffect } from 'react';
import KUTE from 'kute.js';

const OutlinedBlob: React.FC = () => {
  useEffect(() => {
    const tween = KUTE.fromTo(
      '#blob3',
      { path: '#blob3' },
      { path: '#blob4' },
      { repeat: 999, duration: 7000, yoyo: true },
    );
    tween.start();
  });

  return (
    <div>
      <svg
        id="visual"
        viewBox="0 0 900 600"
        width="900"
        height="600"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <path
          id="blob3"
          d="M183.2 -153.6C224.6 -94.1 236.6 -18.7 217.5 43.4C198.3 105.4 148 154.1 86.6 186.1C25.2 218 -47.3 233.4 -108.1 209.7C-168.9 186.1 -218 123.5 -236.7 51.2C-255.5 -21.1 -243.8 -103.1 -199.3 -163.3C-154.8 -223.5 -77.4 -261.7 -3.3 -259.1C70.9 -256.5 141.8 -213.1 183.2 -153.6"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="6"
          style={{ visibility: 'hidden' }}
        ></path>
        <path
          id="blob4"
          d="M196.3 -157.2C244.1 -96.7 265.4 -15.6 247.7 54.5C230.1 124.7 173.6 184 106.9 212.5C40.1 241 -36.9 238.8 -105.2 209.3C-173.4 179.9 -233 123.3 -250.7 54.6C-268.5 -14.1 -244.5 -95 -195.7 -155.8C-147 -216.5 -73.5 -257.3 0.4 -257.6C74.3 -257.9 148.5 -217.8 196.3 -157.2"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="6"
        ></path>
      </svg>
    </div>
  );
};

export default OutlinedBlob;
