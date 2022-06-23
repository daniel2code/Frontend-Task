import React from "react";

interface Props {
  className?: string;
  width?: string;
  height?: string;
  margin?: string;
  placeholder?: string;
  onChange?: any;
  value?: string | number;
  name?: string;
  type?: string;
}

const InputHelper: React.FC<Props> = ({
  placeholder,
  className,
  onChange,
  value,
  name,
  type,
}) => {
  return (
    <input
      onChange={onChange}
      value={value}
      name={name}
      type={type}
      placeholder={placeholder}
      className={className}
    />
  );
};

export default InputHelper;
