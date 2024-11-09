"use client";

import Links from "./Links";

function ClientLinks() {
  return (
    <Links
      links={[
        { href: "/about", text: "About" },
        { href: "/experience", text: "Experience" },
        { href: "/blog", text: "Blog" },
      ]}
    />
  );
}

export default ClientLinks;
