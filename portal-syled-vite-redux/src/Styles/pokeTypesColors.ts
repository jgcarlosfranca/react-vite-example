interface IColors {
    color: string;
}

interface IPokeStyles {
    bug: IColors
    dark: IColors
    dragon: IColors
    electric: IColors
    fire: IColors
    fairy: IColors
    fighting: IColors
    flying: IColors
    ghost: IColors
    grass: IColors
    ground: IColors
    ice: IColors
    normal: IColors
    poison: IColors
    psychic: IColors
    rock: IColors
    steel: IColors
    water: IColors
}


export const PokeColors: IPokeStyles = {
    bug: {
        color: '#92BC2C',
    },
    dark: {
        color: '#595761',
    },
    dragon: {
        color: '#0C69C8',
    },
    electric: {
        color: '#F2D94E',
    },
    fire: {
        color: '#FBA54C',
    },
    fairy: {
        color: '#EE90E6',
    },
    fighting: {
        color: '#D3425F',
    },
    flying: {
        color: '#A1BBEC',
    },
    ghost: {
        color: '#5F6DBC',
    },
    grass: {
        color: '#5FBD58',
    },
    ground: {
        color: '#DA7C4D',
    },
    ice: {
        color: '#75D0C1',
    },
    normal: {
        color: '#A0A29F',
    },
    poison: {
        color: '#B763CF',
    },
    psychic: {
        color: '#FA8581',
    },
    rock: {
        color: '#C9BB8A',
    },
    steel: {
        color: '#5695A3',
    },
    water: {
        color: '#539DDF',
    },
}