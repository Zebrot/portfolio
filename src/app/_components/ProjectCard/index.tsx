import Image from "next/image"
import Link from "next/link"
import {type SanityDocument} from 'next-sanity';
import getImageUrl from "@/utils/getImageUrl";

export default function ProjectCard({project, from, small} : {project : SanityDocument, from?: string, small?:boolean, delay?: number}){
    const imgHeight = small ? 800 : 500
    const imageUrl = project.thumbnail
        ? getImageUrl(project.thumbnail)?.width(1240).height(imgHeight).url()
        : null;

    return (
        <article className={`${small ? 'my-5' : 'my-20 max-lg:my-15'} w-full mx-auto flex flex-col align-center `}>
            
                <div className={`border-2 border-foreground/10 hover:border-none rounded-4xl overflow-hidden ${small ? 'h-[300px] max-lg:h-[250px] max-md:h-[100px]' : 'h-[500px] max-lg:h-[300px] max-md:h-[200px]' } relative group`}>
                    <Link href={`/project/${project.slug.current}/?from=${from}`}>
                        <Image fill src={imageUrl?? '/default.png'} alt={project.title} className="transition duration-200 group-hover:scale-105"/>
                        <div className={`opacity-0 group-hover:opacity-90 transition duration-200 absolute 
                            top-0 left-0 ${small ? 'text-[20px]' : 'text-[30px]'} text-(--background) bg-(--foreground)
                            h-full w-full text-center`}>
                            <p className={`relative top-[40%] translate-y-[-50%] px-3`}>
                                {project.description}
                            </p>
                            <button className="cursor-pointer underline-offset-8 decoration-1 absolute right-20 bottom-10 underline"> En savoir +</button>
                        </div>
                    </Link>

                </div>
                <div className="flex max-lg:flex-col justify-between w-full pt-1 gap-3">
                    <div>
                        <h2 className={`${small && '!text-[16px]'} tracking-[10px] max-lg:text-center`}>{project.title} </h2>
                        <h3 className={`max-lg:hidden ${small && '!text-[16px]'} text-[24px] opacity-60`}> {project.subtitle} </h3>
                    </div>
                    <div className={`max-lg:hidden text-right ${small ? 'text-[16px]' : 'text-[20px]'}`}>
                        <p> {project.tools} </p>
                        <p className="text-lightgrey"> {project.date} </p>
                    </div>
                </div>
        </article>
    )
}