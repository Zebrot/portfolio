'use client'

import Link from "next/link"
import { useActiveSection } from "@/utils/activeSection"
import { useState, useEffect } from "react";


export default function Header(){
    const sectionIds = ["about", "services", "portfolio",  "contact"];
    const [isVisible, setIsVisible] = useState(false);
    const activeId = useActiveSection(sectionIds);


    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const controlNavbar = () => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY && currentScrollY > 80) {
            setIsVisible(false);
        } else {
            setIsVisible(true);
        }
        setLastScrollY(currentScrollY);
        };
        window.addEventListener('scroll', controlNavbar);

        return () => {
        window.removeEventListener('scroll', controlNavbar);
        };
    }, [lastScrollY]);

    return (
        <nav className={`max-lg:px-1 w-full z-2 py-5 sticky transition-top duration-300 ${isVisible ? 'top-0' : 'top-0 max-lg:-top-50' } flex justify-between text-lightgrey bg-background`}>
            {sectionIds.map((section, index) => (
                <Link href={`#${section}`} key={index}> 
                    <h2 style={{ animationDelay: `${index * 0.5}s !important` }} className={`opacity-0 animate-fadeIn transition duration-200  hover:text-foreground cursor-pointer ${activeId == section && 'text-foreground' }`}> {section} </h2> 
                </Link>
            ))}
        </nav>
    )
}