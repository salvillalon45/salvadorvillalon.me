import { usePathname } from "next/navigation";
import Link from "./Link";

interface LinksProps {
  isHamburgerOpen?: boolean;
  links: Array<{
    href: string;
    text: string;
  }>;
}

function Links({ links, isHamburgerOpen }: LinksProps) {
  const pathname = usePathname();

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
        isHamburgerOpen
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
