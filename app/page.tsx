import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Highlight from "@/components/Highlight/Highlight";
import Services from "@/components/Services/Services";
import Comparison from "@/components/Comparison/Comparison";
import Pricing from "@/components/Pricing/Pricing";
import AppPromo from "@/components/AppPromo/AppPromo";
import Experience from "@/components/Experience/Experience";
import Excellence from "@/components/Excellence/Excellence";
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
        <Pricing />
        <AppPromo />
        <Experience />
        <Excellence />
      </main>
      <Footer />
    </>
  );
}
