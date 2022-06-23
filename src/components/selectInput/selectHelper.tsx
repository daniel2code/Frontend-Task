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

// const SelectHelper: React.FC<Props> = ({
//   className,
//   children,
//   value,
//   onChange,
//   name,
// }) => {

const SelectHelper = React.forwardRef<HTMLSelectElement, Props>(
  (props, ref) => {
    return <select ref={ref} {...props}></select>;
  }
);

export default SelectHelper;

interface OptionProp {
  color?: string;
  children?: any;
  className?: string;
  disabled?: boolean;
  selected?: boolean;
}

export const OptionHelper: React.FC<OptionProp> = ({ children }, props) => {
  return <option {...props} >{children}</option>;
};
