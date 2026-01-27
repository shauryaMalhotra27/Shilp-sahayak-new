import { CartItem } from './cart';

export interface Address {
  id: string;
  name: string;
  line1: string;
  line2?: string;
  city: string;
  state: string;
  pincode: string;
  phone: string;
  isDefault?: boolean;
}

export interface Order {
  id: string;
  date: string;
  items: CartItem[];
  total: number;
  status: 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled';
  shippingAddress: Address;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  addresses: Address[];
  orders: Order[];
  joinedDate: string;
}