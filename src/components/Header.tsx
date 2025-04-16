import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Phone, ShoppingCart, User, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Логотип */}
          <Link to="/" className="flex items-center">
            <span className="font-bold text-2xl text-primary">СпецЗапчасти</span>
          </Link>

          {/* Телефон (видимый только на больших экранах) */}
          <div className="hidden md:flex items-center gap-2 text-muted-foreground">
            <Phone size={18} />
            <span className="font-medium">+7 (800) 555-35-35</span>
          </div>

          {/* Меню навигации (видимое только на больших экранах) */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/catalog" className="text-foreground hover:text-primary transition-colors">
              Каталог
            </Link>
            <Link to="/categories" className="text-foreground hover:text-primary transition-colors">
              Категории
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors">
              О компании
            </Link>
            <Link to="/contacts" className="text-foreground hover:text-primary transition-colors">
              Контакты
            </Link>
          </nav>

          {/* Иконки авторизации и корзины */}
          <div className="flex items-center space-x-4">
            <Link to="/cart" className="relative">
              <ShoppingCart className="h-6 w-6 text-foreground hover:text-primary transition-colors" />
              <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full text-xs w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Link>
            <Link to="/account" className="hidden md:block">
              <User className="h-6 w-6 text-foreground hover:text-primary transition-colors" />
            </Link>
            
            {/* Кнопка мобильного меню */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Мобильное меню */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-background z-50 md:hidden">
          <div className="flex flex-col h-full p-4">
            <div className="flex justify-between items-center mb-8">
              <span className="font-bold text-2xl text-primary">СпецЗапчасти</span>
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
                <X className="h-6 w-6" />
              </Button>
            </div>
            
            <div className="flex items-center gap-2 text-muted-foreground mb-6">
              <Phone size={18} />
              <a href="tel:+78005553535" className="font-medium">+7 (800) 555-35-35</a>
            </div>
            
            <nav className="flex flex-col space-y-6 text-lg">
              <Link 
                to="/catalog" 
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Каталог
              </Link>
              <Link 
                to="/categories" 
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Категории
              </Link>
              <Link 
                to="/about" 
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                О компании
              </Link>
              <Link 
                to="/contacts" 
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Контакты
              </Link>
              <Link 
                to="/account" 
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Личный кабинет
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;