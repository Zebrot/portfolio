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
        <meta charSet="UTF-8"/>
        <meta name="description" content="Le portfolio de Pierre Terrancle, développeur Web Freelance à Paris" />
        <meta name="keywords" content="Web developpment, Web, Web Design, Javsascript, Next.js, React, Wordpress, Développeur, Webmaster, Freelance developper, Website creation, Création de site, Front-end, Sanity.io" />
        <meta name="author" content="Pierre Terrancle" />
        <title>terrancle.dev</title>
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
