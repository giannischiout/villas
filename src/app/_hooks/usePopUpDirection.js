import { useRef, useState, useEffect } from 'react';

const usePopupDirection = (ref, show) => {
  const [direction, setDirection] = useState('down');

  useEffect(() => {
    const calculateDirection = () => {
      const element = ref.current;
      if (element) {
        const { top, bottom } = element.getBoundingClientRect();
        const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

        const spaceAtTop = top;
        console.log('spaceAtTop', spaceAtTop)
        const spaceAtBottom = viewportHeight - bottom;
        console.log('spaceAtBottom', spaceAtBottom)
        console.log('element.offsetHeight', element.offsetHeight)
        if (spaceAtBottom >= spaceAtTop) {
          setDirection('down');
        } else {
          setDirection('up');
        }
      }
    };

  
    const resizeObserver = new ResizeObserver(calculateDirection);

    if (show) {
      calculateDirection();
      resizeObserver.observe(ref.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, [show, ref]);

  return direction;
};

export default usePopupDirection;