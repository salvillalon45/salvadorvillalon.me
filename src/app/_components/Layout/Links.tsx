import { usePathname } from "next/navigation";
import Link from "./Link";
import { routes } from "~/lib/routes";
import { type RoutesPaths } from "~/lib/types";

interface LinksProps {
  isHamburgerMenuOpen?: boolean;
}

function Links({ isHamburgerMenuOpen }: LinksProps) {
  const links = routes;
  const pathname = usePathname() as RoutesPaths;

  const isIndeterminate = links.every(({ href }) => {
    /*
        This is used when the user lands on the home page.
        All the links in the navigation menu will the have the opactiy-60 style and appear ready to be clicked.
    */
    return href !== pathname;
  });

  return (
    <ul
      className={
        isHamburgerMenuOpen
          ? "margin-0 flex h-full flex-1 flex-col items-center justify-center space-y-5 text-2xl"
          : "group hidden grid-flow-col gap-6 text-sm font-medium sm:grid"
      }
    >
      {links.map(({ href, text }) => (
        <li key={href}>
          <Link
            href={href}
            text={text}
            isActive={href === pathname}
            isIndeterminate={isIndeterminate}
          />
        </li>
      ))}
    </ul>
  );
}

export default Links;
