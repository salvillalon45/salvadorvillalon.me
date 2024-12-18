import { cn } from "~/lib/cn";

interface WrapperProps {
  children: Array<JSX.Element> | JSX.Element | React.ReactNode;
}

function Wrapper({ children }: WrapperProps) {
  return (
    <div
      className={cn(
        "wrapper m-[0_auto] max-w-4xl px-6 sm:px-4",
      )}
    >
      {children}
    </div>
  );
}

export default Wrapper;
