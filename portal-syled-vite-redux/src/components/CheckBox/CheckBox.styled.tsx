import styled from "styled-components";


export const CheckboxWrapper = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-right: 20px;
`;

export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  display: none;
`;

export const StyledCheckbox = styled.div<{ checked: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border: 2px solid
    ${(props) =>
      props.checked
        ? props.theme.color.primaria.roxo_vivo
        : props.theme.color.neutra.cinza_texto};
  border-radius: 4px;
  background-color: ${(props) =>
    props.checked ? props.theme.color.primaria.roxo_vivo : "transparent"};
  margin-right: 8px;
  transition: all 0.3s;
`;

export const CheckboxLabel = styled.span`
  font-size: 16px;
`;