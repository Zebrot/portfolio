import ProjectCard from "../_components/ProjectCard"
import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import Link from "next/link";

const POSTS_QUERY = `*[
  _type == "project"
  && defined(slug.current)
]|order(order asc)[0...12]`;
const options = { next: { revalidate: 30 } };
const projects = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

export default async function Projects() {
    return (
        <div className="container mx-auto min-h-screen max-w-3xl py-8 flex flex-col gap-10 rounded-lg">
            <h1 className="text-center text-36px tracking-[15px]">tous les projets</h1>
            <Link href='/#portfolio' className="text-2xl font-bold my-5 w-fit hover:underline">
                <h2>← retour</h2>
            </Link>
            <div className="grid grid-cols-2 gap-8 wrap">

                {projects.map((project,i ) => <ProjectCard small={true} project={project} key={i} from="/projects"/>)}
            </div>
        </div>
    )
}