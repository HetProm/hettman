// hooks/useIntersectionObserver.js

import { useState, useEffect, useRef } from 'react';

function useIntersectionObserver() {
    const [isVisible, setIsVisible] = useState(false);
    const [wasVisible, setWasVisible] = useState(false);
    const elementRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const [entry] = entries;
            if (entry.isIntersecting && !wasVisible) {
                setIsVisible(true);
                setWasVisible(true);
                if (elementRef.current) {
                    observer.unobserve(elementRef.current);
                }
            }
        }, { threshold: 0.2 });

        const currentElement = elementRef.current;
        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, [wasVisible]);

    return [isVisible, elementRef] as const;
}
export default useIntersectionObserver;
