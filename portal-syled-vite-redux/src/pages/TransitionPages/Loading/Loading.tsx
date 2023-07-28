import {
    TypingWrapper,
    LoadingWrapper,
    GearsWrapper,
    GearsSubstract,
    GearsDark,
    GearsPurple,
} from "./Loading.styles";

interface ITypingAnimationProps {
    text: string;
    textLength: string;
}

const Loading: React.FC<ITypingAnimationProps> = ({ text, textLength }) => {
    return (
        <LoadingWrapper>
            <GearsWrapper>
                <GearsDark>

                </GearsDark>
                <GearsPurple>

                </GearsPurple>
                <GearsSubstract>

                </GearsSubstract>
            </GearsWrapper>
            <TypingWrapper length={textLength}>{text}</TypingWrapper>
        </LoadingWrapper>
    );
};

export default Loading;