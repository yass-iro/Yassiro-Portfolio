import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import About from "./components/About";
import Contact from "./components/Contact";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-clip bg-ink-950 text-zinc-100">
      <Navbar />
      <main>
        <Hero />
        <Work />
        <Services />
        <Pricing />
        <About />
        <Contact />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
