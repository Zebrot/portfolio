import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import Link from "next/link";
import Header from "./_components/Header";
import Section from "./_components/Section";
import ProjectCard from "./_components/ProjectCard";
import dynamic from "next/dynamic";

const Hero = dynamic(()=> import("./_components/Hero"));
const About = dynamic(()=> import("./_components/About"));
const Services = dynamic(()=> import("./_components/Services"));
const Contact = dynamic(()=> import("./_components/Contact"));

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
      
      <Section id='portfolio'>
        {projects.map((project, index) => (
          <ProjectCard  project={project} key={index} from="main" />
        ))}
        <Link className="block w-full text-foreground text-right hover:underline" href='/projects'><h2>En voir +</h2></Link>
      </Section>

      <Section id='services'>
        <Services />
      </Section>

      <Section id='contact'>
        <Contact/>
      </Section>
    </>
  );
}