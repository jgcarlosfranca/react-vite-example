// import { ReactComponent as AlertMenu } from "../../assets/icons/Notification_13.svg";

interface IIconProps {
    onClick?: () => void;
    name: string;
    height?: string;
    width?: string;
    fill?: string;
    stroke?: string;
}

const IconSVG: React.FC<IIconProps> = () => {
    return <></>
}

export const Icon = ({
    name,
    height = "20px",
    width,
    fill = "transparent",
    stroke,
    onClick,
}: IIconProps) => {
    switch (name) {
        case "iconName":
            return (
                <IconSVG
                    name="não usa"
                    fill={fill}
                    stroke={stroke}
                    width={width}
                    height={height}
                    onClick={onClick}
                />
            );

        default:
            return <></>;
    }
};
