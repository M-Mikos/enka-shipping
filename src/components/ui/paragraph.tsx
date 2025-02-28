import * as React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "lib/utils";
import { Slot } from "@radix-ui/react-slot";

const paragraphVariants = cva("", {
  variants: {
    variant: {
      large: "text-lg xl:text-xl",
      base: "text-base xl:text-lg",
      small: "text-sm xl:text-base",
      xs: "text-xs xl:sm",
    },
    shade: {
      light: "text-slate-300",
      dark: "text-slate-600",
    },
  },
  defaultVariants: {
    variant: "base",
    shade: "dark",
  },
});

export interface ParagraphProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof paragraphVariants> {
  asChild?: boolean;
}

const Paragraph = React.forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ className, variant = "base", shade, asChild = false, ...props }, ref) => {
    const Comp: React.ElementType = asChild ? Slot : "p";

    return (
      <Comp
        className={cn(paragraphVariants({ variant, shade, className }))}
        ref={asChild ? ref : (ref as React.Ref<HTMLParagraphElement>)}
        {...props}
      />
    );
  }
);

Paragraph.displayName = "Paragraph";

export { Paragraph, paragraphVariants };
