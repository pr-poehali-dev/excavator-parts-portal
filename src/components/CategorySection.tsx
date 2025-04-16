import { Button } from "@/components/ui/button";
import CategoryCard from "@/components/CategoryCard";
import { Link } from "react-router-dom";

const categories = [
  {
    id: 1,
    title: "Запчасти для экскаваторов",
    image: "/placeholder.svg",
    link: "/catalog/excavators",
    count: 1250
  },
  {
    id: 2,
    title: "Запчасти для погрузчиков",
    image: "/placeholder.svg",
    link: "/catalog/loaders",
    count: 870
  },
  {
    id: 3,
    title: "Запчасти для бульдозеров",
    image: "/placeholder.svg",
    link: "/catalog/bulldozers",
    count: 650
  }
];

const CategorySection = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Категории техники</h2>
          <Link to="/categories">
            <Button variant="outline">Все категории</Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              title={category.title}
              image={category.image}
              link={category.link}
              count={category.count}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;