import { useState } from "react";
import {
  AccordionContainer,
  AccordionHeader,
  AccordionIcon,
  AccordionContent,
  AccordionTitle,
} from "./AccordionLine.styles";

interface IAccordionProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

const Accordion: React.FC<IAccordionProps> = ({ title, icon, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AccordionContainer>
      <AccordionHeader onClick={toggleAccordion}>
        <AccordionTitle>{title}</AccordionTitle>
        <AccordionIcon>{icon}</AccordionIcon>
      </AccordionHeader>
      <AccordionContent isOpen={isOpen}>{children}</AccordionContent>
    </AccordionContainer>
  );
};

export default Accordion;
