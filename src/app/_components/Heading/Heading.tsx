import { cn } from "~/lib/cn";
import { HeadingSize } from "~/lib/types/types";

interface HeadingProps {
    text: string;
    className?: string;
    size: HeadingSize;
}

function Heading({ text, size, className, }: HeadingProps) {
    let component = null;

    switch (size) {
        case HeadingSize.H1:
            component = <h1 className={cn("text-3xl font-bold", className)}>{text}</h1>;
            break;
        case HeadingSize.H2:
            component = <h2 className={className}>{text}</h2>;
            break;
        case HeadingSize.H3:
            component = <h3 className={className}>{text}</h3>;
            break;
        case HeadingSize.H4:
            component = <h4 className={className}>{text}</h4>;
            break;
        case HeadingSize.H5:
            component = <h5 className={className}>{text}</h5>;
            break;
        case HeadingSize.H6:
            component = <h6 className={className}>{text}</h6>;
            break;
    }

    return component
}

export default Heading