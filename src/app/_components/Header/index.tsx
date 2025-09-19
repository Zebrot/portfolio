'use client'

import Link from "next/link"
import { useActiveSection } from "@/utils/activeSection"

export default function Header(){
    const sectionIds = ["about", "portfolio", "blog", "contact"];
    const activeId = useActiveSection(sectionIds);

    return (
        <nav className="w-full z-2 py-10 sticky top-0 flex justify-between text-(--lightgrey) bg-background">
            {sectionIds.map((section, index) => (
                <Link href={`#${section}`} key={index}> 
                    <h2 className={`transition duration-200 hover:text-(--foreground) cursor-pointer ${activeId == section && 'text-(--foreground)' }`}> {section} </h2> 
                </Link>
            ))}
        </nav>
    )
}