import "~/styles/globals.css";

import localFont from "next/font/local";
import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";

import { cn } from "~/lib/cn";
import PageLayout from "./_components/Layout/PageLayout";

export const metadata: Metadata = {
  title: {
    absolute: "Salvador Villalon – Best Engineer",
    template: "Salvador Villalon – %s",
  },
  description:
    "I'm a Full - Stack Engineer based in SoCal, that loves to code and " +
    "build products with a delightful user experience." +
    "I love working in between product, engineering and developer experience.",
  metadataBase: new URL("https://salvador-villalon.vercel.app/"),
  openGraph: {
    type: "website",
    locale: "en-US",
    siteName: "Salvador Villalon",
    url: "https://salvador-villalon.vercel.app/",
  },
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const font = localFont({
  src: [
    {
      path: "../../public/fonts/inter.var.latin.woff2",
      style: "normal",
    },
    {
      path: "../../public/fonts/inter.var.latin.italic.woff2",
      style: "italic",
    },
  ],
  weight: "100 900",
  display: "swap",
  declarations: [
    {
      prop: "unicode-range",
      value:
        "U+00??, U+0131, U+0152-0153, U+02bb-02bc, U+02c6, U+02da, U+02dc, U+2000-206f, U+2074, U+20ac, U+2122, U+2191, U+2193, U+2212, U+2215, U+feff, U+fffd",
    },
  ],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${font.className}`}>
      <body
        className={cn(
          "root-layout bg-white text-neutral-800 dark:bg-[rgb(5,5,5)] dark:text-neutral-200",
          "flex min-h-screen flex-col",
        )}
      >
        <TRPCReactProvider>
          <PageLayout>{children}</PageLayout>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
