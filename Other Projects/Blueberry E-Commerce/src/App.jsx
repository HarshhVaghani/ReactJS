import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import CategorySection from "./component/CategorySection";
import ProductGrid from "./component/ProductGrid";
import PromoBanners from "./component/PromoBanner";
import NewArrivals from "./component/NewArrivals";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <CategorySection />
        <ProductGrid />
        <PromoBanners />
        <NewArrivals />
      {/* Future sections go here */}
    </div>
  );
}

export default App;