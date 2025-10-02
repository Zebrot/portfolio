'use client'
import { useState } from "react"
import Image from "next/image";

export default function Scrolldown({children, title} : {title? : string, children? : React.ReactNode} ) {

    const [isOpen, setOpen] = useState(false);
    return (
        <div className={`
            group relative py-5 px-10 rounded-md mb-3 cursor-pointer shadow-sm
            ${isOpen &&  'bg-(--foreground) text-(--background)' }
            ${!isOpen &&  'transition-colors delay-600 duration-200' }
            `}
            onClick={()=> setOpen(!isOpen)}
        >
            <div className={`flex align-center transition-opacity duration-400 ${'group-hover:opacity-50'} `}>
                <Image src={`${isOpen ? '/svg/minus.svg' : '/svg/plus.svg'}`} alt='' width={33} height={33} className="absolute left-1 top-6" />
                <h2 className="mb-3">{title}</h2>
            </div>
            <div className={`
                overflow-hidden text-[20px]
                ${isOpen && 'max-h-[700px] opacity-100 [transition-property:opacity,max-height] [transition-duration:200ms,600ms] [transition-delay:400ms,200ms]'} 
                ${!isOpen && 'max-h-[0px] opacity-0 [transition-property:opacity,max-height] [transition-duration:200ms,500ms] [transition-delay:0ms, 100ms]'} 
            `}>
                {children}
            </div>
        </div>
    )
}