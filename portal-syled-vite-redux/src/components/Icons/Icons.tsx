import { ReactComponent as Bug } from "@/icons/PokeTypes/bug.svg";
import { ReactComponent as Dark } from "@/icons/PokeTypes/dark.svg";
import { ReactComponent as Dragon } from "@/icons/PokeTypes/dragon.svg";
import { ReactComponent as Electric } from "@/icons/PokeTypes/electric.svg";
import { ReactComponent as Fairy } from "@/icons/PokeTypes/fairy.svg";
import { ReactComponent as Fighting } from "@/icons/PokeTypes/fighting.svg";
import { ReactComponent as Fire } from "@/icons/PokeTypes/fire.svg";
import { ReactComponent as Flying } from "@/icons/PokeTypes/flying.svg";
import { ReactComponent as Ghost } from "@/icons/PokeTypes/ghost.svg";
import { ReactComponent as Grass } from "@/icons/PokeTypes/grass.svg";
import { ReactComponent as Ground } from "@/icons/PokeTypes/ground.svg";
import { ReactComponent as Ice } from "@/icons/PokeTypes/ice.svg";
import { ReactComponent as Normal } from "@/icons/PokeTypes/normal.svg";
import { ReactComponent as Poison } from "@/icons/PokeTypes/poison.svg";
import { ReactComponent as Psyschic } from "@/icons/PokeTypes/psychic.svg";
import { ReactComponent as Rock } from "@/icons/PokeTypes/rock.svg";
import { ReactComponent as Steel } from "@/icons/PokeTypes/steel.svg";
import { ReactComponent as Water } from "@/icons/PokeTypes/water.svg";

interface IIconProps {
    onClick?: () => void;
    name: string;
    height?: string;
    width?: string;
    fill?: string;
    stroke?: string;
}

export const Icon: React.FC<IIconProps> = ({
    name,
    height = "20px",
    width,
    fill = "transparent",
    stroke,
    onClick,
}: IIconProps) => {
    switch (name) {
        case "pokeBug":
            return (
                <Bug
                    fill={fill}
                    stroke={stroke}
                    width={width}
                    height={height}
                    onClick={onClick}
                />
            );
        case "pokeDark":
            return (
                <Dark
                    fill={fill}
                    stroke={stroke}
                    width={width}
                    height={height}
                    onClick={onClick}
                />
            );
        case "pokeDragon":
            return (
                <Dragon
                    fill={fill}
                    stroke={stroke}
                    width={width}
                    height={height}
                    onClick={onClick}
                />
            );
        case "pokeElectric":
            return (
                <Electric
                    fill={fill}
                    stroke={stroke}
                    width={width}
                    height={height}
                    onClick={onClick}
                />
            );
        case "pokeFairy":
            return (
                <Fairy
                    fill={fill}
                    stroke={stroke}
                    width={width}
                    height={height}
                    onClick={onClick}
                />
            );
        case "pokeFighting":
            return (
                <Fighting
                    fill={fill}
                    stroke={stroke}
                    width={width}
                    height={height}
                    onClick={onClick}
                />
            );
        case "pokeFire":
            return (
                <Fire
                    fill={fill}
                    stroke={stroke}
                    width={width}
                    height={height}
                    onClick={onClick}
                />
            );
        case "pokeFlying":
            return (
                <Flying
                    fill={fill}
                    stroke={stroke}
                    width={width}
                    height={height}
                    onClick={onClick}
                />
            );
        case "pokeGhost":
            return (
                <Ghost
                    fill={fill}
                    stroke={stroke}
                    width={width}
                    height={height}
                    onClick={onClick}
                />
            );
        case "pokeGrass":
            return (
                <Grass
                    fill={fill}
                    stroke={stroke}
                    width={width}
                    height={height}
                    onClick={onClick}
                />
            );
        case "pokeGround":
            return (
                <Ground
                    fill={fill}
                    stroke={stroke}
                    width={width}
                    height={height}
                    onClick={onClick}
                />
            );
        case "pokeIce":
            return (
                <Ice
                    fill={fill}
                    stroke={stroke}
                    width={width}
                    height={height}
                    onClick={onClick}
                />
            );
        case "pokeNormal":
            return (
                <Normal
                    fill={fill}
                    stroke={stroke}
                    width={width}
                    height={height}
                    onClick={onClick}
                />
            );
        case "pokePoison":
            return (
                <Poison
                    fill={fill}
                    stroke={stroke}
                    width={width}
                    height={height}
                    onClick={onClick}
                />
            );
        case "pokePsychic":
            return (
                <Psyschic
                    fill={fill}
                    stroke={stroke}
                    width={width}
                    height={height}
                    onClick={onClick}
                />
            );
        case "pokeRock":
            return (
                <Rock
                    fill={fill}
                    stroke={stroke}
                    width={width}
                    height={height}
                    onClick={onClick}
                />
            );
        case "pokeSteel":
            return (
                <Steel
                    fill={fill}
                    stroke={stroke}
                    width={width}
                    height={height}
                    onClick={onClick}
                />
            );
        case "pokeWater":
            return (
                <Water
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
