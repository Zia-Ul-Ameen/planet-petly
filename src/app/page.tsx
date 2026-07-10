import Hero from "@/components/Hero";
import ProductComingSoon from "@/components/ProductComingSoon";
import PremiumShopBanner from "@/components/PremiumShopBanner";
import FeatureHighlight from "@/components/FeatureHighlight";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import About from "@/components/About";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import KickstarterModal from "@/components/KickstarterModal";

export default function HomePage() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <ProductComingSoon />
      <PremiumShopBanner />
      <FeatureHighlight />
      <About />
      <FAQ />
      <Contact />
      <Footer />
      <KickstarterModal />
    </main>
  );
}
