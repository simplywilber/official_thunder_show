"use client"

import { CartProvider } from "use-shopping-cart"

export function Providers({ children } = { children: React.ReactNode }) {
  return (
    <CartProvider
      currency="USD"
      shouldPersist
      cartMode="checkout-session"
      stripe={process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY}
    >
      {children}
    </CartProvider>
  );
}
