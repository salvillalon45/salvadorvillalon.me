"use client";

import Links from "./Links";

interface ClientLinksProps {
  isHamburgerMenuOpen?: boolean;
}

function ClientLinks({ isHamburgerMenuOpen }: ClientLinksProps) {
  console.log('inclientlinks', { isHamburgerMenuOpen })
  return (
    <Links
      isHamburgerMenuOpen={isHamburgerMenuOpen}
      links={[
        { href: "/", text: "Home" },
        { href: "/about", text: "About" },
        { href: "/blog", text: "Blog" },
        { href: "/experience", text: "Experience" },
      ]}
    />
  );
}

export default ClientLinks;
