//Retrieves data using the Sanity API, code uses GROQ with Sanity's Vision for testing
import ImageGallery from "/./app/components/imageGallery"
import { client } from "/./sanity/lib/client"

import ProductInfo from "/./app/components/ProductInfo"

async function getData(slug = string) {
  const query = `*[_type == "product" && slug.current == "${slug}"][0]{
        _id,
        _createdAt,
        "id": _id,
        name,
        sku,
        images,
        price,
        currency,
        description,
        sizes,
        categories,
        colors,
        "slug": slug.current
      }`;
  const data = await client.fetch(query);
  return data;
}

export default async function ProductPage(
  { params } = { params: { slug: string } }
) {
  const data = await getData(params.slug);

  return (
    <main>
      <div className="bg-white py-20 sm:py-0">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <div className="justify-center grid gap-8 sm:justify-start md:grid-cols-2">
            <ImageGallery images={data.images} />
            <ProductInfo product={data} />
          </div>
        </div>
      </div>
    </main>
  );
}
