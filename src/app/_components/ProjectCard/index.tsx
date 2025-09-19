import Image from "next/image"
import Link from "next/link"
import {PortableText, type SanityDocument} from 'next-sanity';
import getImageUrl from "@/utils/getImageUrl";

export default function ProjectCard({project} : {project : SanityDocument}){
    const imageUrl = project.thumbnail
        ? getImageUrl(project.thumbnail)?.width(1000).height(1000).url()
        : null;
    return (
        <article className="my-20 w-full flex flex-col align-center">
                <div className="rounded-4xl overflow-hidden h-[500px] relative group">
                    <Link href={`/project/${project.slug.current}`}>
                        <Image src={imageUrl?? '/default.png'} alt={project.title} width={1240} height={1240} className="transition duration-200 group-hover:scale-105"/>
                        <div className="opacity-0 group-hover:opacity-90 transition duration-200 absolute 
                            top-0 left-0 text-[30px] text-(--background) bg-(--foreground)
                            h-full w-full text-center pt-30">
                            <p>
                                {project.description}
                            </p>
                            <button className="cursor-pointer underline-offset-8 decoration-1 absolute right-20 bottom-10 underline"> En savoir +</button>
                        </div>
                    </Link>

                </div>
                <div className="flex justify-between items-center w-full pt-1">
                    <h2 className="tracking-[10px]"> {project.title} </h2>
                    <div className="text-right  text-[20px]">
                        <p> {project.tools} </p>
                        <p className="text-lightgrey"> {project.date} </p>
                    </div>
                </div>
        </article>
    )
}