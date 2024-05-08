import { useState } from "react";
import eyeClosed from "../../assets/images/auth/eye-closed.svg";
import eyeOpen from "../../assets/images/auth/eye-open.svg";
import "../../assets/styles/components/auth/AuthInput.scss";

function AuthInput({
  id,
  label,
  placeholder,
  type,
  value,
  handleChange,
  name,
}) {
  const [inputType, setInputType] = useState(type);

  const togglePasswordVisibility = () => {
    setInputType(inputType === "password" ? "text" : "password");
  };

  let inputElement;

  if (type === "password") {
    inputElement = (
      <div className="relative">
        <input
          className="input-block__input password"
          id={id}
          name={name}
          autoComplete={name}
          type={inputType}
          placeholder={placeholder}
          value={value}
          onChange={(e) => handleChange(e.target.value)}
        />
        <button
          className="input-block__btn"
          type="button"
          onClick={togglePasswordVisibility}
        >
          {inputType === "password" ? (
            <img src={eyeClosed} alt="closed eye" />
          ) : (
            <img src={eyeOpen} alt="open eye" />
          )}
        </button>
      </div>
    );
  } else {
    inputElement = (
      <input
        className="input-block__input"
        id={id}
        name={name}
        autoComplete={name}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => handleChange(e.target.value)}
      />
    );
  }

  return (
    <div className="input-block">
      <label className="input-block__label" htmlFor={id}>
        {label}
      </label>
      {inputElement}
    </div>
  );
}

export default AuthInput;
