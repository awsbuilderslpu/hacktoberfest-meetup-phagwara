import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Event from "@/components/Event";
import Schedule from "@/components/Schedule";
import Speakers from "@/components/Speakers";
import Participate from "@/components/Participate";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Event />
        <Schedule />
        <Speakers />
        <Participate />
        <FAQ />
        <Footer />
      </main>
    </>
  );
}