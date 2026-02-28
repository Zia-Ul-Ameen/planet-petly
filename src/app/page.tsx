import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Overview from "@/components/Overview";
import WholesaleSection from "@/components/WholesaleSection";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Overview />
      <WholesaleSection />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
