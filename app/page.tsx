import Hero from "./components/hero";
import Contact from "./components/contact";
import Testimonials from "./components/testimonials";
import Features from "./components/features";
import Footer from "./components/footer";
import About from "./components/about";
import Projects from "./components/projects";
import Mission from "./components/mission";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-50">
      <Hero />
      <Mission />
      <About />
      <Features />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
