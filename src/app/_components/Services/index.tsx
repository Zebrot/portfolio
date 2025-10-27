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
        description : "Chaque projet mérite une solution unique. Je créé un site entièrement personnalisé pour vous et votre activité. Et si vous partez de zéro, je vous aide à développer une identité de marque."
    },    
    {
        title : 'Solutions Web Évolutives',
        logo : '/svg/coding.svg',
        description : "Plus qu'un simple site vitrine. Je développe des plateformes complètes pour simplifier et automatiser votre quotidien : gestion de stocks, espaces clients personnalisés, systèmes de réservation... Aussi facile d'utilisation pour vos clients que pour vous !"
    },    
    {
        title : 'Optimisation et SEO',
        logo : '/svg/repair.svg',
        description : "Parce que le Web est pour tout le monde, je créé des sites utilisables par tous. Que ce soit un ordinateur dernier cri ou un petit smartphone, votre site se charge rapidement. En plus, vous apparaissez dans les premiers résultats des moteurs de recherche !"
    },    
    {
        title : 'Maintenance & Accompagnement',
        logo : '/svg/talking.svg',
        description : "Je vous accompagne dans toutes les étapes du projet : définition de vos besoins, information sur l'évolution du projet, et maintenance après livraison. Vous restez maître de votre projet du début à la fin, et je vous accompagne pour créer le site dont vous avez toujours rêvé !"
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