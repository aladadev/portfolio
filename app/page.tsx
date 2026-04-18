import { About } from '@/components/sections/About';
import { Contact } from '@/components/sections/Contact';
import { Gallery } from '@/components/sections/Gallery';
import { Hero } from '@/components/sections/Hero';
import { Projects } from '@/components/sections/Projects';
import { Skills } from '@/components/sections/Skills';

interface HomePageProps {}

// This file renders the home page by composing the major homepage sections.
// WHY: Keeping the page lean makes the route easy to scan while the actual UI logic lives in reusable section components.
export default function HomePage({}: HomePageProps): JSX.Element {
  return (
    <>
      <Hero />
      <Projects featuredOnly />
      <Gallery />
      <Skills />
      <About />
      <Contact variant="teaser" />
    </>
  );
}
