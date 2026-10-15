import { Hero } from "@/components/home/Hero";
import { Introduction } from "@/components/home/Introduction";
import { SelectedWork } from "@/components/home/SelectedWork";
import { Experience } from "@/components/home/Experience";
import { Education } from "@/components/home/Education";
import { About } from "@/components/home/About";
import { Skills } from "@/components/home/Skills";
import { Contact } from "@/components/home/Contact";

/**
 * Homepage order: hero → compact focus strip → selected work (evidence first)
 * → experience → education → about → skills → contact.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <Introduction />
      <SelectedWork />
      <Experience />
      <Education />
      <About />
      <Skills />
      <Contact />
    </>
  );
}
