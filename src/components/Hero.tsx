import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Hero = () => {
  return (
    <div className="relative bg-accent py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Запчасти для спецтехники с доставкой по всей России
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Продажа качественных запчастей для экскаваторов, фронтальных погрузчиков и бульдозеров.
            Большой ассортимент и лучшие цены!
          </p>

          {/* Форма поиска */}
          <div className="relative max-w-xl">
            <div className="flex">
              <Input 
                placeholder="Поиск по артикулу или названию" 
                className="rounded-r-none h-12 text-base" 
              />
              <Button className="rounded-l-none h-12">
                <Search className="mr-2 h-5 w-5" />
                Найти
              </Button>
            </div>
            <p className="text-sm mt-2 text-muted-foreground">
              Например: втулка гусеницы, колесо натяжное, гидроцилиндр
            </p>
          </div>
        </div>
      </div>

      {/* Декоративный элемент */}
      <div className="hidden lg:block absolute right-0 bottom-0 w-1/3 h-full">
        <div className="absolute inset-0 bg-gradient-to-l from-primary/10 to-transparent" />
      </div>
    </div>
  );
};

export default Hero;