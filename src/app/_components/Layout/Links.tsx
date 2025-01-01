"use client";

import { usePathname } from "next/navigation";
import Link from "./Link";
import { type Routes } from "~/lib/types";

interface LinksProps {
  isMobile?: boolean;
  onLinkClick?: () => void;
  routes: Routes
}

function Links({ isMobile, onLinkClick, routes }: LinksProps) {
  const links = routes;
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
        isMobile
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
            onLinkClick={onLinkClick}
          />
        </li>
      ))}
    </ul>
  );
}

export default Links;
