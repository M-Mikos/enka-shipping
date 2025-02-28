import clsx from "clsx";

export default function ContentContainer({ children, className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <div
      className={clsx("mx-auto  w-full px-2 sm:px-4 md:px-6 lg:px-24 lg:container 3xl:px-36 4xl:px-96", className)}
      {...props}
    >
      {children}
    </div>
  );
}
