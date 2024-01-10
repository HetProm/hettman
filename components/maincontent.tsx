"use client"
import { Noto_Sans } from 'next/font/google'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid' 
import Image from 'next/image'
import Html from './svg/html'
import '@/styles/maincontent.css'
import IsMobileDevice from '@/hooks/ismobiledevice' 


const notoSans = Noto_Sans({
    subsets: ['latin']
})


const MainContent: React.FC = () => {

    const isMobile = IsMobileDevice()

    
    
    return (
        

        <div className={`w-full h-[41em]  ${notoSans.className} md:flex md:items-center`} id='maincontent'>
            <div className=" w-full md:w-1/2 h-[18.5rem] md:h-full  p-4 grid items-center justify-end md:flex">
                { !isMobile ? <ChevronLeftIcon className='w-10 h-10 text-khsecondaryPurple md:mr-5'/> : ''}
                <Image src={'/proj1.png'} alt='project image'  width={ 5760 } height={3240} className=" rounded-lg h-auto md:w-[40em] shadow-[5px_5px_rgba(52,25,72,_0.4),_10px_10px_rgba(52,25,72,_0.3),_15px_15px_rgba(52,25,72,_0.2),_20px_20px_rgba(52,25,72,_0.1),_25px_25px_rgba(52,25,72,_0.05)]" />
            </div>
            <div className=' md:flex md:flex-col md:w-1/2 md:h-full'>
                <div className=" w-full h-[11rem] md:h-1/2  text-center flex flex-col items-center justify-start  md:justify-end">
                    <span className=" text-[32px] text-khtextPurple">Bitpraca</span>
                    <div className=' flex items-center'>
                        { isMobile ? <ChevronLeftIcon className='w-10 h-10 text-khsecondaryPurple'/> : ''}
                        
                        <p className=" w-[268px] md:w-[350px] text-[16px] text-[rgba(14,5,15,49%)]">A platform enabling efficient searching through thousands of job offers. Available filters include experience levels, technologies, salary ranges, and remote opportunities. It provides clear browsing and easy applications for specific positions.</p>
                        { isMobile ? <ChevronRightIcon className=' w-10 h-10 text-khsecondaryPurple'/> : ''}
                        
                    </div>
                    
                </div>
                <div className=" w-full h-[8rem] md:h-1/2  flex items-center justify-center space-x-8 md:items-start pt-20 md:pt-10 flex-wrap">
                    <div className='flex flex-col items-center'>
                        <div className='w-max overflow-hidden'>
                            <Image src='/icons/html_icon.png' alt='html icon' width={146} height={179} className='h-[3em] opacity-0 w-auto animate-slideUp'></Image>
                        </div>
                        <div className='w-[0px] h-[2px] bg-gray-600 mt-[5px] animate-lineInOut'></div>
                    </div>
                    <div className='flex flex-col items-center'>
                        <div className='w-max overflow-hidden'>
                            <Image src='/icons/css_icon.png' alt='html icon' width={146} height={179} className='h-[3em] opacity-0 w-auto animate-slideUp'></Image>
                        </div>
                        <div className='w-[0px] h-[2px] bg-gray-600 mt-[5px] animate-lineInOut'></div>
                    </div>
                    <div className='flex flex-col items-center'>
                        <div className='w-max overflow-hidden'>
                            <Image src='/icons/javascript_icon.png' alt='html icon' width={146} height={179} className='h-[3em] opacity-0 w-auto animate-slideUp'></Image>
                        </div>
                        <div className='w-[0px] h-[2px] bg-gray-600 mt-[5px] animate-lineInOut'></div>
                    </div>
                    <div className='flex flex-col items-center'>
                        <div className='w-max overflow-hidden'>
                            <Image src='/icons/vue_icon.png' alt='html icon' width={146} height={179} className='h-[3em] opacity-0 w-auto animate-slideUp'></Image>
                        </div>
                        <div className='w-[0px] h-[2px] bg-gray-600 mt-[5px] animate-lineInOut'></div>
                    </div>
                    <div className='flex flex-col items-center'>
                        <div className='w-max overflow-hidden'>
                            <Image src='/icons/nuxt_icon.png' alt='html icon' width={146} height={179} className='h-[3em] opacity-0 w-auto animate-slideUp'></Image>
                        </div>
                        <div className='w-[0px] h-[2px] bg-gray-600 mt-[5px] animate-lineInOut'></div>
                    </div>
                    <div className='flex flex-col items-center'>
                        <div className='w-max overflow-hidden'>
                            <Image src='/icons/tailwindcss_icon.png' alt='html icon' width={146} height={179} className='h-[3em] opacity-0 w-auto animate-slideUp'></Image>
                        </div>
                        <div className='w-[0px] h-[2px] bg-gray-600 mt-[5px] animate-lineInOut'></div>
                    </div>

                    
                
                </div>
                
            </div>
            { !isMobile ? <ChevronRightIcon className=' w-10 h-10 text-khsecondaryPurple mr-10'/> : ''}
            
            
        </div>
        
    )
}


export default MainContent