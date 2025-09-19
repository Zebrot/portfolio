import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import Hero from "./_components/Hero";
import Header from "./_components/Header";
import Section from "./_components/Section";
import ProjectCard from "./_components/ProjectCard";
import About from "./_components/About";
import Contact from "./_components/Contact";

const POSTS_QUERY = `*[
  _type == "project"
  && defined(slug.current)
]|order(publishedAt desc)[0...3]`;

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
          <ProjectCard  project={project} key={index}/>
        ))}
      </Section>

      <Section id='blog'>

      </Section>

      <Section id='contact'>
        <Contact/>
      </Section>
    </>
  );
}