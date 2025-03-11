import { ReactNode } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface LightboxDialogProps {
  isOpen: boolean;
  handleDialogOpenChange: (open: boolean) => void;
  children: ReactNode;
}

function LightboxDialog({ isOpen = false, handleDialogOpenChange, children }: LightboxDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={handleDialogOpenChange}>
      <DialogContent
        className="sm:max-w-full w-full h-full bg-transparent border-0 rounded-none p-0"
        defaultCloseButton={false}
      >
        <VisuallyHidden>
          <DialogHeader>
            <DialogTitle>See gallery</DialogTitle>
          </DialogHeader>
        </VisuallyHidden>
        {children}
      </DialogContent>
    </Dialog>
  );
}

export default LightboxDialog;
