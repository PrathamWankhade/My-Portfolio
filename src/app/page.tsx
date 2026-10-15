import { Hero } from "@/components/home/Hero";
import { Introduction } from "@/components/home/Introduction";
import { SelectedWork } from "@/components/home/SelectedWork";
import { About } from "@/components/home/About";
import { Experience } from "@/components/home/Experience";
import { Skills } from "@/components/home/Skills";
import { Education } from "@/components/home/Education";
import { Contact } from "@/components/home/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Introduction />
      <SelectedWork />
      <About />
      <Experience />
      <Skills />
      <Education />
      <Contact />
    </>
  );
}
