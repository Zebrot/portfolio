
type sectionProps = {
    id : string,
    isActive? : boolean,
    children? : React.ReactNode
}

const titles: Record<string, string> = {
  'about' : "about me",
  'portfolio': "projects",
};

export default function Section({id, isActive, children} : sectionProps) {
    const title = titles[id] ?? id;
    return (
        <section className='min-h-screen scroll-mt-30 my-80' id={id}>
            <h2 className="text-center tracking-[15px]">{title}</h2>
            {children}
        </section>
    )
}