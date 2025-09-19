import ProjectCard from "../_components/ProjectCard"
import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";

const POSTS_QUERY = `*[
  _type == "project"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt, body}`;
const options = { next: { revalidate: 30 } };
const projects = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

export default async function Projects() {
    return (
        <div className="grid grid-cols-2 gap-8 wrap">
            {projects.map((project,i ) => <ProjectCard project={project} key={i} />)}
        </div>
    )
}