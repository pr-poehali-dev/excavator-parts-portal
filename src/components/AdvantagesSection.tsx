import { Card, CardContent } from "@/components/ui/card";
import { Package, Truck, Shield, Award } from "lucide-react";

const advantages = [
  {
    icon: <Package className="h-10 w-10 text-primary" />,
    title: "Широкий ассортимент",
    description: "Более 10 000 наименований запчастей для различной спецтехники в наличии и под заказ"
  },
  {
    icon: <Truck className="h-10 w-10 text-primary" />,
    title: "Быстрая доставка",
    description: "Доставляем товары по всей России. Есть самовывоз со склада в Москве"
  },
  {
    icon: <Shield className="h-10 w-10 text-primary" />,
    title: "Гарантия качества",
    description: "Работаем только с проверенными поставщиками. Предоставляем гарантию на все запчасти"
  }
];

const AdvantagesSection = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Почему выбирают нас</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {advantages.map((advantage, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">
                    {advantage.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{advantage.title}</h3>
                  <p className="text-muted-foreground">{advantage.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;