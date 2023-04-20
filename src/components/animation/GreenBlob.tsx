import React, { useLayoutEffect } from 'react';
import KUTE from 'kute.js';

const GreenBlob: React.FC = () => {
  useLayoutEffect(() => {
    const tween = KUTE.fromTo(
      '#blob1',
      { path: '#blob1' },
      { path: '#blob2' },
      { repeat: 999, duration: 7000, yoyo: true },
    );
    tween.start();
  }, []);

  return (
    <div>
      <svg id="visual" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 544.83 541.96">
        <path
          id="blob1"
          d="M532.54,64.23c28.8,51.15-.39,129.08-12.83,222.49-12.54,93.41-8.43,202.29-59.27,239.45-50.94,37.25-156.94,2.69-259.41-42.44C98.46,438.51-.59,382.63,0,322.95c.49-59.68,100.71-123.15,172.32-183.57C243.94,79.05,287.04,21.6,351.99,5.11c64.95-16.49,151.75,7.97,180.55,59.12"
          fill="#ff7070"
        ></path>
        <path
          id="blob2"
          d="M516.83,48.31c65.56,50.54,107.22,151.72,77.94,219.26-29.29,67.55-129.61,101.46-225.97,150.4-96.26,48.84-188.47,112.7-253.56,92.11C50.06,489.49,12.08,384.53,2.44,288.55-7.19,192.47,11.51,105.37,61.3,58.42,110.99,11.47,191.76,4.76,276.88,1.27c85.02-3.4,174.39-3.5,239.95,47.05"
          fill="#ff7070"
          style={{ visibility: 'hidden' }}
        ></path>
      </svg>
    </div>
  );
};

export default GreenBlob;
