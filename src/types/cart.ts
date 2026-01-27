export interface CartItem {
  id: string;
  productId: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
  color?: string;
}

export interface CartState {
  items: CartItem[];
  isOpen: boolean;
}