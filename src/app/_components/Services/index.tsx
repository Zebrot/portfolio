import Image from "next/image"
type Service = {
    title : string,
    logo?: string,
    description : string,
}

const listOfServices : Service[] = [
    {
        title : 'Création de site Web sur Mesure',
        logo : '/svg/design.svg',
        description : "Chaque projet mérite une solution unique. Je développe un site qui vous ressemble, avec votre vision et selon vos besoins. Un site performant, moderne et 100% adapté à votre activité."
    },    
    {
        title : 'Conception Graphique & Ergonomie',
        logo : '/svg/notes.svg',
        description : "Je vous guide dans la création d'une interface où vos visiteurs se sentent à l'aise : menus clairs, informations bien organisées, design soigné. Et si vous partez de zéro, je crée les maquettes visuelles de votre projet."
    },    
    {
        title : 'Solutions Web Évolutives',
        logo : '/svg/coding.svg',
        description : "Plus qu'un simple site vitrine. Je développe des plateformes complètes et modulables : gestion de stocks, espaces clients personnalisés, systèmes de réservation... Des solutions sur mesure qui automatisent et simplifient votre quotidien."
    },    
    {
        title : 'Refonte & Optimisation',
        logo : '/svg/repair.svg',
        description : "J’optimise votre site sur les plans technique et visuel : vitesse de chargement, responsive design et SEO, pour offrir une expérience plus fluide et mieux référencée."
    },    
    {
        title : "Intégration de fonctionnalités IA",
        logo : '/svg/robot.svg',
        description : "Je vous aide à tirer parti de l’intelligence artificielle en intégrant des solutions simples et concrètes, toujours pensées pour s’intégrer naturellement à votre site et à vos usages"
    },    
    {
        title : 'Maintenance & Accompagnement',
        logo : '/svg/talking.svg',
        description : "Je vous accompagne dans la définition de votre projet web, vous conseille sur les meilleures solutions techniques, puis assure la maintenance et les évolutions de votre site pour qu'il reste performant dans le temps."
    },    
]


export default function Services() {
    return(
        <div className="my-10 p-6 py-11 rounded-md">
            <div className=" grid grid-cols-2 max-md:grid-cols-1 gap-12">
                {listOfServices.map((service, index)=> (
                    <div key={index} 
                    className=
                        {`
                        relative ${index % 2 == 1 && 'max-md:top-0 top-25'}
                        rounded-xl w-full h-full
                        mx-auto p-4 flex flex-col gap-2
                        bg-foreground/10 text-foreground hover:bg-foreground/20 transition duration-200
                        group shadow-lg hover:shadow-2xl`
                        }
                    >
                        <div className="w-full text-foreground/80 bg-background p-4 py-5 rounded-md flex justify-between items-center mx-auto">
                            <h3 className="text-center text-[24px] max-md:text-[20px]">{service.title}</h3>
                            <Image alt={service.title} src={service.logo ?? '/svg/coding.svg'} width={36} height={36}/>
                        </div>
                        <p className="cursor-default flex-1 rounded-md p-3 text-justified text-[20px]">
                            {service.description}
                        </p>
                        
                    </div>
                ))}
            </div>

        </div>
    )
}