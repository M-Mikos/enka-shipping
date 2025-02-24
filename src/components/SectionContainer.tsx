import Image, { StaticImageData } from "next/image";

interface SectionContainerProps extends React.HTMLAttributes<HTMLElement> {
  backgroundImage?: {
    src: StaticImageData;
    width: number;
    height: number;
    alt: string;
    classes?: string;
    priority?: boolean;
  };
}

function SectionContainer({ id, children, className, backgroundImage, ...props }: SectionContainerProps) {
  return (
    <section id={id} className={"relative w-screen " + (className ? className : "")} {...props}>
      {children}
      {backgroundImage ? (
        <Image
          className={
            "absolute inset-0 w-full h-full object-cover -z-1 " +
            (backgroundImage.classes ? backgroundImage.classes : "")
          }
          src={backgroundImage.src}
          width={backgroundImage.width}
          height={backgroundImage.height}
          alt={backgroundImage.alt}
          priority={backgroundImage.priority}
          sizes="100vw"
        />
      ) : (
        ""
      )}
    </section>
  );
}

export default SectionContainer;
