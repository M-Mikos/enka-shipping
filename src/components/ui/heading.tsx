import * as React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "lib/utils";
import { Slot } from "@radix-ui/react-slot";

const tagMap: Record<string, keyof React.JSX.IntrinsicElements> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
};

const defaultTag = "h2";

const headingVariants = cva("", {
  variants: {
    variant: {
      h1: "text-4xl lg:text-5xl 3xl:text-7xl font-extrabold tracking-wide leading-[1.05] mb-6 lg:mb-8 3xl:mb-12",
      h2: "text-2xl lg:text-4xl 3xl:text-6xl font-extrabold leading-none tracking-wide mb-6 lg:mb-8 3xl:mb-12",
      h3: "text-lg 3xl:text-xl font-semibold mb-4",
    },
    shade: {
      light: "text-white",
      dark: "text-slate-950",
    },
  },
  defaultVariants: {
    variant: defaultTag,
    shade: "dark",
  },
});

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement>, VariantProps<typeof headingVariants> {
  asChild?: boolean;
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, variant = defaultTag, shade, asChild = false, ...props }, ref) => {
    const Comp: React.ElementType = asChild ? Slot : tagMap[variant || defaultTag];

    return (
      <Comp
        className={cn(headingVariants({ variant, shade, className }))}
        ref={asChild ? ref : (ref as React.Ref<HTMLHeadingElement>)}
        {...props}
      />
    );
  }
);

Heading.displayName = "Heading";

export { Heading, headingVariants };
