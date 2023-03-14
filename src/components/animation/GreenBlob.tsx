import React, { useEffect } from 'react';
import KUTE from 'kute.js';

const GreenBlob: React.FC = () => {
  useEffect(() => {
    const tween = KUTE.fromTo(
      '#blob1',
      { path: '#blob1' },
      { path: '#blob2' },
      { repeat: 999, duration: 4000, yoyo: true },
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
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
      >
        <g transform="translate(508.9274735162022 259.98389542366823)">
          <path
            id="blob1"
            d="M206.6 -183.1C236 -127.9 206.2 -43.8 193.5 57C180.7 157.8 184.9 275.3 133 315.4C81 355.6 -27.2 318.3 -131.8 269.6C-236.5 220.8 -337.6 160.5 -337 96.1C-336.5 31.7 -234.2 -36.8 -161.1 -102C-88 -167.1 -44 -229.1 22.3 -246.9C88.6 -264.7 177.2 -238.3 206.6 -183.1"
            fill="#C2D8C5"
          ></path>
        </g>
        <g
          transform="translate(418.6498022485815 251.76971580653168)"
          style={{ visibility: 'hidden' }}
        >
          <path
            id="blob2"
            d="M258.6 -172.7C328 -119.2 372.1 -12.1 341.1 59.4C310.1 130.9 203.9 166.8 101.9 218.6C0 270.3 -97.6 337.9 -166.5 316.1C-235.5 294.3 -275.7 183.2 -285.9 81.6C-296.1 -20.1 -276.3 -112.3 -223.6 -162C-171 -211.7 -85.5 -218.8 4.6 -222.5C94.6 -226.1 189.2 -226.2 258.6 -172.7"
            fill="#C2D8C5"
          ></path>
        </g>
      </svg>
    </div>
  );
};

export default GreenBlob;
