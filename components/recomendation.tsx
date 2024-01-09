"use client"

import Image from "next/image";

const Recommendation: React.FC = () => {
    const openPdf = (path: string) => {
        const pdfPath = path;
        window.open(pdfPath, '_blank');
    };

    return (
        <div className="w-screen h-[27em] flex flex-col p-10 items-center justify-around md:flex-row" id="recomendations">
            <div className="flex flex-col items-center space-y-12">
                <Image width={1920} height={1080} src={'/worthington-enterprises-logo.png'} alt="" className="h-auto w-[25em] brightness-0" />
                <button type="button" className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-khtextPurple to-khsecondaryPurple hover:text-white" onClick={() => openPdf('/recomendations/worthington.pdf')}>
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-slate-100 rounded-md group-hover:bg-opacity-0">
                        View
                    </span>
                </button>
            </div>
            
            <Image width={238} height={97} src={'/sceko-logo.png'} alt="" />
        </div>
    );
};

export default Recommendation;
