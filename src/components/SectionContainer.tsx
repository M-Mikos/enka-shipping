import clsx from "clsx";

function SectionContainer({ id, children, className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <section id={id} className={clsx("relative w-screen", className)} {...props}>
      {children}
    </section>
  );
}

export default SectionContainer;
