"use client"

import useIntersectionObserver from '../hooks/useIntersectionObserver';
import '@/styles/aboutme.css'

const Aboutme: React.FC = () => {
    const [isVisibleSection1, refSection1] = useIntersectionObserver();

  
    const section1 = "I started programming at 12 after being inspired by a YouTube video about ATM systems. What seemed like a complex program turned out to be a simple C++ calculator, sparking my journey into tech. Progressing from WordPress to custom web templates, I ventured into web development.";
    const section2 = "At the Military University of Technology (WAT) in Poland, I pursued Cybersecurity but soon realized my passion for web development. Balancing military studies with self-learning, I learned React, Vue, MongoDB, and other web technologies.";
    const section3 = "Though I left WAT to focus on my web development career, the journey continues. Today, I'm dedicated to honing my skills and launching my first public projects.";
  
    return (
      <div className="w-screen  h-[33em] flex flex-col p-4 justify-center items-center min-h-[33em]" id='aboutme' ref={refSection1}>
        <div className=' md:w-[45em]'>
            <div  className={` text-center opacity-0 ${isVisibleSection1 ? 'animate-slide-from-left' : ''}`}>
              {section1}
            </div>
            <div  className={` text-center opacity-0 ${isVisibleSection1 ? 'animate-slide-from-right' : ''}`}>
              {section2}
            </div>
            <div className={` text-center opacity-0 ${isVisibleSection1 ? 'animate-slide-from-left' : ''}`}>
              {section3}
            </div>
        </div>
        
      </div>
    );
  }
  
  export default Aboutme;