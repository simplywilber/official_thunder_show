"use client"
import React, { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { client } from "/./sanity/lib/client"
import { formatCurrencyString } from "use-shopping-cart"

export default function ProductsQuery() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const query = `*[_type == 'product'] | order(_createdAt desc) {
        _id,
        _createdAt,
        name,
        sku,
        "imageUrl" : images[0].asset->url,
        currency,
        price,
        description,
        "slug": slug.current
      }`;

      try {
        const fetchedData = await client.fetch(query);
        setData(fetchedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
    // The empty dependency array ensures that this effect runs only once on mount
  }, []);

  return (
    <div className="flex flex-col items-center gap-6 p-10 max-w-screen max-h-auto md:flex-row md:flex-wrap">
      {data.map((product) => (
        <div key={product._id}>
          <div className="h-80 w-80 rounded-md bg-gray-200 cursor-pointer transition hover:scale-110 lg:h-80">
            <Link href={`/product/${product.slug}`}>
              <Image
                src={product.imageUrl}
                alt="Product Image"
                className="object-cover object-center p-4 lg:h-full lg:w-full"
                width={300}
                height={300}
              />
            </Link>
          </div>
          <div className="flex my-10 justify-between text-gray-700">
            <div>
              <h3 className="text-sm justify-between">
                <Link href={`/product/${product.slug}`}>{product.name}</Link>
              </h3>
            </div>
            <p>
              {formatCurrencyString({
                value: product.price,
                currency: product.currency,
              })}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
