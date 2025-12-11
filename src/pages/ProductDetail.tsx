import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';
import { useCart } from '@/contexts/CartContext';
import { products } from '@/data/products';
import { CartSheet } from '@/components/CartSheet';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Товар не найден</h1>
          <Button onClick={() => navigate('/')}>Вернуться на главную</Button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
  };

  const reviews = [
    {
      id: 1,
      author: 'Макс Граффити',
      rating: 5,
      text: 'Отличный набор! Краски ложатся ровно, цвета яркие.',
      date: '15.11.2024'
    },
    {
      id: 2,
      author: 'Аня Арт',
      rating: 5,
      text: 'Качество супер! Рекомендую всем.',
      date: '22.11.2024'
    },
    {
      id: 3,
      author: 'Влад Урбан',
      rating: 4,
      text: 'Хороший набор, много оттенков.',
      date: '28.11.2024'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border sticky top-0 bg-background/95 backdrop-blur-sm z-50">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Button variant="ghost" onClick={() => navigate('/')}>
            <Icon name="ArrowLeft" className="mr-2" size={20} />
            Назад
          </Button>
          <div className="flex items-center gap-2">
            <Icon name="Spray" className="text-primary" size={32} />
            <span className="text-2xl font-bold text-primary">ГРАФФИТИ</span>
          </div>
          <CartSheet />
        </nav>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-4">
            <div className="rounded-lg overflow-hidden border border-border">
              <img
                src={product.images?.[selectedImage] || product.image}
                alt={product.name}
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.images?.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index
                      ? 'border-primary scale-105'
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-24 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <div className="flex items-start justify-between mb-2">
                <h1 className="text-4xl font-bold">{product.name}</h1>
                <Badge variant="outline" className="text-lg px-3 py-1">{product.brand}</Badge>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Icon
                      key={i}
                      name="Star"
                      className={i < Math.floor(product.rating) ? 'text-yellow-500 fill-yellow-500' : 'text-gray-600'}
                      size={20}
                    />
                  ))}
                </div>
                <span className="font-semibold">{product.rating}</span>
                <span className="text-muted-foreground">({product.reviews} отзывов)</span>
              </div>
            </div>

            <Separator />

            <div>
              <p className="text-3xl font-bold text-primary mb-2">{product.price}₽</p>
              <p className="text-muted-foreground">
                <Icon name="Palette" className="inline mr-2" size={18} />
                {product.colors} цветов в наборе
              </p>
            </div>

            <div className="space-y-2">
              <Button
                size="lg"
                className="w-full bg-primary hover:bg-primary/90"
                onClick={handleAddToCart}
              >
                <Icon name="ShoppingCart" className="mr-2" size={20} />
                Добавить в корзину
              </Button>
              <Button size="lg" variant="outline" className="w-full">
                <Icon name="Heart" className="mr-2" size={20} />
                В избранное
              </Button>
            </div>

            <Separator />

            <div>
              <h3 className="text-xl font-bold mb-3">Описание</h3>
              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardContent className="pt-6">
                  <Icon name="Package" className="text-primary mb-2" size={32} />
                  <CardTitle className="text-sm mb-1">Категория</CardTitle>
                  <CardDescription>
                    {product.category === 'starter' && 'Начальный'}
                    {product.category === 'advanced' && 'Продвинутый'}
                    {product.category === 'professional' && 'Профессиональный'}
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <Icon name="Truck" className="text-primary mb-2" size={32} />
                  <CardTitle className="text-sm mb-1">Доставка</CardTitle>
                  <CardDescription>По РФ от 2 дней</CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8">Отзывы покупателей</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <Card key={review.id}>
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
                  <p className="text-muted-foreground">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8">Похожие товары</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {products
              .filter((p) => p.brand === product.brand && p.id !== product.id)
              .slice(0, 4)
              .map((item) => (
                <Card
                  key={item.id}
                  className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                  onClick={() => {
                    navigate(`/product/${item.id}`);
                    window.scrollTo(0, 0);
                  }}
                >
                  <CardHeader className="p-0">
                    <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                  </CardHeader>
                  <CardContent className="p-4">
                    <CardTitle className="text-lg mb-2">{item.name}</CardTitle>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-primary">{item.price}₽</span>
                      <div className="flex items-center gap-1">
                        <Icon name="Star" className="text-yellow-500 fill-yellow-500" size={14} />
                        <span className="text-sm font-semibold">{item.rating}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </div>

      <footer className="bg-card border-t border-border py-8 mt-16">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2024 ГРАФФИТИ. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default ProductDetail;
