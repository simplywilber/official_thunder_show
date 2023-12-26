import Link from "next/link"

export default function Footer() {
  const date = new Date();
  let year = date.getFullYear();

  return (
    <footer className="flex w-screen h-full justify-center bg-black cursor-default sm:h-[200px] sm:justify-normal">
      <div className="flex flex-col gap-8 items-center my-3 mx-4 sm:flex-row">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-20">
          <div className="flex">
            <Link href={"/"}>
              <h1
                className="text-4xl uppercase cursor-pointer hover:scale-110 text-white sm:text-3xl"
                style={{ fontFamily: "Jockey One, sans-serif" }}
              >
                THUNDER ⚡︎ SHOW
              </h1>
            </Link>
          </div>
          <div className="flex self-center text-white text-lg gap-8">
            <Link href={"/"}>
              <p className="cursor-pointer hover:scale-110">Home</p>
            </Link>
            <Link href={"/about"}>
              <p className="cursor-pointer hover:scale-110">About</p>
            </Link>
            <Link href={"/contact"}>
              <p className="cursor-pointer hover:scale-110">Contact</p>
            </Link>
            <span className="hidden sm:contents">|</span>
          </div>
        </div>

        <div className="flex gap-8 text-white text-sm">
          <Link href={"/terms"}>
            <p className="cursor-pointer hover:scale-110">Terms of Service</p>
          </Link>
          <span>|</span>
          <Link href={"/return-policy"}>
            <p className="cursor-pointer hover:scale-110">Return Policy</p>
          </Link>
          <span>|</span>
          <Link href={"/privacy-policy"}>
            <p className="cursor-pointer hover:scale-110">Privacy Policy</p>
          </Link>
          <span className="hidden sm:contents">|</span>
        </div>
        <div className="flex gap-8 text-white">
          <Link href="https://www.instagram.com/simplywilber/" target="_blank">
            <i className="fa-brands fa-instagram text-xl cursor-pointer hover:scale-110"></i>
          </Link>
          <Link href="https://www.tiktok.com/" target="_blank">
            <i className="fa-brands fa-tiktok text-xl cursor-pointer hover:scale-110"></i>
          </Link>
          <span className="hidden sm:contents">|</span>
        </div>
        <div className="flex text-white text-sm">
          <h1>© {year} Thunder Show </h1>
        </div>
      </div>
    </footer>
  );
}
