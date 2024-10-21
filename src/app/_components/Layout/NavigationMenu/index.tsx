import cn from "utils/cn";
import Wrapper from "../../Wrapper";
import Link from "next/link";
import Image from "next/image";
import ClientLinks from "./ClientLinks";

function NavigationMenu() {
  return (
    <header
      className={cn(
        "sticky top-0 z-10 border-b-[1px] border-solid border-neutral-100 bg-white/75 py-2",
        "sm:py-3 dark:border-neutral-900 dark:bg-black/75",
        // isHamburgerOpen ? "" : "backdrop-blur-xl",
      )}
    >
      <Wrapper>
        <nav className="flex items-center justify-between font-semibold">
          <Link
            href="/"
            className="grid grid-flow-col items-center overflow-hidden rounded-full"
          >
            <Image
              alt="Salvador Villalon"
              className="rounded-full opacity-100"
              height={32}
              width={32}
              src="/profile.jpg"
              priority
            />
          </Link>

          <div className="flex flex-row-reverse items-center gap-3 sm:flex-row sm:gap-4">
            <ClientLinks />
          </div>
        </nav>
      </Wrapper>
    </header>
  );
}
export default NavigationMenu;