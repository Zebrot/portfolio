import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import Link from "next/link";
import Hero from "./_components/Hero";
import Header from "./_components/Header";
import Section from "./_components/Section";
import ProjectCard from "./_components/ProjectCard";
import About from "./_components/About";
import Contact from "./_components/Contact";
import Services from "./_components/Services";

const POSTS_QUERY = `*[
  _type == "project"
  && defined(slug.current)
]|order(order asc)[0...3]`;

const options = { next: { revalidate: 30 } };
export default async function IndexPage() {
  const projects = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);
  return (
    <>
      <Hero />
      <Header />

      <Section id='about'>
        <About />
      </Section>

      <Section id='services'>
        <Services />
      </Section>
      
      <Section id='portfolio'>
        {projects.map((project, index) => (
          <ProjectCard  project={project} key={index} from="main" />
        ))}
        <Link className="block w-full text-foreground text-right hover:underline" href='/projects'><h2>En voir +</h2></Link>
      </Section>


      <Section id='contact'>
        <Contact/>
      </Section>
    </>
  );
}