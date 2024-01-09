import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { Noto_Sans } from 'next/font/google'

const notoSans = Noto_Sans({
    subsets: ['latin']
})

interface Expirience_element_props {
    title: string;
    description: string;
    icon: React.ReactNode; 
    alignRight: boolean;
  }

const Expirience_element: React.FC<Expirience_element_props> = ({ title, description, icon, alignRight = false  }) => {
  const [isVisible, elementRef] = useIntersectionObserver();

  const containerClasses = `flex items-start ${alignRight ? 'flex-row-reverse' : ''}`;
  const textContainerClasses = `flex flex-col ${alignRight ? 'text-right items-end mr-4' : 'ml-4'}`;
  const textAnimationClass = `opacity-0 ${isVisible ? (alignRight ? 'animate-slide-from-right' : 'animate-slide-from-left') : ''}`;
  const lineAnimationClass = `bg-gray-800 h-[3px] w-[0em] ${isVisible ? 'animation_line_expirience' : ''}`;
  const iconAnimationClass = `relative flex h-[3.5em] w-[3.5em] justify-center items-center scale-0 top-[1.4em] ${isVisible ? 'animate-scaleUp' : ''}`;

  return (
    <div ref={elementRef} className={containerClasses}>
      <div className={textContainerClasses}>
        <span className={`${notoSans.className} text-[32px] text-khtextPurple ${textAnimationClass}`}>{title}</span>
        <div className={lineAnimationClass}></div>
        <p className={`w-[15em] text-[rgba(14,5,15,49%)] text-[16px] mt-2 ${textAnimationClass}`}>{description}</p>
      </div>

      <div className={iconAnimationClass}>
        <span className="absolute inline-flex h-[4.5em] w-[4.5em] rounded-full bg-white "></span>
        <div className="relative inline-flex rounded-full h-[3.5em] w-[3.5em] bg-khtextPurple items-center justify-center">
          {icon}
        </div>
      </div>
    </div>
  );
};

export default Expirience_element;
