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
      h1: "text-3xl lg:text-5xl 3xl:text-7xl font-extrabold tracking-wide leading-[1.05]",
      h2: "text-2xl lg:text-4xl 3xl:text-6xl font-extrabold leading-none tracking-wide mb-12",
      h3: "text-xl lg:text-2xl 3xl:text-3xl font-semibold mb-4",
      h4: "text-3xl lg:text-5xl 3xl:text-7xl font-extrabold tracking-wide leading-[1.05]",
    },
    background: {
      dark: "text-white",
      light: "text-slate-950",
    },
  },
  defaultVariants: {
    variant: defaultTag,
    background: "light",
  },
});

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement>, VariantProps<typeof headingVariants> {
  asChild?: boolean;
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, variant = defaultTag, background, asChild = false, ...props }, ref) => {
    const Comp: React.ElementType = asChild ? Slot : tagMap[variant || defaultTag];

    return (
      <Comp
        className={cn(headingVariants({ variant, background, className }))}
        ref={asChild ? ref : (ref as React.Ref<HTMLHeadingElement>)}
        {...props}
      />
    );
  }
);

Heading.displayName = "Heading";

export { Heading, headingVariants };
