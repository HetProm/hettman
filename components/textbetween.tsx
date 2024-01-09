"use client"
import React, { useRef, useEffect } from 'react';
import { Bebas_Neue } from 'next/font/google';

const bebas = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
});

type TextbetweenProps = {
  title: string;
}

const Textbetween: React.FC<TextbetweenProps> = ({ title }) => {


  return (
    <div  className='w-full h-[5em] flex items-center justify-center relative'>
      <span className={`${bebas.className} text-[63px] front-text relative z-[1] text-[rgba(52,25,72,98%)]`}>{ title }</span>
     
    </div>
  );
}

export default Textbetween;
