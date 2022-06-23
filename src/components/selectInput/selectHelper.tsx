import React, { ReactNode } from "react";

interface Props {
  className?: string;
  width?: string;
  height?: string;
  margin?: string;
  children?: ReactNode;
  onChange?: any;
  value?: string | number;
  name?: string;
  type?: string;
}

const InputHelper: React.FC<Props> = ({
  className,
  children,
  value,
  onChange,
  name,
}) => {
  return (
    <select value={value} onChange={onChange} name={name} className={className}>
      {children}
    </select>
  );
};

export default InputHelper;

interface OptionProp {
  color?: string;
  children?: any;
  className?: string;
}

export const OptionHelper: React.FC<OptionProp> = ({ children }) => {
  return <option>{children}</option>;
};
