function SectionContainer({ id, children, className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <section id={id} className={"relative w-screen " + (className ? className : "")} {...props}>
      {children}
    </section>
  );
}

export default SectionContainer;
