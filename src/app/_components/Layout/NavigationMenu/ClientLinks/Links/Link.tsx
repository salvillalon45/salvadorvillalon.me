import NextLink from "next/link";

interface LinkProps {
  href: string;
  text: string;
  isActive: boolean;
  isIndeterminate: boolean;
}

function Link({ href, text, isActive, isIndeterminate }: LinkProps) {
  const style = `${
    isIndeterminate
      ? "hover:opacity-60"
      : isActive
        ? "opacity-100"
        : "opacity-50 hover:opacity-100"
  } transition-opacity`;
  // console.log({ text, href, res: href.startsWith("/") });
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
    <NextLink href={href} className={style}>
      {text}
    </NextLink>
  );
}

export default Link;
