"use client";

import { History } from 'lucide-react';
import Wrapper from "../Wrapper";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTrigger, } from "~/app/_components/ui/dialog"
import { externalRoutesArray } from '~/lib/routes';
import { DialogTitle } from '@radix-ui/react-dialog';
import AnchorLink from '../AnchorLink';

function Footer() {
    return (
        <footer>
            <hr className="mt-8 border-neutral-100 dark:border-neutral-800" />

            <Wrapper>
                <div className="flex items-center justify-between px-1 py-4 text-sm text-neutral-500">
                    <span>Salvador Villalon © {new Date().getFullYear()}</span>

                    <div className="flex items-center">
                        <a
                            href="/follow/github"
                            target="_blank"
                            aria-label="Visit my GitHub"
                            rel="noreferrer"
                            className="p-3 text-neutral-500 transition-colors hover:text-neutral-800 dark:hover:text-neutral-300"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 23 23"
                            >
                                <path
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    d="M11.2941176,0.279031142 C5.08235294,0.279031142 0,5.3015917 0,11.4402768 C0,16.3233218 3.24705882,20.5087889 7.76470588,22.0434602 C8.32941176,22.1829758 8.47058824,21.7644291 8.47058824,21.4853979 C8.47058824,21.2063668 8.47058824,20.5087889 8.47058824,19.5321799 C5.36470588,20.2297578 4.65882353,18.1370242 4.65882353,18.1370242 C4.09411765,16.8813841 3.38823529,16.4628374 3.38823529,16.4628374 C2.4,15.7652595 3.52941176,15.7652595 3.52941176,15.7652595 C4.65882353,15.9047751 5.22352941,16.8813841 5.22352941,16.8813841 C6.21176471,18.6950865 7.90588235,18.1370242 8.47058824,17.8579931 C8.61176471,17.1604152 8.89411765,16.6023529 9.17647059,16.3233218 C6.63529412,16.0442907 4.09411765,15.0676817 4.09411765,10.742699 C4.09411765,9.48705882 4.51764706,8.51044983 5.22352941,7.81287197 C5.08235294,7.53384083 4.65882353,6.41771626 5.36470588,4.88304498 C5.36470588,4.88304498 6.35294118,4.60401384 8.47058824,5.99916955 C9.31764706,5.72013841 10.3058824,5.58062284 11.2941176,5.58062284 C12.2823529,5.58062284 13.2705882,5.72013841 14.1176471,5.99916955 C16.2352941,4.60401384 17.2235294,4.88304498 17.2235294,4.88304498 C17.7882353,6.41771626 17.5058824,7.53384083 17.3647059,7.81287197 C18.0705882,8.6499654 18.4941176,9.62657439 18.4941176,10.742699 C18.4941176,15.0676817 15.8117647,15.9047751 13.2705882,16.1838062 C13.6941176,16.7418685 14.1176471,17.4394464 14.1176471,18.4160554 C14.1176471,19.9507266 14.1176471,21.0668512 14.1176471,21.4853979 C14.1176471,21.7644291 14.2588235,22.1829758 14.9647059,22.0434602 C19.4823529,20.5087889 22.7294118,16.3233218 22.7294118,11.4402768 C22.5882353,5.3015917 17.5058824,0.279031142 11.2941176,0.279031142 Z"
                                />
                            </svg>
                        </a>

                        <a
                            href="/follow/linkedin"
                            target="_blank"
                            aria-label="Visit my LinkedIn"
                            rel="noreferrer"
                            className="p-3 text-neutral-500 transition-colors hover:text-neutral-800 dark:hover:text-neutral-300"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 23 23"
                            >
                                <path
                                    fill="currentColor"
                                    d="M21.6,0 L0.988235294,0 C0.423529412,0 0,0.418546713 0,0.976608997 L0,21.4853979 C0,21.9039446 0.423529412,22.3224913 0.988235294,22.3224913 L21.7411765,22.3224913 C22.3058824,22.3224913 22.7294118,21.9039446 22.7294118,21.3458824 L22.7294118,0.976608997 C22.5882353,0.418546713 22.1647059,0 21.6,0 Z M6.63529412,18.9741176 L3.38823529,18.9741176 L3.38823529,8.37093426 L6.77647059,8.37093426 L6.77647059,18.9741176 L6.63529412,18.9741176 Z M5.08235294,6.97577855 C3.95294118,6.97577855 3.10588235,5.99916955 3.10588235,5.02256055 C3.10588235,3.90643599 3.95294118,3.06934256 5.08235294,3.06934256 C6.21176471,3.06934256 7.05882353,3.90643599 7.05882353,5.02256055 C6.91764706,5.99916955 6.07058824,6.97577855 5.08235294,6.97577855 Z M19.2,18.9741176 L15.8117647,18.9741176 L15.8117647,13.8120415 C15.8117647,12.5564014 15.8117647,11.0217301 14.1176471,11.0217301 C12.4235294,11.0217301 12.1411765,12.4168858 12.1411765,13.8120415 L12.1411765,19.1136332 L8.75294118,19.1136332 L8.75294118,8.37093426 L12,8.37093426 L12,9.76608997 C12.4235294,8.92899654 13.5529412,8.09190311 15.1058824,8.09190311 C18.4941176,8.09190311 19.0588235,10.3241522 19.0588235,13.1144637 L19.0588235,18.9741176 L19.2,18.9741176 Z"
                                />
                            </svg>
                        </a>

                        <Dialog>
                            <DialogTrigger asChild className='flex gap-1 items-center'>
                                <button>
                                    <History /> Travel to the past
                                </button>
                            </DialogTrigger >

                            <DialogContent>
                                <DialogHeader className='grid gap-2 justify-center'>
                                    <DialogTitle className='text-xl'>Go back in time...</DialogTitle>
                                    <DialogDescription>
                                        <ul className='flex flex-col items-center gap-1 text-xl font-bold'>
                                            {externalRoutesArray.map(({ href, text, }) => (
                                                <li key={href}>
                                                    <AnchorLink
                                                        href={href}
                                                        text={text}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    />
                                                </li>
                                            ))}
                                        </ul>
                                    </DialogDescription>
                                </DialogHeader>
                            </DialogContent>
                        </Dialog>
                    </div>
                </div>
            </Wrapper>
        </footer>
    );
}

export default Footer;
