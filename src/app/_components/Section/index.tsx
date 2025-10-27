
type sectionProps = {
    id : string,
    children? : React.ReactNode
}

const titles: Record<string, string> = {
  'about' : "à propos",
  'portfolio': "mes projets",
};

export default function Section({id, children} : sectionProps) {
    const title = titles[id] ?? id;
    return (
        <section className='scroll-mt-30 max-lg:scroll-mt-10 mt-80 max-lg:mt-45 min-h-30' id={id}>
            <h2 className="text-center tracking-[15px]">{title}</h2>
            {children}
        </section>
    )
}