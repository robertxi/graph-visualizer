import { useLayoutEffect, useState } from 'react';

// function useWindowResize(callback) {
//   useLayoutEffect(() => {
//     function executeCallback() {
//       callback ? callback() : void 0;
//     }
//     window.addEventListener('resize', executeCallback);
//     executeCallback();
//     return () => window.removeEventListener('resize', executeCallback);
//   });
// }

function useWindowResize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}
export default useWindowResize