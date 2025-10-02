'use client'

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const email = 'pi.terrancle@gmail.com'

export default function Contact() {
    const [isSaved, setIsSaved] = useState(false)
    const handleCopy = async () => {
        try {
        await navigator.clipboard.writeText(email);
        setIsSaved(true);
        setTimeout(() => setIsSaved(false), 1000); // 
        } catch (err) {
        console.error("Failed to copy: ", err);
        }
    };

    return (
        <div className="my-20">
            <h2 className=" text-center">Créons quelque chose d'exceptionnel ensemble !</h2>
            <div className="mt-10 flex max-lg:flex-col gap-10 px-5 items-center">
                <div className="w-90 h-90  max-md:w-60 max-md:h-60  rounded-full relative overflow-hidden shadow-2xl">
                    <div className={`w-140 h-90 max-md:w-110 max-md:h-60  absolute top-[52%] left-[53%] translate-x-[-50%] translate-y-[-50%] flex align-center items-center`}>
                        <Image src='/photo.jpg' alt="Une photo de moi" width={1200} height={1200}/>
                    </div>
                </div>

                <div className="max-lg:w-full shadow-lg flex-2 bg-foreground/10 p-4 rounded-xl text-[24px] flex flex-col gap-3">

                    <span className="flex max-lg:flex-col max-lg:gap-1 gap-10 gap-10 items-center">
                        <h2 className="relative">
                            Contactez-moi par mail :
                        </h2>
                        <span  onClick={handleCopy} className={`max-md:text-[16px] w-[60%] max-lg:w-full justify-between p-2 rounded-md cursor-pointer hover:bg-foreground/30  flex ${isSaved && 'text-green'}`}>
                            {`${isSaved ? 'copié dans le presse-papier' : email}`}
                            <Image width={20} height={20} alt="" src={`${isSaved ? '/svg/saved.svg' : '/svg/saveBlue.svg'}`}/>
                        </span>
                    </span>

                    <div className="flex gap-5 max-lg:gap-2 items-center text-foreground/60">
                        <h2>Ou sur les réseaux : </h2>
                        <Link className="transition flex gap-5 items-center" href='https://linkedin.com/in/pierre-terrancle' target="_blank" rel="noopener noreferrer">
                            <Image className="hover:scale-110 duration-100 transition" src='/svg/logos/linkedin.svg' width={80} height={80} alt="linkedin"/>
                        </Link>
                        <Link className="flex items-center gap-5" href='https://github.com/zebrot' target="_blank" rel="noopener noreferrer">
                            <Image className='hover:scale-110  duration-100 transition' src='/svg/logos/github.svg' width={60} height={60} alt="github"/>
                        </Link>

                    </div>



                </div>
               
            </div>
        </div>
        
    )
}