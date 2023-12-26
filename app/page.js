import ProductsQuery from "./components/ProductsQuery";
import Hero from "./components/Hero";

export default async function Home() {
  return (
    <main className="bg-gray-100 h-full">
      <Hero />
      <div className="flex flex-col my-20 text-center md:text-start">
        <h1
          className=" text-5xl md:text-4xl md:pl-10"
          style={{ fontFamily: "Jockey One, sans-serif" }}
        >
          ACT I / COZY
        </h1>
        <ProductsQuery />
      </div>
    </main>
  );
}
