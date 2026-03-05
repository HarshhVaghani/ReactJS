import Hero from "../component/Hero";
import CategorySection from "../component/CategorySection";
import ProductGrid from "../component/ProductGrid";
import PromoBanners from "../component/PromoBanner";
import NewArrivals from "../component/NewArrivals";
import VendorsSection from "../component/VendorsSection";
import TestimonialsSection from "../component/TestimonialsSection";
import FooterSection from "../component/FooterSection";
import FarmBlogSection from "../component/FarmBlogSection";

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
      <FarmBlogSection />
      <FooterSection />
    </div>
  );
}
