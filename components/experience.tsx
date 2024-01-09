"use client"

import { Noto_Sans } from 'next/font/google'
import { ShoppingBagIcon , GlobeEuropeAfricaIcon, CircleStackIcon } from '@heroicons/react/20/solid'
import '@/styles/expirience.css'
import Expirience_element from './expirience_element';
import IsMobileDevice from '@/hooks/ismobiledevice';
const notoSans = Noto_Sans({
    subsets: ['latin']
})

const Expirience: React.FC = () => {
    const isMobile = IsMobileDevice()

    return (
        <div className=" w-screen h-[44em] max-sm:space-y-24  max-sm:pt-12 md:flex md:justify-center md:items-center" id='experience'>   
            <div className='md:mt-[0em] md:flex md:flex-col space-y-24  md:space-y-[12em]'>
                <Expirience_element  
                    title="Wordpress"
                    description="Implementation of various types of websites, e.g., swiezabula.pl, visionmoonlight.pl."
                    icon={<GlobeEuropeAfricaIcon className='h-8 w-8 text-white'/>}
                    alignRight={isMobile ? false : true} />

                <Expirience_element  
                    title="Worthington"
                    description="Wigration of company file database to external storage"
                    icon={<CircleStackIcon className='h-8 w-8 text-white'/>}
                    alignRight={true} />
            </div>

           

            <div className=' bg-gray-800 w-1 h-[25em] hidden md:block'></div>
            <div className=''>
                <Expirience_element  
                    title="sceko"
                    description="Design and implementation of the online store doinstalacji.pl."
                    icon={<ShoppingBagIcon className='h-8 w-8 text-white'/>}
                    alignRight={false} />
            </div>
            
           
        </div>
        
    )
}


export default Expirience