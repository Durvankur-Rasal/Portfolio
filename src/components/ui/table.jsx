import * as React from "react";
import { cn } from "@/lib/utils";

const Table = React.forwardRef((props, ref) => (
  <div className="relative w-full overflow-auto">
    <table ref={ref} className={cn("w-full caption-bottom text-sm")} {...props} />
  </div>
));
Table.displayName = "Table";

const TableHeader = React.forwardRef((props, ref) => (
  <thead ref={ref} className={cn("[&_tr]-b")} {...props} />
));
TableHeader.displayName = "TableHeader";

const TableBody = React.forwardRef((props, ref) => (
  <tbody ref={ref} className={cn("[&_tr-child]-0")} {...props} />
));
TableBody.displayName = "TableBody";

const TableFooter = React.forwardRef((props, ref) => (
  <tfoot ref={ref} className={cn("border-t bg-muted/50 font-medium [&>tr]-b-0")} {...props} />
));
TableFooter.displayName = "TableFooter";

const TableRow = React.forwardRef((props, ref) => (
  <tr ref={ref} className={cn("border-b transition-colors hover-muted/50 data-[state=selected]-muted")} {...props} />
));
TableRow.displayName = "TableRow";

const TableHead = React.forwardRef((props, ref) => (
  <th ref={ref} className={cn("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&([role=checkbox])]-0")} {...props} />
));
TableHead.displayName = "TableHead";

const TableCell = React.forwardRef((props, ref) => (
  <td ref={ref} className={cn("p-4 align-middle [&([role=checkbox])]-0")} {...props} />
));
TableCell.displayName = "TableCell";

const TableCaption = React.forwardRef((props, ref) => (
  <caption ref={ref} className={cn("mt-4 text-sm text-muted-foreground")} {...props} />
));
TableCaption.displayName = "TableCaption";

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
};
