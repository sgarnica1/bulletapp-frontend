import { useState } from "react";
import "./input-container.scss";

const InputContainer = ({ children, type, name, placeholder }) => {
  const [focusInput, setFocusInput] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className="InputContainer">
      <div
        htmlFor={name}
        className={`InputContainer__label ${focusInput && "focus"}`}
      >
        {placeholder}
      </div>
      <input
        type={type}
        name={name}
        value={value}
        required
        onChange={(event) => setValue(event.target.value)}
        onFocus={() => setFocusInput(true)}
        onBlur={() => (value === "" ? setFocusInput(false) : null)}
      />
      {children}
    </div>
  );
};

export { InputContainer };
