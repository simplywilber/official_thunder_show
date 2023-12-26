import { NextResponse } from "next/server"
import { validateCartItems } from "use-shopping-cart/utilities"
import { stripe } from "../../lib/stripe"
import { client } from "../../../sanity/lib/client"

const productQuery = `*[_type == "product"]{
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

export async function POST(Request) {
  const cartDetails = await Request.json();
  const sanityData = await client.fetch(productQuery);
  console.log(sanityData);

  // This is a security measure where cart details are being verified.
  // Avoids the possibility of having items or the prices tampered with.
  const lineItems = validateCartItems(sanityData, cartDetails);
  console.log(sanityData);
  const origin = Request.headers.get("origin");

  const session = await stripe.checkout.sessions.create({
    submit_type: "pay",
    mode: "payment",
    payment_method_types: ["card"],
    line_items: lineItems,
    shipping_address_collection: {
      allowed_countries: ["US"],
    },
    shipping_options: [
      {
        shipping_rate: "shr_1ONEGaIoYpa6gYGCOPYYBbSz",
      },
    ],
    billing_address_collection: "auto",
    success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/cart`,
  });

  return NextResponse.json(session);
}
