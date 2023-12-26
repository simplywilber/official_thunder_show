"use client"

import Link from "next/link"

export function CartItemsEmpty() {
  return (
    <div className="flex h-[450px] shrink-0 items-center justify-center rounded-md border-2 border-dashed border-gray-300 dark:border-gray-800">
      <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
        <i
          class="fa-regular fa-face-meh-blank"
          className="h-10 w-10 text-muted-foreground"
        ></i>
        <h3 className="mt-4 text-lg font-semibold">No products added</h3>
        <p className="mb-4 mt-2 text-sm text-muted-foreground">
          Add products to your cart.
        </p>
        <Link href="/">
          <button
            size="sm"
            className="relative border p-4 border-gray-900 bg-yellow-400 rounded-xl hover:scale-110 hover:bg-yellow-300"
          >
            <i class="fa-solid fa-plus text-black-900 mr-2"></i>
            Add Products
          </button>
        </Link>
      </div>
    </div>
  );
}
