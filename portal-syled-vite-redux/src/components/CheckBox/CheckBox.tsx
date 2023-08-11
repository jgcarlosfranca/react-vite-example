import { CheckboxWrapper, CheckboxLabel, HiddenCheckbox, StyledCheckbox } from "./CheckBox.styled";

interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  children?: React.ReactNode;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange, children }) => {
  const handleChange = () => {
    onChange(!checked);
  };

  return (
    <CheckboxWrapper>
      <HiddenCheckbox checked={checked} onChange={handleChange} />
      <StyledCheckbox checked={checked}>
        {checked && <CheckmarkIcon />}
      </StyledCheckbox>
      <CheckboxLabel>{children}</CheckboxLabel>
    </CheckboxWrapper>
  );
};

const CheckmarkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="#fff"
    width="18px"
    height="18px"
  >
    <path d="M9 16.2l-4.6-4.6L3 13l6 6 12-12-1.4-1.4L9 16.2z" />
  </svg>
);

export default Checkbox;
