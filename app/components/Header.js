"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useShoppingCart } from "use-shopping-cart"

export default function Header() {
  const pathname = usePathname();

  //optional, thid will render a count in the shooping cart for us
  const { cartCount } = useShoppingCart();

  if (pathname.startsWith("/studio")) return null;

  return (
    <header className="flex flex-col h-full justify-between items-center gap-5 my-3 mx-4 sm:h-[107px] sm:flex-row sm:gap-0">
      <div className="flex">
        <Link href={"/"}>
          <h1
            className="text-3xl uppercase cursor-pointer hover:scale-110 xs:text-6xl sm:text-4xl"
            style={{ fontFamily: "Jockey One, sans-serif" }}
          >
            THUNDER ⚡︎ SHOW
          </h1>
        </Link>
      </div>
      <div className="flex text-xl self-center gap-8 xs:text-2xl sm:relative sm:text-xl sm:right-[84px]">
        <Link href={"/"}>
          <p className="cursor-pointer hover:scale-110">Home</p>
        </Link>
        <Link href={"/about"}>
          <p className="cursor-pointer hover:scale-110">About</p>
        </Link>
        <Link href={"/contact"}>
          <p className="cursor-pointer hover:scale-110">Contact</p>
        </Link>
      </div>
      <div className="flex gap-4 items-center">
        {/* Prevents users from accessing Sanity Studio in production */}
        {process.env.NODE_ENV === "development" && (
          <Link href="/studio">
            <i className="far text-lg transition hover:scale-110 p-2 fa-edit sm:text-3xl"></i>
          </Link>
        )}
        <Link href="/cart">
          <i className="fa-solid text-3xl transition fa-bag-shopping items-center xs:top-36 xs:right-[268px] sm:h-6 sm:top-10 sm:right-1"></i>{" "}
          <span className="sr-only">Cart</span>
          {cartCount > 0 && (
            <div className="absolute aspect-square h-4 grid place-items-center bg-yellow-500 text-white rounded-full top-28 right-[135px] xs:top-36 xs:right-[268px] sm:h-6 sm:top-10 sm:right-1">
              <span className="text-xs">{cartCount}</span>{" "}
            </div>
          )}
        </Link>
      </div>
    </header>
  );
}
