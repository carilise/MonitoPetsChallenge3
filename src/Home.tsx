import Headers from "./components/Headers";
import HeroBanner from "./components/pages/HeroBanner";
import "./index.css";
import PetGallery from "./components/pages/PetGallery";
import BannerSection from "./components/pages/BannerSection";
import Product from "./components/pages/Product";
import PetSellers from "./components/pages/PetSeller";
import AdoptionBanner from "./components/pages/AdoptionBanner";
import PetKnowledge from "./components/pages/PetKnowledge";
import Footer from "./components/pages/Footer";

export default function Home() {
  return (
    <>
     {/* section Header  */}
      <Headers />

      {/* section HeroBanner  */}
      <HeroBanner />

      {/* section PetGallery  */}
      <PetGallery />

      {/* section BannerSection  */}
      <BannerSection />

      {/* section BannerSection  */}
      <Product />

      {/* section PetSellers  */}
      <PetSellers />

      {/* section AdoptionBanner  */}
      <AdoptionBanner />

      {/* section PetKnowledge  */}
      <PetKnowledge />

      {/* section PetKnowledge  */}
      <Footer />   
    </>
  );
}
