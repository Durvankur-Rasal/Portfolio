import * as SheetPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";

const Sheet = SheetPrimitive.Root;
const SheetTrigger = SheetPrimitive.Trigger;
const SheetClose = SheetPrimitive.Close;
const SheetPortal = SheetPrimitive.Portal;

const SheetOverlay = React.forwardRef((props, ref) => {
  const { className, ...restProps } = props;
  return (
    <SheetPrimitive.Overlay
      ref={ref}
      className={cn(
        "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out",
        className
      )}
      {...restProps}
    />
  );
});
SheetOverlay.displayName = "SheetOverlay";

const SheetContent = React.forwardRef((props, ref) => {
  const { side = "right", className, children, ...restProps } = props;

  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Content
        ref={ref}
        className={cn(
          "fixed z-50 bg-background p-6 shadow-lg transition ease-in-out",
          {
            "inset-x-0 top-0 border-b": side === "top",
            "inset-x-0 bottom-0 border-t": side === "bottom",
            "inset-y-0 left-0 h-full w-3/4 border-r sm:w-sm": side === "left",
            "inset-y-0 right-0 h-full w-3/4 border-l sm:w-sm": side === "right",
          },
          className
        )}
        {...restProps}
      >
        {children}
        <SheetPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100">
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </SheetPrimitive.Close>
      </SheetPrimitive.Content>
    </SheetPortal>
  );
});
SheetContent.displayName = "SheetContent";

const SheetHeader = ({ className, ...props }) => (
  <div className={cn("flex flex-col space-y-2 text-center sm:text-left", className)} {...props} />
);
SheetHeader.displayName = "SheetHeader";

const SheetFooter = ({ className, ...props }) => (
  <div className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)} {...props} />
);
SheetFooter.displayName = "SheetFooter";

const SheetTitle = React.forwardRef((props, ref) => {
  const { className, ...restProps } = props;
  return (
    <SheetPrimitive.Title ref={ref} className={cn("text-lg font-semibold text-foreground", className)} {...restProps} />
  );
});
SheetTitle.displayName = "SheetTitle";

const SheetDescription = React.forwardRef((props, ref) => {
  const { className, ...restProps } = props;
  return (
    <SheetPrimitive.Description ref={ref} className={cn("text-sm text-muted-foreground", className)} {...restProps} />
  );
});
SheetDescription.displayName = "SheetDescription";

export {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetOverlay,
  SheetPortal,
  SheetTitle,
  SheetTrigger,
};
