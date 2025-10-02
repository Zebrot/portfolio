import Link from "next/link"

export default function NotFound() {
  return(
    <div className="container mx-auto max-w-3xl py-8 flex flex-col gap-10 rounded-lg">      
      <span className="text-[224px] tracking-[15px] text-center">404</span>
      <Link href='/' className="text-center text-[24px] hover:underline">on dirait que vous êtes perdu... Cliquez ici pour retrouver votre chemin</Link>
    </div>

  )
}
