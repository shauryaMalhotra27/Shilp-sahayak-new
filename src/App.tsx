import { HomePage } from './page-components/HomePage';
import { AuthProvider } from './contexts/AuthContext';
import { CartProvider } from './contexts/CartContext';
import { Header } from './components/layout/Header';
import { CartDrawer } from './components/cart/CartDrawer';
import { Footer } from './components/layout/Footer';

export function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <div className="flex flex-col min-h-screen font-sans text-foreground bg-background">
          <Header />
          <CartDrawer />
          <main className="flex-grow">
            <HomePage />
          </main>
          <Footer />
        </div>
      </CartProvider>
    </AuthProvider>
  );
}
