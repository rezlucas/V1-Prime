import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Highlight from "@/components/Highlight/Highlight";
import Services from "@/components/Services/Services";
import Comparison from "@/components/Comparison/Comparison";
// Pricing is temporarily hidden (not deleted) — see note below.
// import Pricing from "@/components/Pricing/Pricing";
import AppPromo from "@/components/AppPromo/AppPromo";
import Experience from "@/components/Experience/Experience";
import Excellence from "@/components/Excellence/Excellence";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Highlight />
        <Services />
        <Comparison />
        <Experience />
        <AppPromo />
        {/* <Pricing /> hidden on request — re-add here (and the id="planos"
            anchor links pointing at it) to bring pricing back. */}
        <Excellence />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
