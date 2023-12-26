import Link from "next/link"

export default function Terms() {
  return (
    <main className="bg-gray-100 text-gray-800 font-sans">
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-semibold mb-8">Terms of Service</h1>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing or using Thunder Show&apos;s website, products, or services,
            you agree to comply with and be bound by these Terms. If you do not
            agree with any part of these Terms, you may not use our website or
            services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">2. Use of the Site</h2>
          <ol className="ml-8">
            <li className="list-disc">
              You agree not to use our website for any illegal or unauthorized
              purpose.
            </li>
            <li className="list-disc">
              Thunder Show reserves the right to refuse service to anyone for
              any reason at any time.
            </li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            3. Products and Pricing
          </h2>
          <ol className="ml-8">
            <li className="list-disc">
              Product descriptions and prices are subject to change without
              notice.
            </li>
            <li className="list-disc">
              Thunder Show reserves the right to discontinue any product at any
              time.
            </li>
            <li className="list-disc">
              We make every effort to display accurate product colors, but
              cannot guarantee that your device will accurately portray the
              colors.
            </li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">4. Orders and Payments</h2>
          <ol className="ml-8">
            <li className="list-disc">
              All orders are subject to availability.
            </li>
            <li className="list-disc">
              Thunder Show reserves the right to refuse any order for any
              reason.
            </li>
            <li className="list-disc">
              Payment information is handled securely. We do not store your
              payment details.{" "}
            </li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            5. Shipping and Delivery
          </h2>
          <ol className="ml-8">
            <li className="list-disc">
              Shipping times may vary based on location and other factors.
            </li>
            <li className="list-disc">
              Thunder Show is not responsible for any customs and import taxes.
            </li>
            <li className="list-disc">
              Delays may occur due to unforeseen circumstances or holidays.
            </li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            6. Returns and Exchanges
          </h2>
          <ol className="ml-8">
            <li className="list-disc">
              Please review our{" "}
              <Link
                href={"/return-policy"}
                className="text-yellow-600 hover:text-yellow-500"
              >
                Return Policy{" "}
              </Link>{" "}
              for information on returns and exchanges.
            </li>
            <li className="list-disc">
              Thunder Show may refuse any return or exchange for any reason.
            </li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            7. Intellectual Property
          </h2>
          <ol className="ml-8">
            <li className="list-disc">
              All content on our website is the property of Thunder Show and is
              protected by copyright and other intellectual property laws.
            </li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">8. Privacy Policy</h2>
          <ol className="ml-8">
            <li className="list-disc">
              Your use of our website and services is also governed by our{" "}
              <Link
                href={"/privacy-policy"}
                className="text-yellow-600 hover:text-yellow-500"
              >
                Privacy Policy
              </Link>
              .{" "}
            </li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">9. Changes to Terms</h2>
          <p>
            Thunder Show reserves the right to update or change these Terms at
            any time. Your continued use of the website after any changes
            constitutes acceptance of those changes.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            10. Contact Information
          </h2>
          <p>
            If you have any questions about these Terms, please contact us at{" "}
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
          </p>
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
