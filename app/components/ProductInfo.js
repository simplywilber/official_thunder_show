"use client"
import { formatCurrencyString, useShoppingCart } from "use-shopping-cart"
import { useState } from "react"
import { getSizeName } from "../lib/utils"

const productProps = {
  product: [],
};
export default function ProductInfo({ product } = productProps) {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

  const { addItem, incrementItem, cartDetails } = useShoppingCart();

  const isInCart = !!cartDetails && !!cartDetails[product._id];

  function addToCart() {
    const item = {
      ...product,
      product_data: {
        size: selectedSize,
      },
    };

    isInCart ? incrementItem(item._id) : addItem(item);
  }

  return (
    <div className="md:py-8">
      <div className="ml-2 sm:ml-14">
        <div className="mb-2 md:mb-3">
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {product.name}
          </h1>
        </div>
        <div className="mt-3">
          <h2 className="sr-only">Product information</h2>
          <p className="text-xl sm:text-3xl tracking-tight">
            {formatCurrencyString({
              value: product.price,
              currency: product.currency,
            })}
          </p>
        </div>
        <div className="mt-6">
          <h3 className="sr-only">Description</h3>
          <div className="w-[320px] space-y-6 text-base sm:w-fit">{product.description}</div>
        </div>
        <div className="mt-4">
          <p>
            Size: <strong>{getSizeName(selectedSize)}</strong>
          </p>
          {product.sizes.map((size) => (
            <button
              onClick={() => setSelectedSize(size)}
              key={size}
              className={`mr-2 mt-4 border border-gray-300 w-24 h-10 rounded-xl hover:scale-[1.05] ${
                selectedSize === size ? "bg-gray-900 text-white " : ""
              }`}
            >
              {getSizeName(size)}
            </button>
          ))}
        </div>

        <form className="mt-6">
          <div className="mt-4 flex">
            <button
              onClick={addToCart}
              type="button"
              className="w-[330px] sm:w-[425px] bg-yellow-500 py-6 text-base font-medium text-white hover:bg-yellow-400 hover:scale-[1.05] rounded-xl"
            >
              Add to cart
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
