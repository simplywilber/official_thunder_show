import Link from "next/link"

export default function Privacy() {
  return (
    <main className="bg-gray-100 text-gray-800 font-sans">
      <div class="container mx-auto p-8">
        <h1 class="text-3xl font-semibold mb-8">Privacy Policy</h1>

        <p className="mb-8">
          This Privacy Policy describes how your personal information is
          collected, used, and shared when you visit or make a purchase from
          Thunder Show.
        </p>

        <section class="mb-8">
          <h2 class="text-xl font-semibold mb-4">
            1. Personal Information We Collect
          </h2>
          <p>
            When you visit the Site, we automatically collect certain
            information about your device, including information about your web
            browser, IP address, time zone, and some of the cookies that are
            installed on your device.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-xl font-semibold mb-4">
            2. How We Use Your Personal Information
          </h2>
          <p>
            We use the Order Information that we collect generally to fulfill
            any orders placed through the Site and to communicate with you.
            Additionally, we use Device Information to improve and optimize our
            Site.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-xl font-semibold mb-4">
            3. Sharing Your Personal Information
          </h2>
          <p>
            We may share your Personal Information with third parties to help us
            use your Personal Information as described in this Privacy Policy.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-xl font-semibold mb-4">4. Your Rights</h2>
          <p>
            You have the right to access, correct, update, or delete your
            personal information. Contact us through the information below to
            exercise these rights.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-xl font-semibold mb-4">5. Data Retention</h2>
          <p>
            We will maintain your Order Information for our records unless and
            until you ask us to delete this information.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-xl font-semibold mb-4">6. Changes</h2>
          <p>
            We may update this privacy policy from time to time. Check back
            periodically for changes.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-xl font-semibold mb-4">7. Contact Us</h2>
          <p>
            If you have questions or complaints about our privacy practices,
            please contact us at{" "}
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
