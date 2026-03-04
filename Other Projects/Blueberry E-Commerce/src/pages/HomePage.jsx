import Hero from "../component/Hero";
import CategorySection from "../component/CategorySection";
import ProductGrid from "../component/ProductGrid";
import PromoBanners from "../component/PromoBanner";
import NewArrivals from "../component/NewArrivals";
import VendorsSection from "../component/VendorsSection";
import TestimonialsSection from "../component/TestimonialsSection";
import GallerySection from "../component/GallerySection";
import FooterSection from "../component/FooterSection";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <CategorySection />
      <ProductGrid />
      <PromoBanners />
      <NewArrivals />
      <VendorsSection />
      <TestimonialsSection />
      <GallerySection />
      <FooterSection />
    </div>
  );
}
