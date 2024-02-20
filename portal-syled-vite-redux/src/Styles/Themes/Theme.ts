//########## font https://pokepalettes.com/
interface ISystemColorsStyles {
  color: {

    primaria: {
      vermelho_fire: string,
      semiTransparentblue: string,
      blue: string,
    },
    secundaria: {
      gray: string,
      semiTransparentGray: string,

    },
    apoio: {},
    alerta: { sucesso: string, erro: string, alerta: string },
    neutra: {
      neutra_background: string,
      cinza_linhas: string,
      cinza_texto: string,
      cinza_icones: string,
      cinza_fundo: string,
      cinza_field_background: string,
      preta: string,
      branca: string,
      transparent: string,
      label_cinza: string,
    },
    opacity50: {
    },
  }
}


const Theme: ISystemColorsStyles = {
  color: {
    primaria: {
      vermelho_fire: "#de5239",
      semiTransparentblue: '#2E4362',
      blue: '#2E4399',
    },
    secundaria: {
      gray: '#f0f8ff81',
      semiTransparentGray: '#f0f8ff81',

    },
    apoio: {},
    alerta: { sucesso: "#73ac31", erro: "#e63900", alerta: "#f6e652" },
    neutra: {
      neutra_background: "#F9F9F9",
      cinza_linhas: "#CCCCCC",
      cinza_texto: "#666666",
      cinza_icones: "#DDDDDD",
      cinza_fundo: "#F7F7F7",
      cinza_field_background: "#EEEEEE",
      preta: "#000",
      branca: "#FFFFFF",
      transparent: "#FFF0",
      label_cinza: "#6a6a65",
    },
    opacity50: {
    },
  },
};

export default Theme;
