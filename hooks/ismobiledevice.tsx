import { useState, useEffect } from 'react';

function IsMobileDevice() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Function to update the state based on the screen width
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        
        // Set the initial value
        handleResize();
        
        // Add event listener
        window.addEventListener('resize', handleResize);
        
        // Remove event listener on cleanup
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return isMobile;
}
  
export default IsMobileDevice;
