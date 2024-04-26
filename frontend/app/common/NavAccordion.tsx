import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PropsWithChildren } from "react";

type props = {
  title: string | React.ReactNode;
  readonly className?: string;
  props?: any;
};

const NavAccordion: React.FC<props & Partial<PropsWithChildren>> = ({
  title,
  className,
  children,
  ...props
}) => {
  return (
    <Accordion type="single" {...props} collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>{title}</AccordionTrigger>
        <AccordionContent>{children}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default NavAccordion;
