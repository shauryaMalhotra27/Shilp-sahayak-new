import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { MicroBotPage } from './pages/MicroBotPage';
import { PomodoroPage } from './pages/PomodoroPage';
import { DronePage } from './pages/DronePage';
import { AboutPage } from './pages/AboutPage';
import { VisionPage } from './pages/VisionPage';
import { ShopPage } from './pages/ShopPage';
import { SupportPage } from './pages/SupportPage';
import { ContactPage } from './pages/ContactPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { LoginPage } from './pages/LoginPage';
import { SignupPage } from './pages/SignupPage';
import { AccountPage } from './pages/AccountPage';
import { CartProvider } from './contexts/CartContext';
import { AuthProvider } from './contexts/AuthContext';
import { CartDrawer } from './components/cart/CartDrawer';
function ScrollToTop() {
  const {
    pathname
  } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
export function App() {
  return <AuthProvider>
      <CartProvider>
        <Router>
          <ScrollToTop />
          <div className="flex flex-col min-h-screen font-sans text-slate-900 bg-white">
            <Header />
            <CartDrawer />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/products/micro-bot" element={<MicroBotPage />} />
                <Route path="/products/pomodoro" element={<PomodoroPage />} />
                <Route path="/products/drone" element={<DronePage />} />

                <Route path="/about" element={<AboutPage />} />
                <Route path="/vision" element={<VisionPage />} />
                <Route path="/shop" element={<ShopPage />} />
                <Route path="/support" element={<SupportPage />} />
                <Route path="/contact" element={<ContactPage />} />

                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/account" element={<AccountPage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </CartProvider>
    </AuthProvider>;
}