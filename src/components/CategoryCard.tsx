import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

interface CategoryCardProps {
  title: string;
  image: string;
  link: string;
  count?: number;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  title,
  image,
  link,
  count
}) => {
  return (
    <Link to={link}>
      <Card className="overflow-hidden transition-all hover:shadow-md group">
        <div className="relative aspect-square overflow-hidden bg-muted">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="object-cover w-full h-full transition-transform group-hover:scale-105"
          />
        </div>
        <CardContent className="p-4">
          <h3 className="font-medium text-lg">{title}</h3>
          {count !== undefined && (
            <p className="text-sm text-muted-foreground">{count} товаров</p>
          )}
        </CardContent>
      </Card>
    </Link>
  );
};

export default CategoryCard;