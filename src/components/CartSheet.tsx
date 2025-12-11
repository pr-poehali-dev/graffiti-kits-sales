import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';
import { useCart } from '@/contexts/CartContext';
import { useState } from 'react';

export const CartSheet = () => {
  const { cart, removeFromCart, updateQuantity, getTotalPrice, getTotalItems, clearCart } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const handleCheckout = () => {
    alert('Оформление заказа! Общая сумма: ' + getTotalPrice() + '₽');
    clearCart();
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button className="bg-primary hover:bg-primary/90 relative">
          <Icon name="ShoppingCart" size={20} />
          {getTotalItems() > 0 && (
            <Badge className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center bg-secondary text-secondary-foreground">
              {getTotalItems()}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <Icon name="ShoppingBag" size={24} />
            Корзина
          </SheetTitle>
        </SheetHeader>

        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[60vh] text-center">
            <Icon name="ShoppingCart" size={64} className="text-muted-foreground mb-4" />
            <p className="text-lg font-semibold mb-2">Корзина пуста</p>
            <p className="text-muted-foreground">Добавьте товары из каталога</p>
          </div>
        ) : (
          <div className="mt-6 space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex gap-4 p-4 bg-card rounded-lg border border-border">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded"
                />
                <div className="flex-1">
                  <h4 className="font-semibold mb-1">{item.name}</h4>
                  <p className="text-sm text-muted-foreground mb-2">{item.brand}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Icon name="Minus" size={14} />
                      </Button>
                      <span className="w-8 text-center font-semibold">{item.quantity}</span>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Icon name="Plus" size={14} />
                      </Button>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-primary">{item.price * item.quantity}₽</p>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-destructive hover:text-destructive"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <Icon name="Trash2" size={14} />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <Separator />

            <div className="space-y-2">
              <div className="flex justify-between text-lg">
                <span>Товаров:</span>
                <span className="font-semibold">{getTotalItems()} шт</span>
              </div>
              <div className="flex justify-between text-2xl font-bold">
                <span>Итого:</span>
                <span className="text-primary">{getTotalPrice()}₽</span>
              </div>
            </div>

            <div className="space-y-2 pt-4">
              <Button
                className="w-full bg-primary hover:bg-primary/90"
                size="lg"
                onClick={handleCheckout}
              >
                <Icon name="CreditCard" className="mr-2" size={20} />
                Оформить заказ
              </Button>
              <Button
                variant="outline"
                className="w-full"
                onClick={clearCart}
              >
                <Icon name="Trash2" className="mr-2" size={20} />
                Очистить корзину
              </Button>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};
