import Image from "next/image"

export default function About() {
  return (
    <main className="flex flex-col sm:flex-row m-16 items-center gap-16">
      <div className="sm:w-[50%]">
        <Image
          src="/hero_image.jpg"
          alt="Athlete standing above bar"
          width={800}
          height={300}
          className="rounded-3xl"
        />
      </div>
      <div className="break-words sm:w-[50%]">
        <h1
          className="text-4xl text-center sm:text-start"
          style={{ fontFamily: "Jockey One, sans-serif" }}
        >
          About Us
        </h1>
        <p className="my-10">
          Welcome to Thunder Show, a brand that revolutionizes modern sports
          apparel, especially tailored for the champions of the fitness world.
          Established in December 2023, Thunder Show is proudly veteran-owned,
          inspired by the thunderstorms witnessed on naval ships. Our journey
          began with a powerful belief: anything can be conquered, rain or
          shine—because, for us, it&apos;s always go time.
        </p>
        <p className="my-10">
          At Thunder Show, we fuse cutting-edge design with a resilient spirit
          to create sportswear that resonates with the dedication of
          powerlifters, bodybuilders, and fitness enthusiasts. Our apparel is
          more than just fabric; it&apos;s a statement of determination and a
          testament to the indomitable human spirit. Join us on a journey where
          each garment tells a story of strength, courage, and the unyielding
          pursuit of victory.
        </p>
        <p className="my-10">
          Discover the power of Thunder Show—where fashion meets fortitude, and
          every moment is an opportunity to showcase your unwavering strength in
          the fitness arena.
        </p>
        <h3
          className="text-center text-2xl sm:text-start"
          style={{ fontFamily: "Jockey One, sans-serif" }}
        >
          - THUNDER ⚡︎ SHOW
        </h3>
      </div>
    </main>
  );
}
