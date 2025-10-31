import ToolsCard from "../ToolsCard";

const tools = [
  {
    title : 'front',
    tools : [
      {name : 'react', image : '/svg/logos/react.svg'},
      {name : 'tailwind', image : '/svg/logos/tailwind.svg'},
      {name : 'next', image : '/svg/logos/next.svg'},
      {name : 'typescript', image : '/svg/logos/typescript.svg'},
    ]
  },
  {
    title : 'back',
    tools : [
      {name : 'sanity', image : '/svg/logos/sanity.svg'},
      {name : 'expressJs', image : '/svg/logos/express.svg'},
      {name : 'nodeJs', image : '/svg/logos/node.svg'},
      {name : 'mongoDB', image : '/svg/logos/mongodb.svg'},
      {name : 'prisma', image : '/svg/logos/prisma.svg'},
    ]
  },
  {
    title : 'le reste',
    tools : [
      {name : 'figma', image : '/svg/logos/figma.svg'},
      {name : 'github', image : '/svg/logos/githubBlanc.svg'},
      {name : 'claude AI', image : 'svg/logos/claude.svg'},
      {name : 'wordpress', image : '/svg/logos/wordpress.svg'},
      {name : 'PHP', image : '/svg/logos/php.svg'},
    ]
  },
];

export default function About() {
    return (
      <>
        <div className="shadow-sm max-md:py-3 max-md:text-foreground p-8 py-15 rounded-lg bg-ultraLightGrey text-opacityGrey text-center my-15 max-lg:mb-1 flex flex-col gap-5 text-[24px] w-[80%] mx-auto">
          <p>
            Je suis Pierre Terrancle, développeur web passionné par la création d&apos;expériences numériques exceptionnelles
          </p>
          <p>
            Vous êtes un artiste, un artisan indépendant, un designer ? 
          </p>
          <p>
            Je créé votre site, personnalisé, facile d&apos;utilisation, clés en main. 
          </p>

        </div>
          <div className="flex flex-col gap-10 my-20 max-lg:my-5 px-2">
            <h2 className="-mb-5 text-center tracking-[10px] text-opacityGrey my-10">mes outils</h2>
            {tools.map((tool, index) => (
              <ToolsCard title={tool.title} tools={tool.tools} key={index} index={index}/>
            ))}    
          </div>
        </>

    )
}