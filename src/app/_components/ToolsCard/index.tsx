import Image from "next/image";

type tool = {
    name : string,
    image : string
}
type cardProps = {
    title? : string,
    tools : tool[],
    index : number
}

export default function ToolsCard({title, tools, index} : cardProps) {
    return (
        <div className={`w-[900px] max-lg:w-[90%] h-[280px] max-md:h-[100px] max-lg:h-[200px] bg-opacityGrey text-background rounded-2xl max-lg:p-1 p-3 ${index % 2 != 0 && 'self-end'} shadow-md/40`}>
            <h4 className={`tracking-[25px] max-lg:tracking-[10px] text-lightgrey max-lg:mb-2 mb-8 ${index % 2 != 0 && 'text-right'}`}>{title}</h4>
            <div className="flex gap-5 max-md:gap-1 h-[70%] max-md:px-1 px-10">
                {tools.map((tool, index)=> (
                    <div key={index} className="flex-1 flex flex-col relative group">
                        <div className="relative h-full mb-3 max-md:mb-1 group-hover:scale-105 transition duration-100">
                            <Image src={tool.image} alt={tool.name} fill/>
                        </div>
                        <p className="text-center max-lg:opacity-100 opacity-10 transition duration-200 group-hover:opacity-100">{tool.name}</p>
                    </div>
                ))}        
            </div>
        </div>

    )
}