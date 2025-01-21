/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

// import withPlaiceholder from "@plaiceholder/next";
// import withPWA from "next-pwa";
import createMDX from '@next/mdx'

// const cspHeader = `
//     default-src 'self';
//     script-src 'self' 'unsafe-eval' 'unsafe-inline';
//     style-src 'self' 'unsafe-inline';
//     img-src 'self' blob: data: res.cloudinary.com;
//     font-src 'self';
//     object-src 'none';
//     base-uri 'self';
//     form-action 'self';
//     frame-ancestors 'none';
//     frame-src https://codesandbox.io https://youtube.com https://stackblitz.com https://*.staticblitz.com;
//     ${process.env.NODE_ENV === "development" ? "" : "upgrade-insecure-requests"};
// `;

// const plaiceholderConfig = withPlaiceholder({
//   experimental: {
//     // https://beta.nextjs.org/docs/api-reference/next-config#servercomponentsexternalpackages
//     serverComponentsExternalPackages: ["uglify-js", "plaiceholder"],
//   },
//   redirects: async () => [
//     {
//       source: "/follow/linkedin",
//       destination: "https://www.linkedin.com/in/salvadorvillalon",
//       permanent: true,
//     },
//     {
//       source: "/follow/github",
//       destination: "https://github.com/salvillalon45",
//       permanent: true,
//     },
//     {
//       source: "/follow/freecodecamp",
//       destination: "https://www.freecodecamp.org/news/author/salvadorvillalon/",
//       permanent: true,
//     },
//     {
//       source: "/follow/strava",
//       destination: "https://www.strava.com/athletes/125519279",
//       permanent: true,
//     },
//   ],
//   headers: async () => [
//     {
//       source: "/(.*)",
//       headers: [
//         {
//           key: "Content-Security-Policy",
//           value: cspHeader.replace(/\n/g, ""),
//         },
//         {
//           key: "X-Content-Type-Options",
//           value: "nosniff",
//         },
//         {
//           key: "Referrer-Policy",
//           value: "origin-when-cross-origin",
//         },
//       ],
//     },
//   ],
// });

// const pwaConfig = withPWA({
//   disable: process.env.NODE_ENV === "development",
//   dest: "public",
// });


// MXD Configuration
const nextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
}

const withMDX = createMDX({})
const mdxConfig = withMDX(nextConfig)

/** @type {import("next").NextConfig} */
const config = {
  // ...plaiceholderConfig,
  // ...pwaConfig,
  ...mdxConfig
};

export default config;