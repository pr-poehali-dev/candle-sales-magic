import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-mystic-dark to-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-mystic-purple/20">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-mystic-purple to-mystic-gold flex items-center justify-center">
              🕯️
            </div>
            <span className="text-xl font-bold text-foreground">Mystical Candles</span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#catalog" className="text-foreground/80 hover:text-mystic-gold transition-colors">Каталог</a>
            <a href="#divination" className="text-foreground/80 hover:text-mystic-gold transition-colors">Гадания</a>
            <a href="#about" className="text-foreground/80 hover:text-mystic-gold transition-colors">О нас</a>
            <Button className="bg-mystic-purple hover:bg-mystic-purple/80 text-white">
              <Icon name="ShoppingCart" size={16} className="mr-2" />
              Корзина
            </Button>
          </div>
          <Button variant="outline" className="md:hidden">
            <Icon name="Menu" size={20} />
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-mystic-gold via-mystic-purple to-mystic-gold bg-clip-text text-transparent animate-fade-in">
              Магия в каждой свече
            </h1>
            <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto animate-fade-in">
              Окунитесь в мир древних традиций, магических ритуалов и таинственных гаданий. 
              Наши свечи созданы с особой энергией для ваших духовных практик.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Button size="lg" className="bg-mystic-purple hover:bg-mystic-purple/80 text-white text-lg px-8">
                <Icon name="Sparkles" size={20} className="mr-2" />
                Открыть каталог
              </Button>
              <Button size="lg" variant="outline" className="border-mystic-gold text-mystic-gold hover:bg-mystic-gold hover:text-background text-lg px-8">
                <Icon name="Crystal" size={20} className="mr-2" />
                Заказать гадание
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="catalog" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Магические свечи
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Каждая свеча создана вручную с использованием древних рецептов и заряжена особой энергией
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product 1 */}
            <Card className="bg-card/50 backdrop-blur-sm border-mystic-purple/20 hover:border-mystic-gold/40 transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="aspect-square overflow-hidden rounded-lg mb-4">
                  <img 
                    src="/img/3a7f844b-3950-4896-b4cd-3a3b7f87a021.jpg" 
                    alt="Фиолетовая магическая свеча"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-foreground">Свеча Защиты</CardTitle>
                <CardDescription className="text-foreground/70">
                  Фиолетовая свеча для защиты от негативной энергии
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-mystic-gold">1,200 ₽</span>
                  <Badge variant="secondary" className="bg-mystic-purple/20 text-mystic-purple">
                    Защита
                  </Badge>
                </div>
                <Button className="w-full bg-mystic-purple hover:bg-mystic-purple/80 text-white">
                  <Icon name="ShoppingCart" size={16} className="mr-2" />
                  В корзину
                </Button>
              </CardContent>
            </Card>

            {/* Product 2 */}
            <Card className="bg-card/50 backdrop-blur-sm border-mystic-purple/20 hover:border-mystic-gold/40 transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="aspect-square overflow-hidden rounded-lg mb-4">
                  <img 
                    src="/img/b768d28e-8cb9-48fe-a926-c27638f07f83.jpg" 
                    alt="Набор магических свечей"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-foreground">Ритуальный набор</CardTitle>
                <CardDescription className="text-foreground/70">
                  Три свечи для полного магического ритуала
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-mystic-gold">2,800 ₽</span>
                  <Badge variant="secondary" className="bg-mystic-gold/20 text-mystic-gold">
                    Набор
                  </Badge>
                </div>
                <Button className="w-full bg-mystic-purple hover:bg-mystic-purple/80 text-white">
                  <Icon name="ShoppingCart" size={16} className="mr-2" />
                  В корзину
                </Button>
              </CardContent>
            </Card>

            {/* Product 3 */}
            <Card className="bg-card/50 backdrop-blur-sm border-mystic-purple/20 hover:border-mystic-gold/40 transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="aspect-square overflow-hidden rounded-lg mb-4 bg-gradient-to-br from-mystic-purple/20 to-mystic-gold/20 flex items-center justify-center">
                  <Icon name="Flame" size={80} className="text-mystic-gold" />
                </div>
                <CardTitle className="text-foreground">Свеча Любви</CardTitle>
                <CardDescription className="text-foreground/70">
                  Розовая свеча для привлечения любви и гармонии
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-mystic-gold">1,500 ₽</span>
                  <Badge variant="secondary" className="bg-red-500/20 text-red-400">
                    Любовь
                  </Badge>
                </div>
                <Button className="w-full bg-mystic-purple hover:bg-mystic-purple/80 text-white">
                  <Icon name="ShoppingCart" size={16} className="mr-2" />
                  В корзину
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Divination Services */}
      <section id="divination" className="py-16 px-4 bg-gradient-to-r from-mystic-dark/30 to-mystic-purple/10">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Магические гадания
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Откройте завесу будущего с помощью древних практик и магических инструментов
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Tarot Reading */}
            <Card className="bg-card/50 backdrop-blur-sm border-mystic-purple/20">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-mystic-purple to-mystic-gold flex items-center justify-center">
                    <Icon name="Sparkles" size={24} className="text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-foreground">Гадание на Таро</CardTitle>
                    <CardDescription className="text-foreground/70">
                      Классическое гадание на картах Таро
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 mb-4">
                  Узнайте о своем будущем, получите ответы на волнующие вопросы и найдите правильный путь.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-mystic-gold">от 2,000 ₽</span>
                  <Button className="bg-mystic-purple hover:bg-mystic-purple/80 text-white">
                    Заказать сеанс
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Crystal Ball */}
            <Card className="bg-card/50 backdrop-blur-sm border-mystic-purple/20">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-mystic-gold to-mystic-purple flex items-center justify-center">
                    <Icon name="Crystal" size={24} className="text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-foreground">Хрустальный шар</CardTitle>
                    <CardDescription className="text-foreground/70">
                      Древнее искусство прорицания
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 mb-4">
                  Заглянем в хрустальный шар и увидим образы вашего будущего, скрытые знаки судьбы.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-mystic-gold">от 3,000 ₽</span>
                  <Button className="bg-mystic-purple hover:bg-mystic-purple/80 text-white">
                    Заказать сеанс
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <img 
              src="/img/87fcd797-4aba-4182-b85a-0ddd65ddebdf.jpg" 
              alt="Магический стол для гаданий"
              className="mx-auto rounded-lg shadow-2xl max-w-md w-full"
            />
          </div>
        </div>
      </section>

      {/* Magic Features */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-mystic-purple to-mystic-gold flex items-center justify-center">
                <Icon name="Moon" size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Лунная магия</h3>
              <p className="text-foreground/70">
                Все свечи заряжаются энергией полнолуния для максимальной эффективности
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-mystic-gold to-mystic-purple flex items-center justify-center">
                <Icon name="Leaf" size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Натуральные компоненты</h3>
              <p className="text-foreground/70">
                Используем только натуральный воск и эфирные масла редких растений
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-mystic-purple to-mystic-gold flex items-center justify-center">
                <Icon name="Star" size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Древние знания</h3>
              <p className="text-foreground/70">
                Рецепты передаются из поколения в поколение уже более 300 лет
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-mystic-dark/50 py-12 px-4 border-t border-mystic-purple/20">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-mystic-purple to-mystic-gold flex items-center justify-center">
                  🕯️
                </div>
                <span className="text-xl font-bold text-foreground">Mystical Candles</span>
              </div>
              <p className="text-foreground/70">
                Магический мир свечей и гаданий для вашего духовного развития
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-foreground">Контакты</h4>
              <div className="space-y-2 text-foreground/70">
                <p>📞 +7 (999) 123-45-67</p>
                <p>📧 info@mysticalcandles.ru</p>
                <p>📍 Москва, ул. Магическая, 13</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-foreground">Режим работы</h4>
              <div className="space-y-2 text-foreground/70">
                <p>Пн-Пт: 10:00 - 19:00</p>
                <p>Сб-Вс: 11:00 - 17:00</p>
                <p>Гадания: по записи</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-mystic-purple/20 mt-8 pt-8 text-center text-foreground/60">
            <p>&copy; 2024 Mystical Candles. Все права защищены магией.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;