import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../../hooks/useCart';
import { CartItem } from './CartItem';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';
export function CartDrawer() {
  const { items, isOpen, toggleCart, total } = useCart();
  return (
    <AnimatePresence>
      {isOpen &&
      <>
          {/* Backdrop */}
          <motion.div
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          exit={{
            opacity: 0
          }}
          onClick={toggleCart}
          className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-50" />


          {/* Drawer */}
          <motion.div
          initial={{
            x: '100%'
          }}
          animate={{
            x: 0
          }}
          exit={{
            x: '100%'
          }}
          transition={{
            type: 'spring',
            damping: 25,
            stiffness: 200
          }}
          className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col">

            <div className="p-4 border-b border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-slate-900" />
                <h2 className="font-bold text-lg text-slate-900">Your Cart</h2>
                <span className="bg-slate-100 text-slate-600 text-xs font-medium px-2 py-0.5 rounded-full">
                  {items.length}
                </span>
              </div>
              <button
              onClick={toggleCart}
              className="p-2 hover:bg-slate-50 rounded-full transition-colors">

                <X className="w-5 h-5 text-slate-500" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4">
              {items.length === 0 ?
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center">
                    <ShoppingBag className="w-8 h-8 text-slate-300" />
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-900">
                      Your cart is empty
                    </h3>
                    <p className="text-sm text-slate-500 mt-1">
                      Looks like you haven't added anything yet.
                    </p>
                  </div>
                  <Button onClick={toggleCart} variant="outline">
                    Browse Products
                  </Button>
                </div> :

            <div className="space-y-1">
                  {items.map((item) =>
              <CartItem key={item.id} item={item} />
              )}
                </div>
            }
            </div>

            {items.length > 0 &&
          <div className="p-4 border-t border-slate-100 bg-slate-50/50 space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-slate-600">
                    <span>Subtotal</span>
                    <span>₹{total.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm text-slate-600">
                    <span>Shipping</span>
                    <span className="text-green-600 font-medium">Free</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold text-slate-900 pt-2 border-t border-slate-200">
                    <span>Total</span>
                    <span>₹{total.toLocaleString()}</span>
                  </div>
                </div>

                <Link to="/checkout" onClick={toggleCart}>
                  <Button
                className="w-full"
                size="lg"
                rightIcon={<ArrowRight className="w-4 h-4" />}>

                    Proceed to Checkout
                  </Button>
                </Link>

                <p className="text-xs text-center text-slate-400">
                  Secure checkout powered by Shilp Sahayak
                </p>
              </div>
          }
          </motion.div>
        </>
      }
    </AnimatePresence>);

}