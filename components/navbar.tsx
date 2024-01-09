"use client"

import React, { useEffect, useState } from "react";
import '../styles/navbar.css'
import { Noto_Sans } from "next/font/google";
import CircleiconMenu from '@/components/svg/circle_navmenu'
import IsMobileDevice from "@/hooks/ismobiledevice";
import Image from "next/image";



const natosans = Noto_Sans({
    subsets: ['latin'],
    weight: '400',
    style: 'normal'
})

type ListItem = {
    title: string,
    id: string
}
const NavBar: React.FC = () => {
    const isMobile = IsMobileDevice()
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const ListofElements: React.FC = () => {
        
        const Elements: ListItem[] = [
            {title: 'Projects', id: 'maincontent'},
            {title: 'Experience', id: 'experience'},
            {title: 'Recomendations' , id: 'recomendations'},
            {title: 'About Me' , id: 'aboutme'}
        ]

        
        
        
        const listElements = Elements.map((element,index) =>
            <div key={index} className=" flex flex-col items-center justify-center fadeIn"  style={{ animationDelay: `${index * 0.3}s` }}>
                
                <li className={`${natosans.className}  text-white text-[1.5rem] md:text-[1.15rem] relative z-[2]`} >
                    <a href={`#${element.id}`}>{element.title}</a>
                    
                </li>
                <CircleiconMenu className=" absolute z-[1]" delay={index * 0.3} />
                
            </div>
            
            )

        return (
            <ul className={` flex flex-col md:flex-row text-center ${ isMobile ? 'space-y-24' : ' space-x-24 '}`}>
                {listElements}
            </ul>
        )
    }
    

    return (
        <div className="h-[5rem]">
             <nav className={`w-full overflow-hidden bg-khPurple transition-height duration-500 ease-in-out absolute z-[2] ${isOpen ? 'h-screen ' : 'h-[5rem] '} md:flex`}>
            <div className=" flex justify-between p-2 md:items-center ">
                <Image src={'/logokh.png'} width={100} height={100} className="ml-2 h-fit" alt="logo" ></Image>
             
                <div className="mr-2 h-fit mt-[0.85em] md:hidden" onClick={toggleMenu}>
                    <img src="/navbarmenubutton.svg" alt="menu button" width={40} />
                </div>

            </div>
          
            <div className={`flex justify-center ${ isMobile ? 'h-[calc(90%-5rem)]' : ''} items-center md:w-full`}>
                {isMobile ? (isOpen && <ListofElements />) : <ListofElements />}
            
            </div>
          
        </nav>
        </div>
       
        )
    }
    

export default NavBar