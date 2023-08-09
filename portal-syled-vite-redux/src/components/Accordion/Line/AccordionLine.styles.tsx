import styled, { keyframes } from "styled-components";

export const AccordionContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.color.neutra.cinza_texto};
`;

export const AccordionHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
`;

export const AccordionTitle = styled.h3`
  margin: 0;
  font-size: 18px;
`;

export const AccordionIcon = styled.span`
  margin: 2px 10px 0 16px;
`;

const slideAnimation = keyframes`
  0% {
    max-height: 0;
    opacity: 0;
  }
  100% {
    max-height: 1000px;
    opacity: 1;
  }
`;

export const AccordionContent = styled.div<{ isOpen: boolean }>`
  overflow: hidden;
  max-height: ${(props) => (props.isOpen ? "1000px" : "0")};
  opacity: ${(props) => (props.isOpen ? "1" : "0")};
  transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out;
  animation: ${slideAnimation} 0.3s ease-in-out;
`;
