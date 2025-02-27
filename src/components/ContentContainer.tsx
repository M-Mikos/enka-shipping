export default function ContentContainer({ children, className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <div className={"mx-auto px-3 xl:px-24 w-full lg:container " + (className ? className : "")} {...props}>
      {children}
    </div>
  );
}
