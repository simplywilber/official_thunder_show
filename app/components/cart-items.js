"use client"
import Image from "next/image"
import Link from "next/link"
import { urlForImage } from "/./sanity/lib/image"
import { formatCurrencyString, useShoppingCart } from "use-shopping-cart"
import { getSizeName } from "../lib/utils"
import { Input } from "../components/input"
import { CartItemsEmpty } from "../components/cart-items-empty"

export function CartItems() {
  const { cartDetails, removeItem, setItemQuantity } = useShoppingCart();
  // We are grabbing the product itself, but skipping the key
  const cartItems = Object.entries(cartDetails).map(([_, product]) => product);

  function removeCartItem(product) {
    removeItem(product._id);
  }

  // If the cart is empty, a button will be provided
  if (cartItems.length === 0) return <CartItemsEmpty />;

  return (
    <ul
      role="list"
      className="divide-y divide-gray-200 border-y border-gray-200"
    >
      {cartItems.map((product, productIdx) => (
        <li key={product._id} className="flex py-6 sm:py-10">
          <div className="shrink-0">
            <Image
              // Provided by sanity, urlforimage
              src={
                product.images && product.images[0]
                  ? urlForImage(product.images[0])
                  : "/fallback-image.jpg"
              }
              alt={product.name}
              width={200}
              height={200}
              className="h-24 w-24 rounded-md border-2 border-gray-200 object-cover object-center sm:h-48 sm:w-48"
            />
          </div>

          <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
            <div className="relative justify-between pr-9 sm:flex sm:gap-x-6 sm:pr-0">
              <div>
                <div className="flex justify-between">
                  <h3 className="text-sm">
                    <Link
                      href={`/products/${product.slug}`}
                      className="font-medium"
                    >
                      {product.name}
                    </Link>
                  </h3>
                </div>
                <p className="mt-1 text-sm font-medium">
                  {formatCurrencyString({
                    value: product.price,
                    currency: product.currency,
                  })}
                </p>
                <p className="mt-1 text-sm font-medium">
                  Size:{" "}
                  <strong>{getSizeName(product.product_data?.siz)}</strong>
                </p>
              </div>

              <div className="mt-4 sm:mt-0 sm:pr-9">
                <label htmlFor={`quantity-${productIdx}`} className="sr-only">
                  Quantity, {product.name}
                </label>
                <Input
                  id={`quantity-${productIdx}`}
                  name={`quantity-${productIdx}`}
                  type="number"
                  className="w-16"
                  // This min and max will control the item amount
                  min={1}
                  max={10}
                  value={product.quantity}
                  onChange={(event) =>
                    setItemQuantity(product._id, Number(event.target.value))
                  }
                />
                <div className="absolute right-0 top-0">
                  <button
                    type="button"
                    className="-mr-2 inline-flex p-2"
                    onClick={() => removeCartItem(product)}
                  >
                    <span className="sr-only">Remove</span>
                    <i className="fa-solid fa-x"></i>
                  </button>
                </div>
              </div>
            </div>

            <p className="mt-4 flex space-x-2 text-sm">
              <i className="fa-regular fa-clock"></i>
              <span>Ships in 1 week</span>
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
