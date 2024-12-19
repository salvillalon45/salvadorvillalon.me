import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import Link from "next/link"
import Image from "next/image"
import Wrapper from "../Wrapper"
import { cn } from "~/lib/cn"
import MobileNav from './MobileNav'
import DesktopNav from './DesktopNav'

// const MobileNav = dynamic(() => import('./MobileNav'), { ssr: false })
// const DesktopNav = dynamic(() => import('./DesktopNav'))

function NavigationMenu() {
    return (
        <header
            className={cn(
                "sticky top-0 z-10 border-b-[1px] border-solid border-neutral-100 bg-white/75 py-2",
                "sm:py-3 dark:border-neutral-900 dark:bg-black/75",
            )}
        >
            <Wrapper>
                <nav className="flex items-center justify-between font-semibold">
                    <Link
                        href="/"
                        className="grid grid-flow-col items-center overflow-hidden rounded-full"
                    >
                        <Image
                            alt="Salvador Villalon"
                            className="rounded-full opacity-100"
                            height={32}
                            width={32}
                            src="/profile.jpg"
                            priority
                        />
                    </Link>
                    {/* <Suspense fallback={<div>Loading...</div>}> */}
                    <MobileNav />
                    <DesktopNav />
                    {/* </Suspense> */}
                </nav>
            </Wrapper>
        </header>
    )
}

export default NavigationMenu