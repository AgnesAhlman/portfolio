import React, { useEffect } from 'react';
import KUTE from 'kute.js';

const PurpleBlob: React.FC = () => {
  useEffect(() => {
    const tween = KUTE.fromTo(
      '#purple1',
      { path: '#purple1' },
      { path: '#purple2' },
      { repeat: 999, duration: 5000, yoyo: true },
    );
    tween.start();
  });

  return (
    <div>
      <svg
        viewBox="0 0 900 600"
        width="900"
        height="600"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
      >
        <g transform="translate(453.0600465354575 306.4530958386154)">
          <path
            id="purple1"
            d="M106.2 -97.6C129.1 -56.1 133.1 -12.4 128.5 38C123.9 88.4 110.8 145.6 77.4 162.1C44.1 178.7 -9.4 154.7 -49.4 126.3C-89.4 97.9 -115.9 65.2 -128.4 25C-141 -15.1 -139.7 -62.7 -116 -104.5C-92.3 -146.2 -46.1 -182.1 -2.2 -180.4C41.7 -178.6 83.4 -139.2 106.2 -97.6"
            fill="#CEBCD7"
          ></path>
        </g>
        <g
          transform="translate(428.91674507844726 293.5022567450021)"
          style={{ visibility: 'hidden' }}
        >
          <path
            id="purple2"
            d="M143.4 -104.5C180 -68.5 199.7 -9.2 188.4 44.1C177 97.3 134.7 144.6 86.3 160.9C37.9 177.2 -16.6 162.5 -54.9 135.7C-93.1 108.9 -115.1 70.1 -131.7 22.8C-148.2 -24.4 -159.3 -80.2 -136.5 -113.1C-113.6 -145.9 -56.8 -156 -1.7 -154.6C53.4 -153.3 106.9 -140.5 143.4 -104.5"
            fill="#CEBCD7"
          ></path>
        </g>
      </svg>
    </div>
  );
};

export default PurpleBlob;
