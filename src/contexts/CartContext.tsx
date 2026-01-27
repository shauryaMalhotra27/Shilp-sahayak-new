import React, { useEffect, useState, createContext, useContext } from 'react';
import { CartItem } from '../types/cart';
interface CartContextType {
  items: CartItem[];
  isOpen: boolean;
  addItem: (item: Omit<CartItem, 'id'>) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  total: number;
  itemCount: number;
}
const CartContext = createContext<CartContextType | undefined>(undefined);
export function CartProvider({ children }: {children: React.ReactNode;}) {
  const [items, setItems] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  });
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(items));
  }, [items]);
  const addItem = (newItem: Omit<CartItem, 'id'>) => {
    setItems((current) => {
      const existingItem = current.find(
        (item) => item.productId === newItem.productId
      );
      if (existingItem) {
        return current.map((item) =>
        item.productId === newItem.productId ?
        {
          ...item,
          quantity: item.quantity + newItem.quantity
        } :
        item
        );
      }
      return [
      ...current,
      {
        ...newItem,
        id: Math.random().toString(36).substr(2, 9)
      }];

    });
    setIsOpen(true);
  };
  const removeItem = (id: string) => {
    setItems((current) => current.filter((item) => item.id !== id));
  };
  const updateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) return;
    setItems((current) =>
    current.map((item) =>
    item.id === id ?
    {
      ...item,
      quantity
    } :
    item
    )
    );
  };
  const clearCart = () => setItems([]);
  const toggleCart = () => setIsOpen((prev) => !prev);
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        toggleCart,
        total,
        itemCount
      }}>

      {children}
    </CartContext.Provider>);

}
export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}