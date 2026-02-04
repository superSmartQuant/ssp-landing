import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import About from "@/components/About";
import Approach from "@/components/Approach";
import UseCases from "@/components/UseCases";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Services />
        <About />
        <Approach />
        <UseCases />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
