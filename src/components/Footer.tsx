import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Информация о компании */}
          <div>
            <h3 className="text-lg font-bold mb-4">СпецЗапчасти</h3>
            <p className="text-muted-foreground mb-4">
              Надежный поставщик запчастей для экскаваторов, 
              фронтальных погрузчиков и бульдозеров.
            </p>
            <div className="flex flex-col space-y-3">
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-primary" />
                <span>+7 (800) 555-35-35</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-primary" />
                <span>info@speczapchasti.ru</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                <span>г. Москва, ул. Промышленная, 23</span>
              </div>
            </div>
          </div>

          {/* Навигация */}
          <div>
            <h3 className="text-lg font-bold mb-4">Каталог</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/catalog/excavators" className="hover:text-primary transition-colors">
                  Запчасти для экскаваторов
                </Link>
              </li>
              <li>
                <Link to="/catalog/loaders" className="hover:text-primary transition-colors">
                  Запчасти для погрузчиков
                </Link>
              </li>
              <li>
                <Link to="/catalog/bulldozers" className="hover:text-primary transition-colors">
                  Запчасти для бульдозеров
                </Link>
              </li>
              <li>
                <Link to="/catalog/engines" className="hover:text-primary transition-colors">
                  Двигатели и компоненты
                </Link>
              </li>
              <li>
                <Link to="/catalog/hydraulics" className="hover:text-primary transition-colors">
                  Гидравлика
                </Link>
              </li>
              <li>
                <Link to="/catalog/tracks" className="hover:text-primary transition-colors">
                  Ходовая часть
                </Link>
              </li>
            </ul>
          </div>

          {/* Информация */}
          <div>
            <h3 className="text-lg font-bold mb-4">Информация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-primary transition-colors">
                  О компании
                </Link>
              </li>
              <li>
                <Link to="/delivery" className="hover:text-primary transition-colors">
                  Доставка
                </Link>
              </li>
              <li>
                <Link to="/payment" className="hover:text-primary transition-colors">
                  Оплата
                </Link>
              </li>
              <li>
                <Link to="/warranty" className="hover:text-primary transition-colors">
                  Гарантия
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="hover:text-primary transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Копирайт */}
        <div className="border-t border-border pt-6 text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} СпецЗапчасти. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;