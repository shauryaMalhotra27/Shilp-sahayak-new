'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, ChevronRight } from 'lucide-react';
import { useCart } from '../../hooks/useCart';
import { CartItem } from './CartItem';
import { Button } from '../ui/Button';
import Link from 'next/link';
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
          className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-50" />


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
          className="fixed top-0 right-0 h-full w-full max-w-md bg-card shadow-2xl z-50 flex flex-col">

            <div className="p-4 border-b border-border flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-foreground" />
                <h2 className="font-bold text-lg text-foreground">Your Cart</h2>
                <span className="bg-muted text-muted-foreground text-xs font-medium px-2 py-0.5 rounded-full">
                  {items.length}
                </span>
              </div>
              <button
              onClick={toggleCart}
              className="p-2 hover:bg-muted rounded-full transition-colors">

                <X className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4">
              {items.length === 0 ?
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center">
                    <ShoppingBag className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">
                      Your cart is empty
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
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
          <div className="p-4 border-t border-border bg-muted/50 space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Subtotal</span>
                    <span>₹{total.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Shipping</span>
                    <span className="text-success font-medium">Free</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold text-foreground pt-2 border-t border-border">
                    <span>Total</span>
                    <span>₹{total.toLocaleString()}</span>
                  </div>
                </div>

                <Link href="/checkout" onClick={toggleCart}>
                  <Button
                className="w-full"
                size="lg"
                rightIcon={<ChevronRight className="w-4 h-4" />}>

                    Proceed to Checkout
                  </Button>
                </Link>

                <p className="text-xs text-center text-muted-foreground">
                  Secure checkout powered by Shilp Sahayak
                </p>
              </div>
          }
          </motion.div>
        </>
      }
    </AnimatePresence>);

}
