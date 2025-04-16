import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Clock, MapPin, Phone, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-12 md:py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Свяжитесь с нами</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Форма обратной связи */}
          <div>
            <div className="bg-background rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold mb-4">Отправить сообщение</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Input placeholder="Ваше имя" />
                  </div>
                  <div>
                    <Input placeholder="Ваш телефон" type="tel" />
                  </div>
                </div>
                <div>
                  <Input placeholder="Email" type="email" />
                </div>
                <div>
                  <Textarea placeholder="Ваше сообщение" rows={4} />
                </div>
                <Button type="submit" className="w-full">Отправить</Button>
              </form>
            </div>
          </div>
          
          {/* Контактная информация */}
          <div>
            <div className="bg-background rounded-lg p-6 shadow-md h-full">
              <h3 className="text-xl font-bold mb-6">Контактная информация</h3>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Адрес</h4>
                    <address className="not-italic text-muted-foreground">
                      г. Москва, ул. Промышленная, 23<br />
                      Складской комплекс "ПромЗона"
                    </address>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Телефоны</h4>
                    <div className="text-muted-foreground">
                      <p>+7 (800) 555-35-35</p>
                      <p>+7 (495) 123-45-67</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-muted-foreground">info@speczapchasti.ru</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Режим работы</h4>
                    <div className="text-muted-foreground">
                      <p>Пн-Пт: 9:00 - 18:00</p>
                      <p>Сб: 10:00 - 15:00</p>
                      <p>Вс: выходной</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;