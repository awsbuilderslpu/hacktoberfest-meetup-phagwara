import Hero from "@/components/Hero";
import About from "@/components/About";
import Event from "@/components/Event";
import Speakers from "@/components/Speakers";
import Participate from "@/components/Participate";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Event />
        <Speakers />
        <Participate />
        <FAQ />
        <Footer />
      </main>
    </>
  );
}