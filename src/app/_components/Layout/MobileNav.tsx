"use client";

import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { Menu } from "lucide-react";
import Links from "./Links";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "~/app/_components/ui/dialog"
import { useEffect, useState, } from "react";
import { inAppRoutesArray } from "~/lib/routes";

function MobileNav() {
    const [isMounted, setIsMounted] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) return null

    const handleLinkClick = () => {
        setIsOpen(false)
    }

    return (
        <div className="md:hidden">
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogTrigger asChild>
                    <button
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                    >
                        <Menu />
                    </button>
                </DialogTrigger >
                <DialogContent>
                    <DialogHeader>
                        <VisuallyHidden.Root asChild>
                            <DialogTitle>Menu</DialogTitle>
                        </VisuallyHidden.Root>

                        <div>
                            <Links routes={inAppRoutesArray} isMobile onLinkClick={handleLinkClick} />
                        </div>
                    </DialogHeader>
                </DialogContent>
            </Dialog >
        </div>
    )
}

export default MobileNav