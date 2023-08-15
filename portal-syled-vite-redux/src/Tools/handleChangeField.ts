import { ChangeEvent, Dispatch, SetStateAction } from "react";

const handleChangeForms = (
  e: ChangeEvent<HTMLInputElement>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fieldFunction: Dispatch<SetStateAction<any>>
) => {
  const { type, name } = e.target;
  let value: string | number | boolean | Array<string | number> = "";

  if (type === "checkbox") {
    value = e.target.checked;
  } else if (type === "multicombo") {
    value = Array.isArray(e) ? e : [];
  } else {
    value = e.target.value;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fieldFunction((prevData: any) => ({ ...prevData, [name]: value }));
};

export default handleChangeForms;
