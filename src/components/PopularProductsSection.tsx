import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    title: "Гидроцилиндр стрелы DOOSAN 440-00424A",
    image: "/placeholder.svg",
    price: 75800,
    articleNumber: "440-00424A",
    available: true
  },
  {
    id: 2,
    title: "Гусеница в сборе CAT 320 49L",
    image: "/placeholder.svg",
    price: 283400,
    articleNumber: "CAT-320-49L",
    available: true
  },
  {
    id: 3,
    title: "Турбокомпрессор Komatsu PC200-8",
    image: "/placeholder.svg",
    price: 56700,
    articleNumber: "6754-81-8090",
    available: false
  }
];

const PopularProductsSection = () => {
  return (
    <section className="py-12 md:py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Популярные товары</h2>
          <Link to="/catalog">
            <Button variant="outline">Все товары</Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              image={product.image}
              price={product.price}
              articleNumber={product.articleNumber}
              available={product.available}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProductsSection;