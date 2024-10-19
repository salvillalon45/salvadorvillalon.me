import { cx, type ClassName } from "classix";
import { twMerge } from "tailwind-merge";

// const cn = (...args: Array<ClassName>) => twMerge(cx(...args))!;

// function cn(...args: ClassName[]) {
//   return twMerge(cx(args));
// }

const cn = (...args: Array<ClassName>): string => {
  const mergedClassNames = twMerge(cx(...args)) as string;

  if (mergedClassNames == null || mergedClassNames === undefined) {
    throw new Error("Failed to merge class names");
  }
  return mergedClassNames;
};

export default cn;
