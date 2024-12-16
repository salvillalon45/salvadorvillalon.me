"use client";

import Links from "./Links";

function ClientLinks() {
  return (
    <Links
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
