import Hero from "@/components/Home/Hero/Hero";
import Features from "@/components/Home/Features/Features";
import About from "@/components/Home/About/About";
import Gallery from "@/components/Home/Gallery/Gallery";
import Partners from "@/components/Home/Partners/Partners";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Features />
      <About />
      <Gallery />
      <Partners />
    </main>
  );
}
