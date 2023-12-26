import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex">
      <div className="bg-center w-screen h-64 bg-no-repeat bg-cover overflow-hidden relative sm:w-full sm:h-screen">
        <Image src="/hero_image.jpg" fill={true} alt="Athlete standing over bar"/>
      </div>
      <div className="text-center absolute top-[45%] sm:top-[65%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <h1
          className="text-lg text-white uppercase"
          style={{ fontFamily: "Jockey One, sans-serif" }}
        >
          THUNDER
        </h1>
      </div>
    </section>
  );
}
