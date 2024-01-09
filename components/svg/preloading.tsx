"use client"


import React, { useState, useEffect } from 'react';
import '@/styles/preloading.css'


const PreloadingScreen: React.FC = () => {

    const [shouldRender, setShouldRender] = useState(true)
    const [fadeOut, setFadeOut] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setFadeOut(true)
        }, 3000)

        const removeRenderTimer = setTimeout(() => {
            setShouldRender(false)
        }, 5000)

        return () => {
            clearTimeout(timer)
            clearTimeout(removeRenderTimer)
        }
    }, [])

    if (!shouldRender) {
        return null;
    }

    return (
        <div className={` absolute w-screen h-screen z-[3] flex items-center justify-center bg-khPurple ${fadeOut ? 'fade-out' : ''} `}>
            <div className=' absolute  -translate-x-14 z-[2] flex'>
                <h1 style={{ fontFamily: "Noto Sans, sans-serif", fontWeight: 700, color: "#fff", fontSize: "40px" }} className='hide-text-animation'>
                    Krystian<br />
                    Hettman
                </h1>

            </div>
            <div className=' absolute z-[1] translate-x-16 move-rotate-animation'>
            <svg id="Icon" xmlns="http://www.w3.org/2000/svg" width="217" height="217" viewBox="0 0 217 217">
                <rect id="Area" width="217" height="217" fill="#fcfcfc" opacity="0" className="svg-elem-1"></rect>
                <g id="Icon-2" data-name="Icon" transform="translate(17.169 32.564)">
                    <path id="_2c653ac4-eed6-4fd2-876d-2d8daedcc70d" data-name="2c653ac4-eed6-4fd2-876d-2d8daedcc70d" d="M0,0H217V217H0Z" transform="translate(-17.169 -32.564)" fill="rgba(0,0,0,0)" className="svg-elem-2"></path>
                    <path id="_013f2d14-6820-41ef-90dc-becec2088763" data-name="013f2d14-6820-41ef-90dc-becec2088763" d="M77.4,33.364a81.373,81.373,0,0,0-26.4,17.631" transform="translate(-17.169 -32.564)" fill="rgba(0,0,0,0)" stroke="#341948" strokeLinecap="round" strokeLinejoin="round" strokeWidth="18.083" className="svg-elem-3"></path>
                    <path id="_20fc4e13-0c77-47b1-8d41-69a409b4d79d" data-name="20fc4e13-0c77-47b1-8d41-69a409b4d79d" d="M33.364,77.4a81.369,81.369,0,0,0-6.239,31.1" transform="translate(-17.169 -32.564)" fill="rgba(0,0,0,0)" stroke="#341948" strokeLinecap="round" strokeLinejoin="round" strokeWidth="18.083" className="svg-elem-4"></path>
                    <path id="c0237593-22a8-4e9d-a417-909a68b56a49" d="M33.364,139.6a81.373,81.373,0,0,0,17.631,26.4" transform="translate(-17.169 -32.564)" fill="rgba(0,0,0,0)" stroke="#341948" strokeLinecap="round" strokeLinejoin="round" strokeWidth="18.083" className="svg-elem-5"></path>
                    <path id="_1da060cf-77e9-46b2-8902-1875d61b667d" data-name="1da060cf-77e9-46b2-8902-1875d61b667d" d="M77.4,183.636a81.369,81.369,0,0,0,31.1,6.239" transform="translate(-17.169 -32.564)" fill="rgba(0,0,0,0)" stroke="#341948" strokeLinecap="round" strokeLinejoin="round" strokeWidth="18.083" className="svg-elem-6"></path>
                    <path id="_0d437364-7663-4864-b2b0-fae4e38d90d1" data-name="0d437364-7663-4864-b2b0-fae4e38d90d1" d="M139.6,183.636a81.373,81.373,0,0,0,26.4-17.631" transform="translate(-17.169 -32.564)" fill="rgba(0,0,0,0)" stroke="#341948" strokeLinecap="round" strokeLinejoin="round" strokeWidth="18.083" className="svg-elem-7"></path>
                    <path id="_298f5399-3fac-419d-a86c-6c9695d49473" data-name="298f5399-3fac-419d-a86c-6c9695d49473" d="M183.636,139.6a81.369,81.369,0,0,0,6.239-31.1" transform="translate(-17.169 -32.564)" fill="rgba(0,0,0,0)" stroke="#341948" strokeLinecap="round" strokeLinejoin="round" strokeWidth="18.083" className="svg-elem-8"></path>
                    <path id="_1c3a43dd-618b-4e0a-851b-85c5959b5bec" data-name="1c3a43dd-618b-4e0a-851b-85c5959b5bec" d="M183.636,77.4a81.373,81.373,0,0,0-17.631-26.4" transform="translate(-17.169 -32.564)" fill="rgba(0,0,0,0)" stroke="#341948" strokeLinecap="round" strokeLinejoin="round" strokeWidth="18.083" className="svg-elem-9"></path>
                    <path id="_0c5f4651-7d7d-4d12-a1fc-409aeecf8424" data-name="0c5f4651-7d7d-4d12-a1fc-409aeecf8424" d="M139.6,33.364a81.369,81.369,0,0,0-31.1-6.239" transform="translate(-17.169 -32.564)" fill="rgba(0,0,0,0)" stroke="#341948" strokeLinecap="round" strokeLinejoin="round" strokeWidth="18.083" className="svg-elem-10"></path>
                </g>
                </svg>
            </div>
            

        </div>

    )
}

export default PreloadingScreen