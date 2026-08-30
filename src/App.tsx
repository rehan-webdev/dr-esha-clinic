import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutProgram from "./components/AboutProgram";
import HowItWorks from "./components/HowItWorks";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen md:px-4 md:py-8 lg:px-6">
      <div className="relative mx-auto w-full max-w-[1280px] overflow-hidden bg-cream ring-1 ring-espresso/5 md:rounded-[36px] md:shadow-[0_50px_100px_-45px_rgba(107,81,64,0.45)]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_500px_at_85%_-5%,rgba(229,214,193,0.55),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_420px_at_0%_30%,rgba(229,214,193,0.35),transparent_55%)]" />

        <div className="relative">
          <Navbar />
          <main>
            <Hero />
            <AboutProgram />
            <HowItWorks />
            <Services />
            <Testimonials />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}
