import Image from "next/image"
import Link from "next/link"

export default function Hero() {
    return (
        <div className="animate-fadeIn flex justify-between h-screen py-40 flex-col text-center relative w-full -mb-60">
            <h1 className="block mx-auto max-md:tracking-[10px] max-lg:tracking-[25px] tracking-[35px] ">
                terrancle.dev
            </h1>
            <div className="w-full h-20 absolute bottom-2 animate-bob">
                <Link href='#about' className="opacity-40 hover:opacity-100 w-full flex justify-center">
                    <Image  src='svg/chevronDown.svg' width={100} height={100} alt="" className="absolute top-0"/>
                </Link>
            </div>
        </div>
    )
}