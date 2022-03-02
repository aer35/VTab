import { useState } from "react";

// component that handles floating point numbers in cost
const NumberInput: React.FC<
  React.InputHTMLAttributes<HTMLInputElement> & {
    number: number;
    onNumChange: (num: number) => void;
  }
> = ({ number, onNumChange, ...rest }) => {
  const [value, setValue] = useState("");

  const preferredValue = value.startsWith(number.toString())
    ? value
    : number.toString();

  return (
    <input
      {...rest}
      value={preferredValue}
      onChange={(e) => {
        let [num] = /\d*\.?\d{0,2}/.exec(e.target.value) ?? [];
        setValue(num);
        onNumChange(parseFloat(num) || 0);
      }}
    />
  );
};

export default NumberInput;
