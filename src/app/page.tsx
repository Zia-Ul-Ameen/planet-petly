import Hero from "@/components/Hero";
import BrandingBanner from "@/components/BrandingBanner";
import ProductComingSoon from "@/components/ProductComingSoon";
import PremiumShopBanner from "@/components/PremiumShopBanner";
import FeatureHighlight from "@/components/FeatureHighlight";
import Overview from "@/components/Overview";
import FAQ from "@/components/FAQ";
import Reviews from "@/components/Reviews";
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
      <BrandingBanner />
      <ProductComingSoon />
      <PremiumShopBanner />
      <FeatureHighlight />
      {/* <Overview /> */}
      <About />
      {/* <Reviews /> */}
      <FAQ />
      <Contact />
      <Footer />
      <KickstarterModal />
    </main>
  );
}
