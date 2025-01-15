import NextLink from "next/link";

interface LinkProps {
  href: string;
  text: string;
  isActive: boolean;
  isIndeterminate: boolean;
  onLinkClick?: () => void;
}

function Link({ href, text, isActive, isIndeterminate, onLinkClick }: LinkProps) {
  const style = `${isIndeterminate
    ? "hover:opacity-60"
    : isActive
      ? "opacity-100"
      : "opacity-50 hover:opacity-100"
    } transition-opacity`;

  // if (!href.startsWith("/")) {
  //   console.log("inside if");
  //   return (
  //     <a
  //       className={style}
  //       href={href}
  //       target="_blank"
  //       rel="noopener noreferrer"
  //     >
  //       {text}
  //     </a>
  //   );
  // }

  return (
    <NextLink href={href} className={style} onClick={onLinkClick}>
      {text}
    </NextLink>
  );
}

export default Link;
