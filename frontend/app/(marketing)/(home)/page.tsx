import CategorySection from "./components/CategorySection";
import HomeCarousel from "./components/HomeCarousel";
import NamedField from "./components/NamedField";
import RecommendedProducts from "./components/RecommendedProducts";

export default function Home() {
  return (
    <div className="grid gap-16">
      <HomeCarousel />
      <CategorySection />
      <NamedField label="recommended">
        <RecommendedProducts />
      </NamedField>
      <NamedField label="hot deals">
        <RecommendedProducts />
      </NamedField>
    </div>
  );
}
