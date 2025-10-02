import Footer from "./_components/Footer"
import './globals.css'
import { Reem_Kufi } from 'next/font/google';
import Schema from "./_components/Schema";

const Kufi = Reem_Kufi({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-kufi'
})




export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className= {`${Kufi.variable}`}>
      <head>
        <Schema />
      </head>
      <body>
        <main className="container max-w-3xl">
            {children}
        </main>
        
        <Footer />
      </body>
    </html>
  )
}
