import React, { useEffect, useState, createContext, useContext } from 'react';
import { User, Address, Order } from '../types/user';
interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string) => void;
  logout: () => void;
  signup: (name: string, email: string, phone: string) => void;
  updateProfile: (data: Partial<User>) => void;
  addAddress: (address: Omit<Address, 'id'>) => void;
  removeAddress: (id: string) => void;
  addOrder: (order: Order) => void;
}
const AuthContext = createContext<AuthContextType | undefined>(undefined);
export function AuthProvider({ children }: {children: React.ReactNode;}) {
  const [user, setUser] = useState<User | null>(() => {
    const saved = localStorage.getItem('user');
    return saved ? JSON.parse(saved) : null;
  });
  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);
  const login = (email: string) => {
    // Mock login - in real app would verify credentials
    // For demo, we'll simulate a user if email matches or create a mock one
    const mockUser: User = {
      id: 'user-1',
      name: 'Demo User',
      email,
      phone: '+91 98765 43210',
      addresses: [],
      orders: [],
      joinedDate: new Date().toISOString()
    };
    setUser(mockUser);
  };
  const signup = (name: string, email: string, phone: string) => {
    const newUser: User = {
      id: Math.random().toString(36).substr(2, 9),
      name,
      email,
      phone,
      addresses: [],
      orders: [],
      joinedDate: new Date().toISOString()
    };
    setUser(newUser);
  };
  const logout = () => setUser(null);
  const updateProfile = (data: Partial<User>) => {
    setUser((prev) =>
    prev ?
    {
      ...prev,
      ...data
    } :
    null
    );
  };
  const addAddress = (address: Omit<Address, 'id'>) => {
    setUser((prev) => {
      if (!prev) return null;
      const newAddress = {
        ...address,
        id: Math.random().toString(36).substr(2, 9)
      };
      return {
        ...prev,
        addresses: [...prev.addresses, newAddress]
      };
    });
  };
  const removeAddress = (id: string) => {
    setUser((prev) => {
      if (!prev) return null;
      return {
        ...prev,
        addresses: prev.addresses.filter((a) => a.id !== id)
      };
    });
  };
  const addOrder = (order: Order) => {
    setUser((prev) => {
      if (!prev) return null;
      return {
        ...prev,
        orders: [order, ...prev.orders]
      };
    });
  };
  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        logout,
        signup,
        updateProfile,
        addAddress,
        removeAddress,
        addOrder
      }}>

      {children}
    </AuthContext.Provider>);

}
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}