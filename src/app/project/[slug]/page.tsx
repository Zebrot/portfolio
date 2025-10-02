import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import Link from "next/link";
import Image from "next/image";
import Scrolldown from "@/app/_components/Scrolldown";
import getImageUrl from '@/utils/getImageUrl'
import { notFound } from "next/navigation";

const PROJECTS_QUERY = `*[
  _type == "project"
  && defined(slug.current)
]|order(order asc)[0...12]{"slug" : slug.current}`;

const SINGLE_QUERY = `*[_type == "project" && slug.current == $slug][0]`;
const options = { next: { revalidate: 30 } };


export async function generateStaticParams() {
  const projectSlugs = await client.fetch<SanityDocument[]>(PROJECTS_QUERY);
  return projectSlugs.map((project) => (
    {slug : project.slug}
  ))

}


export default async function Single({
  params,
  searchParams
}: {
  params: Promise<{ slug : string }>,
  searchParams : Promise<{ from : string}>,
}) {

  const project = await client.fetch<SanityDocument>(SINGLE_QUERY, await params, options);
  if(!project) {
    notFound();
  }
  const photo = project.main ?? project.thumbnail ?? ''
  const imageUrl = project.thumbnail
    ? getImageUrl(photo)?.width(1240).height(700).url()
    : null;
  const {from} = await searchParams;
  const backHref = (from=='undefined' || from == 'main') ? '/#portfolio' : from;

  return (
    <div className="container mx-auto min-h-screen max-w-3xl py-8 flex flex-col gap-10 rounded-lg">
      <Link href={backHref} className="text-2xl font-bold my-5 w-fit hover:underline">
        <h2>← retour</h2>
      </Link>
      <div>
        <h1 className="font-bold tracking-[10px]">{project.title}</h1>
        <p className="text-(--lightgrey) my-0 text-[30px]" >{project.subtitle}</p>
      </div>
      <div>
        <div className={`rounded-4xl overflow-hidden w-full h-[700px] max-lg:h-[600px] max-md:h-[300px] relative group mb-3`}>
          <Link href={project.link ?? ''} className={`${!project.link && 'cursor-default'} `}>
              <Image src={imageUrl?? '/default.png'} alt={project.title} width={1240} height={1240} 
                className={`min-h-full min-w-full transition duration-200 ${project.link && 'group-hover:scale-105 group-hover:blur-sm'}`}
              />
              <div className={` opacity-0 ${project.link && 'group-hover:opacity-100'} transition duration-200 absolute 
                  top-0 left-0 text-[34px] text-(--background)
                  h-full w-full text-center pt-70`}>
                  <p className="rounded-xl bg-(--foreground) w-fit p-15 mx-auto tracking-[15px] underline-offset-8 decoration-2 underline text(--background) flex justify-center gap-3">
                      Visiter le site
                      <Image src='/svg/outsideLink.svg' height={20} width={20} alt=""/>
                  </p>
              </div>
          </Link>
        </div>
        <div className="flex justify-between gap-5">
          <p className="prose text-[24px] flex-2">
            {project.description}
          </p>
          <div className="flex-1 flex justify-end"> 
            <div className="h-fit rounded-2xl bg-(--foreground) text-right max-lg:px-2  px-8 py-2 w-fit shadow-xs/30">
              <p className="text-(--background) ]">{project.tools}</p>
              <p className="text-(--lightgrey) my-0 " >{project.date}</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        {project.highlights?.map((highlight : {title : string, content : string}, index : number) => (
          <Scrolldown key={index} title={highlight.title}>
            {highlight.content}
          </Scrolldown>
        ))}
      </div>
    </div>
  );
}