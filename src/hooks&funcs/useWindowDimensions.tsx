import { useState, useEffect } from 'react';

interface IWindowDimensions {
    width: number;
    height: number;
}

function useWindowDimensions(): IWindowDimensions {
    const [windowDimensions, setWindowDimensions] = useState<IWindowDimensions>({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        function handleResize() {
            setWindowDimensions({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return windowDimensions;
}

export default useWindowDimensions;
