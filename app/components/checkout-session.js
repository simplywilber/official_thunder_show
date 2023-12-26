"use client"

import { useEffect } from "react"
import Stripe from "stripe"
import { useShoppingCart } from "use-shopping-cart"

const customerDetails = Stripe.Checkout | null;

export function CheckoutSession({ customerDetails }) {
  const { clearCart } = useShoppingCart();

  useEffect(() => {
    if (customerDetails) {
      clearCart();
    }
  }, [customerDetails]);
  if (!customerDetails) {
    return (
      <>
        <h1
          className="mt-4 text-3xl font-bold tracking-tight text-red-400 sm:text-5xl"
          style={{ fontFamily: "Jockey One, sans-serif" }}
        >
          No checkout session found
        </h1>
      </>
    );
  }

  return (
    <>
      <h1
        className="mt-4 text-3xl font-bold text-yellow-400 sm:text-5xl"
        style={{ fontFamily: "Jockey One, sans-serif" }}
      >
        Order Successful!
      </h1>
      <h3 className="mt-8 text-2xl leading-7">
        Thank you,{" "}
        <span className="font-extrabold">{customerDetails.name}</span>!
      </h3>
      <p className="mt-8">
        Check your purchase email{" "}
        <span className="mx-1 font-extrabold text-yellow-500">
          {customerDetails.email}
        </span>{" "}
        for your invoice.
      </p>
    </>
  );
}
