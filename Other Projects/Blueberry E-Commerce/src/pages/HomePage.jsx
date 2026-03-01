import Hero from "../component/Hero";
import CategorySection from "../component/CategorySection";
import ProductGrid from "../component/ProductGrid";
import PromoBanners from "../component/PromoBanner";
import NewArrivals from "../component/NewArrivals";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <CategorySection />
      <ProductGrid />
      <PromoBanners />
      <NewArrivals />
    </div>
  );
}
