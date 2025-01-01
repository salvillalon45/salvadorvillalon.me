import { inAppRoutesArray } from "~/lib/routes";
import Links from "./Links";

function DesktopNav() {
    return (
        <div className="hidden md:flex flex-row-reverse items-center gap-3 sm:flex-row sm:gap-4">
            <Links routes={inAppRoutesArray} />
        </div>
    );
}

export default DesktopNav;