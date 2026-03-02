'use client';

import { useCallback, useEffect, useMemo, useState, createContext, useContext } from 'react';
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
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('cart');
    if (!saved) return;
    try {
      setItems(JSON.parse(saved));
    } catch {
      localStorage.removeItem('cart');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(items));
  }, [items]);
  const addItem = useCallback((newItem: Omit<CartItem, 'id'>) => {
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
  }, []);
  const removeItem = useCallback((id: string) => {
    setItems((current) => current.filter((item) => item.id !== id));
  }, []);
  const updateQuantity = useCallback((id: string, quantity: number) => {
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
  }, []);
  const clearCart = useCallback(() => setItems([]), []);
  const toggleCart = useCallback(() => setIsOpen((prev) => !prev), []);
  const total = useMemo(
    () => items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [items]
  );
  const itemCount = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items]
  );
  const contextValue = useMemo(
    () => ({
      items,
      isOpen,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      toggleCart,
      total,
      itemCount
    }),
    [
      items,
      isOpen,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      toggleCart,
      total,
      itemCount
    ]
  );
  return (
    <CartContext.Provider
      value={contextValue}>

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
