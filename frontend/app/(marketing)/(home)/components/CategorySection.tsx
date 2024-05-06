import CategoryCard from "@/app/common/CategoryCard";

const CategorySection = () => {
  return (
    <section className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
    </section>
  );
};

export default CategorySection;
