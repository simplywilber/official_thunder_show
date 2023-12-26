import Link from "next/link"

export default function Refund() {
  return (
    <main className="bg-gray-100 text-gray-800 font-sans">
      <div class="container mx-auto p-8">
        <h1 class="text-3xl font-semibold mb-8">Return/Refund Policy</h1>

        <section class="mb-8">
          <p>
            Thank you for shopping at Thunder Show. If you are not entirely
            satisfied with your purchase, we&apos;re here to help.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-xl font-semibold mb-4">1. Refund Eligibility</h2>
          <p>
            To be eligible for a refund, your item must be unused and in the
            same condition that you received it. It must also be in the original
            packaging.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-xl font-semibold mb-4">2. Refund Process</h2>
          <p>
            Once we receive your item, we will inspect it and notify you that we
            have received your returned item. We will immediately notify you on
            the status of your refund after inspecting the item.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-xl font-semibold mb-4">3. Refund Timeframe</h2>
          <p>
            If your return is approved, we will initiate a refund to your credit
            card (or original method of payment). You will receive the credit
            within a certain amount of days, depending on your card issuer&apos;s
            policies.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-xl font-semibold mb-4">4. Return Shipping</h2>
          <p>
            You will be responsible for paying for your own shipping costs for
            returning your item. Shipping costs are non-refundable.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-xl font-semibold mb-4">5. Contact Us</h2>
          <p>
            If you have any questions about our Return Policy, please contact us
            at{" "}
            <a
              href="mailto:thundershowofficially@gmail.com"
              className="text-yellow-600 hover:text-yellow-500"
            >
              thundershowofficially@gmail.com{" "}
            </a>
            or visit our{" "}
            <Link
              href="/contact"
              className="text-yellow-600 hover:text-yellow-500"
            >
              Contact Us
            </Link>{" "}
            page.
          </p>{" "}
        </section>
        <div className="flex justify-center">
          <h1
            className="text-xl p-8 uppercase cursor-pointer hover:scale-110"
            style={{ fontFamily: "Jockey One, sans-serif" }}
          >
            THUNDER ⚡︎ SHOW
          </h1>
        </div>
      </div>
    </main>
  );
}
