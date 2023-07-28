import styled, { keyframes } from "styled-components";


interface ITypingWrapperProps {
    length: string;
}

const typingAnimation = keyframes`
   from {
        width: 0;
    }
`;

const blinkAnimation = keyframes`
    50% {
        border-color: transparent;
    }
`;

const rotationAnimationGearDark = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const rotationAnimationGearSub = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
`;
const rotationAnimationGearPurple = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const TypingWrapper = styled.span<ITypingWrapperProps>`
  width: 12ch;
  display: flex;
  margin-top: 1.5rem;
  color: '#aea5';
  animation: ${typingAnimation} 3.11s steps(50) infinite,
    ${blinkAnimation} 0.5s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid;
  font-size: 2rem;
`;

export const LoadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 75vh;
  justify-content: center;
  align-items: center;
`;

export const GearsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const GearsDark = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${rotationAnimationGearDark} 2s linear infinite;
`;

export const GearsPurple = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${rotationAnimationGearPurple} 4s linear infinite;
`;

export const GearsSubstract = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${rotationAnimationGearSub} 5s linear infinite;
`;
