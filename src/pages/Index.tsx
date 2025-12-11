import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');

  const products = [
    {
      id: 1,
      name: 'Starter Kit Pro',
      price: 2500,
      image: 'https://cdn.poehali.dev/projects/16b44156-071a-4ec2-958e-dbfbec657d85/files/19553898-c835-4848-9684-b3ee3440da3d.jpg',
      category: 'starter',
      brand: 'Montana',
      colors: 12,
      rating: 4.8,
      reviews: 124
    },
    {
      id: 2,
      name: 'Advanced Color Set',
      price: 4200,
      image: 'https://cdn.poehali.dev/projects/16b44156-071a-4ec2-958e-dbfbec657d85/files/19553898-c835-4848-9684-b3ee3440da3d.jpg',
      category: 'advanced',
      brand: 'Molotow',
      colors: 24,
      rating: 4.9,
      reviews: 89
    },
    {
      id: 3,
      name: 'Professional Pack',
      price: 6800,
      image: 'https://cdn.poehali.dev/projects/16b44156-071a-4ec2-958e-dbfbec657d85/files/19553898-c835-4848-9684-b3ee3440da3d.jpg',
      category: 'professional',
      brand: 'Ironlak',
      colors: 36,
      rating: 5.0,
      reviews: 156
    },
    {
      id: 4,
      name: 'Urban Essentials',
      price: 3200,
      image: 'https://cdn.poehali.dev/projects/16b44156-071a-4ec2-958e-dbfbec657d85/files/19553898-c835-4848-9684-b3ee3440da3d.jpg',
      category: 'starter',
      brand: 'Kobra',
      colors: 18,
      rating: 4.6,
      reviews: 67
    }
  ];

  const galleryWorks = [
    {
      id: 1,
      image: 'https://cdn.poehali.dev/projects/16b44156-071a-4ec2-958e-dbfbec657d85/files/e6a8d528-73f1-4b24-a2bc-af166744d56b.jpg',
      author: 'Alex Street',
      product: 'Professional Pack'
    },
    {
      id: 2,
      image: 'https://cdn.poehali.dev/projects/16b44156-071a-4ec2-958e-dbfbec657d85/files/e6a8d528-73f1-4b24-a2bc-af166744d56b.jpg',
      author: 'Maria Nova',
      product: 'Advanced Color Set'
    },
    {
      id: 3,
      image: 'https://cdn.poehali.dev/projects/16b44156-071a-4ec2-958e-dbfbec657d85/files/e6a8d528-73f1-4b24-a2bc-af166744d56b.jpg',
      author: 'Den Wildstyle',
      product: 'Starter Kit Pro'
    }
  ];

  const reviews = [
    {
      id: 1,
      author: 'Макс Граффити',
      avatar: '',
      rating: 5,
      text: 'Отличный набор! Краски ложатся ровно, цвета яркие. Взял Professional Pack и не пожалел.',
      product: 'Professional Pack',
      date: '15.11.2024'
    },
    {
      id: 2,
      author: 'Аня Арт',
      avatar: '',
      rating: 5,
      text: 'Первый раз пробую граффити, взяла Starter Kit. Всё понятно, качество супер!',
      product: 'Starter Kit Pro',
      date: '22.11.2024'
    },
    {
      id: 3,
      author: 'Влад Урбан',
      avatar: '',
      rating: 4,
      text: 'Advanced Color Set — огонь! Много оттенков, удобные колпачки. Рекомендую.',
      product: 'Advanced Color Set',
      date: '28.11.2024'
    }
  ];

  const filteredProducts = products.filter(product => {
    if (selectedCategory !== 'all' && product.category !== selectedCategory) return false;
    if (priceRange === 'low' && product.price > 3000) return false;
    if (priceRange === 'mid' && (product.price < 3000 || product.price > 5000)) return false;
    if (priceRange === 'high' && product.price < 5000) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border sticky top-0 bg-background/95 backdrop-blur-sm z-50">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Spray" className="text-primary" size={32} />
            <span className="text-2xl font-bold text-primary">ГРАФФИТИ</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">Главная</a>
            <a href="#catalog" className="text-foreground hover:text-primary transition-colors">Каталог</a>
            <a href="#gallery" className="text-foreground hover:text-primary transition-colors">Портфолио</a>
            <a href="#reviews" className="text-foreground hover:text-primary transition-colors">Отзывы</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">О нас</a>
            <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            <Icon name="ShoppingCart" size={20} />
          </Button>
        </nav>
      </header>

      <section id="home" className="relative overflow-hidden py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge className="bg-secondary text-secondary-foreground">Лучшие наборы 2024</Badge>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Твой стиль.<br />
                <span className="text-primary">Твоя улица.</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Профессиональные наборы для граффити от ведущих брендов. Качество, проверенное улицами.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Icon name="ShoppingBag" className="mr-2" size={20} />
                  Смотреть каталог
                </Button>
                <Button size="lg" variant="outline">
                  <Icon name="Play" className="mr-2" size={20} />
                  Как начать
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/16b44156-071a-4ec2-958e-dbfbec657d85/files/0ec4f510-89ff-4977-b44f-306693c86c92.jpg" 
                alt="Graffiti Artist"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-lg shadow-lg border border-border">
                <div className="flex items-center gap-2">
                  <Icon name="Users" className="text-primary" size={24} />
                  <div>
                    <p className="font-bold">2000+</p>
                    <p className="text-sm text-muted-foreground">Довольных клиентов</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Каталог наборов</h2>
            <p className="text-xl text-muted-foreground">Выбери свой идеальный набор</p>
          </div>

          <div className="flex flex-wrap gap-4 mb-8 justify-center">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Категория" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Все категории</SelectItem>
                <SelectItem value="starter">Начальный</SelectItem>
                <SelectItem value="advanced">Продвинутый</SelectItem>
                <SelectItem value="professional">Профессиональный</SelectItem>
              </SelectContent>
            </Select>

            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Цена" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Все цены</SelectItem>
                <SelectItem value="low">До 3000₽</SelectItem>
                <SelectItem value="mid">3000₽ - 5000₽</SelectItem>
                <SelectItem value="high">От 5000₽</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-shadow animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader className="p-0">
                  <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                </CardHeader>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-lg">{product.name}</CardTitle>
                    <Badge variant="outline">{product.brand}</Badge>
                  </div>
                  <CardDescription className="mb-3">
                    {product.colors} цветов в наборе
                  </CardDescription>
                  <div className="flex items-center gap-1 mb-3">
                    <Icon name="Star" className="text-yellow-500 fill-yellow-500" size={16} />
                    <span className="font-semibold">{product.rating}</span>
                    <span className="text-muted-foreground text-sm">({product.reviews})</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{product.price}₽</span>
                    <Button size="sm" className="bg-primary hover:bg-primary/90">
                      <Icon name="Plus" size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Портфолио работ</h2>
            <p className="text-xl text-muted-foreground">Творчество наших клиентов</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {galleryWorks.map((work, index) => (
              <div key={work.id} className="group relative overflow-hidden rounded-lg animate-scale-in" style={{animationDelay: `${index * 0.15}s`}}>
                <img 
                  src={work.image} 
                  alt={work.author}
                  className="w-full h-80 object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <div>
                    <p className="text-white font-bold">{work.author}</p>
                    <p className="text-gray-300 text-sm">{work.product}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Отзывы покупателей</h2>
            <p className="text-xl text-muted-foreground">Что говорят наши клиенты</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card key={review.id} className="animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Avatar>
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        {review.author.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-base">{review.author}</CardTitle>
                      <CardDescription className="text-xs">{review.date}</CardDescription>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-500 fill-yellow-500" size={16} />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2">{review.text}</p>
                  <Badge variant="outline">{review.product}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">О нас</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Мы — команда энтузиастов уличной культуры, которая знает всё о граффити. Работаем только с проверенными брендами и гарантируем качество каждого набора.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                С 2018 года помогаем начинающим и профессиональным художникам находить идеальные инструменты для творчества. Более 2000 довольных клиентов по всей России.
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">6+</p>
                  <p className="text-sm text-muted-foreground">лет на рынке</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">50+</p>
                  <p className="text-sm text-muted-foreground">брендов</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">2000+</p>
                  <p className="text-sm text-muted-foreground">клиентов</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card p-6 rounded-lg border border-border">
                <Icon name="Truck" className="text-primary mb-3" size={32} />
                <h3 className="font-bold mb-2">Быстрая доставка</h3>
                <p className="text-sm text-muted-foreground">По всей России от 2 дней</p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <Icon name="Shield" className="text-primary mb-3" size={32} />
                <h3 className="font-bold mb-2">Гарантия качества</h3>
                <p className="text-sm text-muted-foreground">100% оригинальная продукция</p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <Icon name="HeadphonesIcon" className="text-primary mb-3" size={32} />
                <h3 className="font-bold mb-2">Поддержка 24/7</h3>
                <p className="text-sm text-muted-foreground">Всегда на связи</p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border">
                <Icon name="Gift" className="text-primary mb-3" size={32} />
                <h3 className="font-bold mb-2">Бонусная программа</h3>
                <p className="text-sm text-muted-foreground">Скидки для постоянных клиентов</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Контакты</h2>
            <p className="text-xl text-muted-foreground">Свяжитесь с нами</p>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <Icon name="Mail" className="text-primary mb-2" size={32} />
                  <CardTitle>Email</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">info@graffiti-shop.ru</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Icon name="Phone" className="text-primary mb-2" size={32} />
                  <CardTitle>Телефон</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">+7 (800) 555-35-35</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Icon name="MapPin" className="text-primary mb-2" size={32} />
                  <CardTitle>Адрес</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">г. Москва, ул. Граффити, д. 1</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Icon name="Clock" className="text-primary mb-2" size={32} />
                  <CardTitle>Режим работы</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Пн-Вс: 10:00 - 22:00</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-card border-t border-border py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2024 ГРАФФИТИ. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
