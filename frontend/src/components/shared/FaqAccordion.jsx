import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FaqAccordion({ items }) {
  return (
    <Accordion type="single" collapsible className="border-t border-hairline">
      {items.map((f, i) => (
        <AccordionItem
          key={i}
          value={`faq-${i}`}
          className="border-b border-hairline"
          data-testid={`faq-item-${i}`}
        >
          <AccordionTrigger className="py-6 text-left font-display text-lg font-medium text-ink hover:text-terracotta hover:no-underline">
            {f.q}
          </AccordionTrigger>
          <AccordionContent className="pb-6 text-base leading-relaxed text-ink/70">
            {f.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
