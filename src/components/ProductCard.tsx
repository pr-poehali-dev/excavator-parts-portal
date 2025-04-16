import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface ProductCardProps {
  id: number;
  title: string;
  image: string;
  price: number;
  articleNumber: string;
  available: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  title,
  image,
  price,
  articleNumber,
  available
}) => {
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <Link to={`/product/${id}`} className="block flex-shrink-0">
        <div className="aspect-square overflow-hidden bg-muted">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="object-contain w-full h-full p-2"
          />
        </div>
      </Link>
      
      <CardContent className="p-4 flex-grow">
        <div className="text-sm text-muted-foreground mb-1">
          Артикул: {articleNumber}
        </div>
        <Link to={`/product/${id}`}>
          <h3 className="font-medium text-lg line-clamp-2 hover:text-primary transition-colors">
            {title}
          </h3>
        </Link>
        <div className="mt-2 flex items-center">
          <span className={available ? "text-green-600" : "text-gray-400"}>
            {available ? "В наличии" : "Под заказ"}
          </span>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0 mt-auto">
        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
          <div className="text-xl font-bold">{price.toLocaleString()} ₽</div>
          <Button className="w-full md:w-auto" size="sm">
            <ShoppingCart className="h-4 w-4 mr-2" />
            В корзину
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;