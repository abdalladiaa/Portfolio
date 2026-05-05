import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Expertise from "@/components/Expertise";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default async function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
      <About/>
      <Skills/>
      <Expertise />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
