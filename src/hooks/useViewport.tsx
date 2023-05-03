import { useEffect, useState } from 'react';

interface Device {
  isMobile: boolean;
}

const useViewport = (): Device => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = (): void => {
      const { innerWidth } = window;
      setIsMobile(innerWidth <= 482);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return (): void => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return { isMobile };
};

export default useViewport;
