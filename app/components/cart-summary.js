"use client"

import { useState } from "react"
import { formatCurrencyString, useShoppingCart } from "use-shopping-cart"

export function CartSummary() {
  const {
    formattedTotalPrice,
    totalPrice,
    cartDetails,
    cartCount,
    redirectToCheckout,
  } = useShoppingCart();

  const [isLoading, setisLoading] = useState(false);
  const checkoutDisabled = isLoading || cartCount === 0;

  //Im using cents as the lowest denomination
  const shippingAmount = cartCount > 0 ? 500 : 0;

  const totalAmount = totalPrice + shippingAmount;

  async function onCheckout() {
    setisLoading(true);
    const response = await fetch("/api/checkout", {
      method: "POST",
      body: JSON.stringify(cartDetails),
    });
    const data = await response.json();
    const result = await redirectToCheckout(data.id);
    if (result?.error) {
      console.error(result);
    }
    setisLoading(false);
  }

  return (
    <section
      aria-labelledby="summary-heading"
      className="mt-16 rounded-lg border-2 border-gray-800 bg-black px-4 py-6 shadow-md sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8 text-white"
    >
      <h2 id="summary-heading" className="text-lg font-medium">
        Order summary
      </h2>

      <dl className="mt-6 space-y-4">
        <div className="flex items-center justify-between">
          <dt className="text-sm">Subtotal</dt>
          <dd className="text-sm font-medium">{formattedTotalPrice}</dd>
        </div>
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <dt className="flex items-center text-sm">
            <span>Shipping estimate</span>
          </dt>
          <dd className="text-sm font-medium">
            {formatCurrencyString({ value: shippingAmount, currency: "USD" })}
          </dd>
        </div>
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <dt className="text-base font-medium">Order total</dt>
          <dd className="text-base font-medium">
            {formatCurrencyString({ value: totalAmount, currency: "USD" })}
          </dd>
        </div>
      </dl>

      <div className="mt-6">
        <button
          className="w-full h-14 rounded-xl bg-gray-100 text-black transition hover:bg-white hover:scale-[1.04]"
          onClick={onCheckout}
          disabled={checkoutDisabled}
        >
          {isLoading && <i class="fa-solid fa-spinner fa-spin mr-2"></i>}
          {isLoading ? "Loading..." : "Checkout"}
        </button>
      </div>
    </section>
  );
}
