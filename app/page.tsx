import Hero from "./components/hero";
import Contact from "./components/contact";
import Testimonials from "./components/testimonials";
import Features from "./components/features";
import Footer from "./components/footer";
import About from "./components/about";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-50">
      <Hero />
      <About />
      <Features />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
