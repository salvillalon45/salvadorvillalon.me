// "use client";

// import Wrapper from "../Wrapper";
// import Link from "next/link";
// import Image from "next/image";
// import { cn } from "~/lib/cn";
// import { useEffect, useState } from "react";
// import { Menu } from 'lucide-react';

// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTrigger,
// } from "~/app/_components/ui/dialog"
// import Links from "./Links";

// function NavigationMenu() {
//   const [isMobile, setIsMobile] = useState(false);
//   const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);

//   useEffect(() => {
//     /*
//       this `useEffect` hook sets up a resize listener when the component mounts. 
//       This listener updates the `isMobile` state based on the window width and ensures 
//       the hamburger menu is closed when transitioning to desktop view. 
//       The effect runs once on mount, but the `handleResize` function continues to be called on
//       every window resize due to the event listener. 
//       The cleanup function ensures that the event listener is removed when the component unmounts,
//       preventing potential memory leaks
//     */
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768);
//       if (window.innerWidth >= 768) {
//         setIsHamburgerMenuOpen(false)
//       }
//     }

//     handleResize();

//     window.addEventListener('resize', handleResize);

//     return () => window.removeEventListener('resize', handleResize);
//   }, [])

//   return (
//     <header
//       className={cn(
//         "sticky top-0 z-10 border-b-[1px] border-solid border-neutral-100 bg-white/75 py-2",
//         "sm:py-3 dark:border-neutral-900 dark:bg-black/75",
//       )}
//     >
//       <Wrapper>
//         <nav className="flex items-center justify-between font-semibold">
//           <Link
//             href="/"
//             className="grid grid-flow-col items-center overflow-hidden rounded-full"
//           >
//             <Image
//               alt="Salvador Villalon"
//               className="rounded-full opacity-100"
//               height={32}
//               width={32}
//               src="/profile.jpg"
//               priority
//             />
//           </Link>

//           {isMobile ? (
//             <Dialog open={isHamburgerMenuOpen}>
//               <DialogTrigger asChild>
//                 <button
//                   onClick={() => setIsHamburgerMenuOpen(true)}
//                   aria-label="Open menu"
//                 >
//                   <Menu />
//                 </button>
//               </DialogTrigger>

//               <DialogContent>
//                 <DialogHeader>
//                   <DialogDescription>
//                     <Links
//                       setIsHamburgerMenuOpen={setIsHamburgerMenuOpen}
//                       isHamburgerMenuOpen={isHamburgerMenuOpen}
//                     />
//                   </DialogDescription>
//                 </DialogHeader>
//               </DialogContent>
//             </Dialog>
//           ) :
//             (
//               <div className="flex flex-row-reverse items-center gap-3 sm:flex-row sm:gap-4">
//                 <Links
//                   setIsHamburgerMenuOpen={setIsHamburgerMenuOpen}
//                   isHamburgerMenuOpen={isHamburgerMenuOpen}
//                 />
//               </div>
//             )
//           }
//         </nav>
//       </Wrapper>
//     </header>
//   );
// }
// export default NavigationMenu;
