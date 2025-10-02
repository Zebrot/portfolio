import Link from "next/link"

export default function NotFound() {
    return (
        <div className="container mx-auto max-w-3xl py-8 flex flex-col gap-10 rounded-lg">
            <Link href={'/#portfolio'} className="text-2xl font-bold my-5 w-fit hover:underline">
                ← retour
            </Link>
            
            <span className="text-[224px] tracking-[15px] text-center">404</span>
            <p className="text-center text-[24px]">Ce projet n`&apos;`existe pas... encore ?</p>
        </div>
    )
}
